import { useEffect, useState } from "react";

export interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
  startFromZero?: boolean;
}

export const AnimatedCounter = ({
  value,
  duration = 4200, // ⏳ slower = premium feel
  className = "",
  startFromZero = true,
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(
    startFromZero ? "0" : value
  );

  /* ---------------- PARSE VALUE ---------------- */

  let targetNumber = 0;
  let format: "percent" | "plain" | "lessThanSeconds" | "days247365" = "plain";

  if (value === "24/7/365") {
    targetNumber = 24;
    format = "days247365";
  } else if (value.startsWith("<") && value.endsWith("s")) {
    targetNumber = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
    format = "lessThanSeconds";
  } else {
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
    targetNumber = Number.isFinite(numeric) ? numeric : 0;
    format = value.includes("%") ? "percent" : "plain";
  }

  const decimalPlaces = format === "percent" ? 2 : 0;

  /* ---------------- ANIMATION ---------------- */

  useEffect(() => {
    let frameId: number | undefined;
    let startTime: number | null = null;

    const start = 0;
    const end = targetNumber;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // 🎬 Cinematic ease-in-out
      const easeInOut =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const current = start + (end - start) * easeInOut;

      let formatted = "";

      if (format === "lessThanSeconds") {
        formatted = `<${Math.round(current)}s`;
      } else if (format === "days247365") {
        const ratio = end ? current / end : 0;
        formatted = `${Math.round(24 * ratio)}/${Math.round(
          7 * ratio
        )}/${Math.round(365 * ratio)}`;
      } else if (format === "percent") {
        formatted = `${current.toFixed(decimalPlaces)}%`;
      } else {
        const rounded = Math.round(current);
        formatted = `${rounded.toLocaleString()}${
          value.endsWith("+") ? "+" : ""
        }`;
      }

      setDisplayValue(formatted);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    // ⏱ Intentional delay so it doesn’t start instantly
    const delay = 700; // ms
    const timeoutId = setTimeout(() => {
      frameId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value, duration, targetNumber, format, decimalPlaces]);

  return <span className={className}>{displayValue}</span>;
};
