import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Disc3, PauseCircle } from 'lucide-react';

const AudioPlayer = ({ isPlaying, togglePlay }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <div className="hidden">
        <ReactPlayer 
          url="https://www.youtube.com/watch?v=9E6b3swbnWg" 
          playing={isPlaying} 
          loop={true} 
          volume={0.5} 
          width="0" 
          height="0" 
        />
      </div>

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
    </>
  );
};

export default AudioPlayer;
