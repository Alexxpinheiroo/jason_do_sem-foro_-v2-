import { motion, AnimatePresence } from "motion/react";
import { Ghost } from "lucide-react";
import { useEffect, useState } from "react";

export function Loader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Artificial loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Static/Noise effect overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicGLeE/giphy.gif')] bg-repeat" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.1, 1], 
              opacity: [0, 1, 0.8, 1] 
            }}
            transition={{ 
              duration: 2,
              times: [0, 0.2, 0.8, 1],
              ease: "easeInOut"
            }}
            className="relative"
          >
            <Ghost size={80} className="text-primary animate-pulse" />
            <motion.div 
              animate={{ 
                opacity: [0, 1, 0, 1, 0.5, 1],
                x: [0, -2, 2, -1, 1, 0]
              }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity, 
                repeatType: "mirror",
                repeatDelay: 0.2
              }}
              className="absolute -inset-4 border-2 border-primary/20 blur-xl rounded-full" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center px-6"
          >
            <h1 className="text-2xl font-black uppercase tracking-[0.5em] text-foreground mb-8">
              O Terror <span className="text-primary animate-pulse">Começou</span>
            </h1>

            {isLoaded ? (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="px-12 py-5 bg-primary text-white font-black uppercase tracking-[0.3em] text-sm hover:bg-blood-light transition-all shadow-[0_0_30px_rgba(235,33,46,0.3)] animate-glow"
              >
                ENTRAR NO PESADELO
              </motion.button>
            ) : (
              <div className="flex gap-1 justify-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scaleY: [1, 1.5, 1],
                      backgroundColor: ["#ffffff", "#ff0000", "#ffffff"]
                    }}
                    transition={{ 
                      duration: 0.6, 
                      repeat: Infinity, 
                      delay: i * 0.1 
                    }}
                    className="w-1 h-4 bg-foreground/20"
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
