import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const attemptPlay = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setShowPrompt(false);
            window.removeEventListener("mousedown", attemptPlay);
            window.removeEventListener("keydown", attemptPlay);
            window.removeEventListener("touchstart", attemptPlay);
          })
          .catch(() => {
            // Probably blocked by browser, wait for interaction
          });
      }
    };

    // Try immediately (might work if already interacted or browser allows)
    attemptPlay();

    // Listen for first real interaction
    window.addEventListener("mousedown", attemptPlay);
    window.addEventListener("keydown", attemptPlay);
    window.addEventListener("touchstart", attemptPlay);

    return () => {
      window.removeEventListener("mousedown", attemptPlay);
      window.removeEventListener("keydown", attemptPlay);
      window.removeEventListener("touchstart", attemptPlay);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed:", e));
    }
    setIsPlaying(!isPlaying);
    setShowPrompt(false);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {showPrompt && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute left-full ml-4 bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-2 rounded-sm whitespace-nowrap"
          >
            Clique para o terror
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="w-12 h-12 bg-secondary/80 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/20 text-primary shadow-xl"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>

      {/* Hidden Audio Element - Using a placeholder spooky sound URL if possible, otherwise just a stub */}
      <audio 
        ref={audioRef} 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder
        loop 
      />
    </div>
  );
}
