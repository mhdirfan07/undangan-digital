import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence, motion } from 'framer-motion';

import SplashScreen from './components/SplashScreen';
import AudioPlayer from './components/AudioPlayer';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Location from './components/Location';
import RSVP from './components/RSVP';
import { FallingPetals } from './components/FloralDecorations';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = () => {
    setIsPlaying(true);

    // First: start revealing main content behind the splash
    setIsOpened(true);

    // Let the reveal animation settle, then remove the splash overlay from DOM
    // and enable scrolling smoothly
    setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  // Prevent scroll when splash screen is active
  if (!isOpened && typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
  }

  return (
    <ParallaxProvider>
      <div className="font-sans text-dark bg-light min-h-screen">
        {showSplash && <SplashScreen onOpen={handleOpen} />}

        {isOpened && <AudioPlayer isPlaying={isPlaying} togglePlay={() => setIsPlaying(!isPlaying)} />}

        {/* Global falling petals overlay */}
        {isOpened && <FallingPetals count={15} />}

        <motion.main 
          initial={{ opacity: 0 }}
          animate={isOpened ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className={!isOpened ? 'h-screen overflow-hidden' : ''}
        >
          <Hero />
          <Profile />
          <Gallery />
          <Location />
          <RSVP />
        </motion.main>
      </div>
    </ParallaxProvider>
  );
}

export default App;
