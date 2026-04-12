import React, { useState, useEffect, useRef } from 'react';
import { Disc3, PauseCircle } from 'lucide-react';

const AudioPlayer = ({ isPlaying, togglePlay, showButton = true }) => {
  const audioRef = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);

  // --- KONFIGURASI AUDIO ---
  const VOLUME = 0.6; // Rentang 0.0 hingga 1.0 (0.5 = 50% suara)
  const START_TIME = 45; // Lagu akan mulai dari detik ke-23
  // -------------------------

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      // Mengatur volume lagu
      audioRef.current.volume = VOLUME;

      if (isPlaying) {
        // Jika lagu baru mau diputar pertama kali, lompat ke detik yang ditentukan
        if (audioRef.current.currentTime === 0) {
          audioRef.current.currentTime = START_TIME;
        }

        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Autoplay diblokir oleh browser:", error);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  if (!hasMounted) return null;

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/music/Mariah Carey - Thank God I Found You.mp3" 
        loop
        preload="auto"
      />

      {showButton && (
        <button 
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-40 bg-white/50 backdrop-blur-md p-3 rounded-full border border-primary/30 shadow-xl hover:bg-primary/20 transition-all duration-300"
        >
          {isPlaying ? (
            <Disc3 className="w-6 h-6 text-dark animate-spin-slow" />
          ) : (
            <PauseCircle className="w-6 h-6 text-dark" />
          )}
        </button>
      )}
    </>
  );
};

export default AudioPlayer;
