import { motion, AnimatePresence } from "motion/react";
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

  const [imgError, setImgError] = useState(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden text-white"
        >
          {/* Grainy noise effect instead of broken Giphy */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-zinc-800" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          
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
            {!imgError ? (
              <img 
                src="input_file_11.png" 
                alt="Jason Mask" 
                className="w-32 h-32 object-contain filter drop-shadow-[0_0_20px_rgba(204,0,0,0.6)] animate-pulse" 
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-24 h-24 flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary animate-pulse">
                  <path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/>
                </svg>
              </div>
            )}
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
            <motion.h1 
              animate={{ 
                opacity: [1, 0.9, 1, 0.8, 1, 0.6, 1],
                x: [0, -1, 1, -0.5, 0.5, -2, 0],
                filter: [
                  "drop-shadow(0 0 0px rgba(235,33,46,0))",
                  "drop-shadow(0 0 10px rgba(235,33,46,0.5))",
                  "drop-shadow(0 0 2px rgba(235,33,46,0.2))",
                  "drop-shadow(0 0 15px rgba(235,33,46,0.8))",
                  "drop-shadow(0 0 0px rgba(235,33,46,0))"
                ]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                times: [0, 0.1, 0.2, 0.3, 0.5, 0.55, 1],
                ease: "easeInOut"
              }}
              className="text-2xl font-black uppercase tracking-[0.5em] text-foreground mb-8 select-none"
            >
              {"O Terror ".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.08 }}
                >
                  {char}
                </motion.span>
              ))}
              <span className="text-primary inline-block">
                {"Começou".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 + index * 0.08 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

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
