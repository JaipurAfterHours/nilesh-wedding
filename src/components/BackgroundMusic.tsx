import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/audio/wedding-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Try to autoplay (browsers may block this)
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
        })
        .catch(() => {
          // Autoplay was prevented, show the prompt
          setIsPlaying(false);
        });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowPrompt(false);
      });
    }
  };

  const startMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
      setShowPrompt(false);
    });
  };

  return (
    <>
      {/* Initial prompt overlay when autoplay blocked */}
      <AnimatePresence>
        {showPrompt && !isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center"
            onClick={startMusic}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-ivory via-cream to-ivory p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4 border-2 border-gold/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-magenta flex items-center justify-center">
                <Volume2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-script text-3xl text-magenta mb-2">
                Welcome!
              </h3>
              <p className="font-body text-brown-light mb-6">
                Tap to enter with music
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={startMusic}
                  className="px-6 py-3 bg-gradient-to-r from-gold to-magenta text-white rounded-full font-heading tracking-wide shadow-lg hover:shadow-xl transition-all"
                >
                  Play Music
                </button>
                <button
                  onClick={() => setShowPrompt(false)}
                  className="px-6 py-3 bg-brown-light/10 text-brown rounded-full font-heading tracking-wide hover:bg-brown-light/20 transition-all"
                >
                  Skip
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating music control button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-gold to-magenta shadow-lg flex items-center justify-center hover:shadow-xl transition-all group"
        title={isPlaying ? "Mute music" : "Play music"}
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-white" />
          ) : (
            <VolumeX className="w-6 h-6 text-white" />
          )}
        </motion.div>
        
        {/* Pulsing ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gold"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    </>
  );
};
