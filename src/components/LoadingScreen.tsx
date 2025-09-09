import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const motivationalTexts = [
  "Crafting Digital Excellence...",
  "Building Tomorrow's Web...",
  "Designing Your Success...",
  "Creating Premium Experiences...",
  "Transforming Ideas Into Reality...",
  "Elevating Your Digital Presence...",
  "Engineering Perfect Solutions...",
  "Innovating Beyond Boundaries...",
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentText, setCurrentText] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % motivationalTexts.length);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="mb-12"
          >
            <div className="relative">
              <div className="text-6xl font-display font-bold gradient-text mb-4">
                WebKing AI
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-full"
              >
                <div className="w-2 h-2 bg-primary rounded-full absolute top-1 left-1"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Animated Text */}
          <div className="h-16 flex items-center justify-center mb-12">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentText}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-foreground pulse-neon"
              >
                {motivationalTexts[currentText]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-primary glow-animate"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="text-sm font-medium text-muted-foreground mt-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {progress}%
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary rounded-full opacity-60"
              animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-3/4 right-1/4 w-6 h-6 border border-accent rounded-full opacity-40"
              animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/6 w-2 h-2 bg-primary rounded-full opacity-80"
              animate={{ scale: [1, 1.5, 1], rotate: [0, 90, 180] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};