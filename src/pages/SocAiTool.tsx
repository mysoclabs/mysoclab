import { Footer } from "@/components/Footer";
import { Brain, Shield, Zap, Eye, Lock, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import redEagleLogo from "@/assets/infosecdairies-logo.jpg";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AnimatedCounter } from "@/components/Stats";

// Types for AnimatedNumber props
interface AnimatedNumberProps {
  value: number | string;
  duration?: number;
  className?: string;
}

// Animated Number Component
const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ 
  value, 
  duration = 1, 
  className = "" 
}) => {
  const [displayValue, setDisplayValue] = useState<string | number>(0);
  const controls = useAnimation();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;

    controls.start({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    });
    
    const numValue = typeof value === 'number' ? value : parseFloat(value.toString().replace(/[^0-9.]/g, ''));
    const hasPlus = typeof value === 'string' && value.includes('+');
    const isPercentage = typeof value === 'string' && value.includes('%');
    
    if (isNaN(numValue)) {
      setDisplayValue(String(value));
      return;
    }
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOut(progress);
      
      const currentValue = Math.floor(easedProgress * numValue);
      
      let display: string | number = currentValue;
      if (hasPlus) {
        display = `${currentValue}+`;
      } else if (isPercentage) {
        display = `${currentValue}%`;
      }
      
      setDisplayValue(display);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(hasPlus ? `${numValue}+` : isPercentage ? `${numValue}%` : numValue);
      }
    };
    
    const timeoutId = setTimeout(() => {
      const animationFrame = window.requestAnimationFrame(step);
      return () => window.cancelAnimationFrame(animationFrame);
    }, 50);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isInView, controls, value, duration]);

  return (
    <motion.span 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={`inline-block ${className}`}
    >
      {displayValue}
    </motion.span>
  );
};

// Animated Feature Card Component
const AnimatedFeatureCard = ({ icon: Icon, title, description, index, gradient }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1
        }
      });
    }
  }, [isInView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{
        boxShadow: "0 0 30px rgba(221, 20, 20, 0.45)",
        borderColor: "rgba(221, 20, 20, 0.8)",
        transition: { duration: 0.25, ease: "easeOut" }
      }}
      className="group p-8 transition-all duration-300 border backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(229, 217, 217, 0.2)',
      }}
    >
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: 'rgba(10, 10, 10, 0.7)',
          border: '1px solid rgba(229, 217, 217, 0.18)',
          backdropFilter: 'blur(18px)'
        }}
      >
        <Icon className="w-7 h-7" style={{ color: '#dd1414' }} />
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: '#dd1414' }}>{title}</h3>
      <p className="leading-relaxed" style={{ color: '#ffffff' }}>
        {description}
      </p>
    </motion.div>
  );
};

const SocAiTool = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms identify and analyze threats in real-time with unparalleled accuracy.",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous surveillance of your entire infrastructure with instant alerts and automated threat response.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Lightning-fast automated incident response neutralizes threats before they can cause damage.",
      gradient: "from-pink-500/20 to-red-500/20"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Military-grade encryption and secure data handling ensure maximum protection for your assets.",
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: Target,
      title: "Precision Analytics",
      description: "Deep threat intelligence and comprehensive vulnerability assessments powered by AI.",
      gradient: "from-orange-500/20 to-cyan-500/20"
    },
    {
      icon: Shield,
      title: "Proactive Defense",
      description: "Predictive security measures prevent attacks before they happen using behavioral analysis.",
      gradient: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  const benefits = [
    "Deploy in minutes, not months",
    "Reduce security costs by 60%",
    "Stop breaches before they start",
    "24/7 expert support included"
  ];

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen red-eagle-theme overflow-x-hidden" style={{ backgroundColor: 'hsl(var(--eagle-bg))' }}>
      {/* Hero Section - Premium Dark with Red Accents */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
        {/* Deep dark background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, hsl(0 0% 4%) 0%, hsl(0 0% 7%) 50%, hsl(0 0% 5%) 100%)'
          }}
        ></motion.div>
        
        {/* Subtle cream grid overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.015 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div 
            className="absolute inset-0" 
            initial={{ backgroundPosition: '0% 0%' }}
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: 'linear',
              repeatType: 'reverse'
            }}
            style={{
              backgroundImage: `linear-gradient(hsl(var(--eagle-cream)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--eagle-cream)) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}
          ></motion.div>
        </motion.div>

        {/* Red gradient glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
            scale: 1,
            x: ['0%', '5%', '0%'],
            y: ['0%', '5%', '0%']
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #dd1414 0%, transparent 70%)',
          }}
        ></motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge with animation */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm" 
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.4,
                  type: 'spring',
                  stiffness: 100
                }
              } : {}}
              style={{
                backgroundColor: 'rgba(221, 20, 20, 0.1)',
                border: '1px solid rgba(221, 20, 20, 0.3)'
              }}
            >
              <motion.img 
                src={redEagleLogo} 
                alt="Red Eagle" 
                className="w-5 h-5 rounded"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: 'linear'
                }}
              />
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: 'hsl(var(--eagle-cream))' }}>
                Red Eagle Platform
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight" 
              style={{ color: 'hsl(var(--eagle-text-bright))' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.6,
                  type: 'spring',
                  stiffness: 100
                }
              } : {}}
            >
              Stop Breaches.<br />
              <motion.span 
                style={{ color: '#dd1414' }}
                initial={{ opacity: 0, x: -20 }}
                animate={isHeroInView ? { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    delay: 0.8,
                    type: 'spring',
                    stiffness: 100
                  }
                } : {}}
              >
                Start Winning.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-10 max-w-2xl leading-relaxed" 
              style={{ color: 'hsl(var(--eagle-text-muted))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 1,
                  duration: 0.8
                }
              } : {}}
            >
              The AI-native SOC platform trusted by enterprises worldwide. 
              Detect, investigate, and respond to threats at machine speed.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 1.2,
                  type: 'spring',
                  stiffness: 100
                }
              } : {}}
            >
              <Link to="/trial-signup">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 8px 25px rgba(221, 20, 20, 0.4)'
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    boxShadow: '0 2px 15px rgba(221, 20, 20, 0.2)'
                  }}
                  className="inline-block"
                >
                  <Button 
                    size="lg" 
                    className="text-base font-bold px-8 py-6 border-0 group"
                    style={{
                      backgroundColor: '#dd1414',
                      color: '#e5d9d9',
                      boxShadow: '0 4px 20px rgba(221, 20, 20, 0.3)'
                    }}
                  >
                    Start free trial
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#dd1414' }} />
                  <span className="text-sm font-medium" style={{ color: 'hsl(var(--eagle-cream))' }}>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--eagle-surface))' }}>
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px] opacity-10"
          style={{ backgroundColor: '#dd1414' }}
          animate={{
            scale: [1, 1.2, 1],
            x: ['-50%', '-40%', '-50%'],
            y: ['-50%', '-60%', '-50%']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        ></motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8 }
            }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div 
              className="inline-block px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm" 
              style={{
                backgroundColor: 'rgba(221, 20, 20, 0.1)',
                border: '1px solid rgba(221, 20, 20, 0.3)'
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ 
                scale: 1, 
                opacity: 1,
                transition: { 
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 100
                }
              }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#dd1414' }}>
                PLATFORM CAPABILITIES
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" 
              style={{ color: 'hsl(var(--eagle-text-bright))' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.3,
                  duration: 0.6
                }
              }}
              viewport={{ once: true }}
            >
              Security That Never Sleeps
            </motion.h2>
            <motion.p 
              className="text-xl max-w-3xl mx-auto" 
              style={{ color: 'hsl(var(--eagle-text-muted))' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.4,
                  duration: 0.6
                }
              }}
              viewport={{ once: true }}
            >
              Unified AI-powered protection across your entire attack surface
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <AnimatedFeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--eagle-bg))' }}>
        {/* Animated background elements */}
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[150px] opacity-10"
          style={{ backgroundColor: '#dd1414' }}
          animate={{
            scale: [1, 1.2, 1],
            x: ['50%', '40%', '50%'],
            y: ['50%', '60%', '50%']
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        ></motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {[
              { value: '99.99%', label: 'Platform Uptime' },
              { value: '<60s', label: 'Mean Time to Detect' },
              { value: '24/7/365', label: 'Threat Monitoring' },
              { value: '150+', label: 'Integrations' }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      ease: 'easeOut'
                    }
                  }
                }}
              >
                <div 
                  className="text-4xl md:text-5xl font-bold mb-2" 
                  style={{ color: '#dd1414', minHeight: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <AnimatedCounter 
                    value={stat.value}
                    duration={2000}
                    className="inline-block"
                  />
                </div>
                <motion.div 
                  className="text-sm uppercase tracking-wider" 
                  style={{ color: 'hsl(var(--eagle-text-muted))' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1,
                    transition: { 
                      delay: 0.3 + (i * 0.1),
                      duration: 0.6
                    }
                  }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--eagle-surface))' }}>
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-1/2 w-full h-full"
          initial={{ opacity: 0, x: '-50%' }}
          whileInView={{ 
            opacity: 0.05,
            x: '-50%',
            transition: { duration: 1 }
          }}
          viewport={{ once: true }}
          style={{
            backgroundImage: `radial-gradient(circle at center, #dd1414 0%, transparent 50%)`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                delay: 0.2
              }
            }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'hsl(var(--eagle-text-bright))' }}>
              Ready to Elevate Your Security?
            </h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto" 
              style={{ color: 'hsl(var(--eagle-text-muted))' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.3,
                  duration: 0.6
                }
              }}
              viewport={{ once: true }}
            >
              Join thousands of organizations protecting their digital assets with Red Eagle
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.4,
                  type: 'spring',
                  stiffness: 100
                }
              }}
              viewport={{ once: true }}
            >
              <Link to="/trial-signup">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    className="text-base font-bold px-8 py-6 group relative overflow-hidden"
                    style={{
                      backgroundColor: '#dd1414',
                      color: '#e5d9d9',
                      boxShadow: '0 4px 20px rgba(221, 20, 20, 0.3)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.span 
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 0.1,
                        transition: { duration: 0.3 }
                      }}
                    />
                    <motion.span 
                      className="relative z-10 flex items-center"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop'
                      }}
                    >
                      Start Your Free Trial
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Global styles for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.15; transform: scale(1.05); }
            100% { opacity: 0.1; transform: scale(1); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
        `
      }} />
    </div>
  );
};

export default SocAiTool;
