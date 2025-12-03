import { Users, Shield, Award, TrendingUp } from "lucide-react";
import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
  startFromZero?: boolean;
}

export const AnimatedCounter = ({
  value,
  duration = 2000,
  className = '',
  startFromZero = true,
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(startFromZero ? '0' : value);

  // Handle special formats so everything "rolls" nicely
  let targetNumber = 0;
  let format: 'percent' | 'plain' | 'lessThanSeconds' | 'days247365' = 'plain';

  if (value === '24/7/365') {
    // Animate the leading 24, keep the full label
    targetNumber = 24;
    format = 'days247365';
  } else if (value.startsWith('<') && value.endsWith('s')) {
    // e.g. <60s
    const num = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
    targetNumber = num;
    format = 'lessThanSeconds';
  } else {
    // Default: extract leading numeric part and treat suffix as-is
    const numericMatch = value.match(/^(\d*\.?\d*)/);
    const numericPart = numericMatch ? numericMatch[0] : '';
    const num = parseFloat(numericPart) || 0;
    targetNumber = num;
    format = value.includes('%') ? 'percent' : 'plain';
  }

  const decimalPlaces = format === 'percent' ? 2 : 0;

  // DEBUG: log how the value is interpreted
  console.log('[AnimatedCounter:init]', {
    rawValue: value,
    targetNumber,
    format,
    decimalPlaces,
  });

  // Safety: if we failed to get a valid number, just show the raw value
  if (!Number.isFinite(targetNumber)) {
    console.warn('[AnimatedCounter] Invalid targetNumber, falling back to raw value', {
      rawValue: value,
      targetNumber,
      format,
    });
    return <span className={className}>{value}</span>;
  }

  useEffect(() => {
    let frameId: number | undefined;
    let startTimestamp: number | null = null;

    const start = 0;
    const end = targetNumber;

    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOut;

      let formatted = '';
      if (format === 'lessThanSeconds') {
        const rounded = Math.round(current);
        formatted = `<${rounded}s`;
      } else if (format === 'days247365') {
        // Animate all three parts of 24/7/365
        const ratio = end ? current / end : 0;
        const dayValue = Math.round(24 * ratio);
        const weekValue = Math.round(7 * ratio);
        const yearValue = Math.round(365 * ratio);
        formatted = `${dayValue}/${weekValue}/${yearValue}`;
      } else if (format === 'percent') {
        const fixed = current.toFixed(decimalPlaces);
        formatted = `${Number(fixed).toLocaleString()}%`;
      } else {
        const rounded = Math.round(current);
        // Keep any "+" at the end for things like 150+
        const hasPlus = value.trim().endsWith('+');
        formatted = `${rounded.toLocaleString()}${hasPlus ? '+' : ''}`;
      }

      // DEBUG: per-frame log (comment out if too noisy)
      // console.log('[AnimatedCounter:step]', { rawValue: value, progress, current, formatted });

      setDisplayValue(formatted);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      if (frameId !== undefined) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [duration, targetNumber, format, decimalPlaces, value]);

  return (
    <span className={className}>
      {displayValue}
      {import.meta.env.DEV && (
        <span className="block text-[10px] text-muted-foreground/60 mt-1">
          {/* Debug info visible only in dev */}
          debug: value={value}, target={targetNumber}, format={format}
        </span>
      )}
    </span>
  );
};

const stats = [
  {
    icon: Users,
    value: "99.99%",
    label: "PLATFORM UPTIME",
    description: "Guaranteed reliability"
  },
  {
    icon: Shield,
    value: "<60s",
    label: "MEAN TIME TO DETECT",
    description: "Rapid threat detection"
  },
  {
    icon: Award,
    value: "24/7/365",
    label: "THREAT MONITORING",
    description: "Always watching"
  },
  {
    icon: TrendingUp,
    value: "150+",
    label: "INTEGRATIONS",
    description: "Seamless connectivity"
  },
];

export const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 border border-border/50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-primary font-mono">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm uppercase tracking-wider font-medium text-foreground/80 mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
