import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const autoplayTriggered = useRef(false);

  useEffect(() => {
    const attemptPlay = () => {
      if (audioRef.current && !isPlaying && !autoplayTriggered.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            autoplayTriggered.current = true;
            setShowPrompt(false);
            removeListeners();
          })
          .catch(() => {
            // Probably blocked by browser, wait for interaction
          });
      }
    };

    const removeListeners = () => {
      window.removeEventListener("mousedown", attemptPlay);
      window.removeEventListener("keydown", attemptPlay);
      window.removeEventListener("touchstart", attemptPlay);
    };

    // Try immediately (might work if already interacted or browser allows)
    attemptPlay();

    // Listen for first real interaction
    window.addEventListener("mousedown", attemptPlay);
    window.addEventListener("keydown", attemptPlay);
    window.addEventListener("touchstart", attemptPlay);

    return () => {
      removeListeners();
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      autoplayTriggered.current = true; // Block subsequent autoplay attempts
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => {
          console.error("Playback failed:", e);
          setIsPlaying(false);
        });
    }
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
        {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
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
