import React, { useState, useMemo } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence, motion } from 'framer-motion';

import SplashScreen from './components/SplashScreen';
import AudioPlayer from './components/AudioPlayer';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Profile from './components/Profile';
import LoveStory from './components/LoveStory';
import Gallery from './components/Gallery';
import Location from './components/Location';
import WeddingGift from './components/WeddingGift';
import RSVP from './components/RSVP';
import { FallingPetals } from './components/FloralDecorations';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Read guest name from URL: ?to=NamaTamu
  const guestName = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('to');
    return name ? decodeURIComponent(name) : 'Tamu Kehormatan';
  }, []);

  const handleStartOpening = () => {
    // Lagu akan langsung diputar saat di-klik, sebelum animasi pintu selesai
    setIsPlaying(true);
  };

  const handleOpen = () => {
    setIsOpened(true);

    setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  if (!isOpened && typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
  }

  return (
    <ParallaxProvider>
      <div className="font-sans text-dark bg-light min-h-screen">
        {showSplash && <SplashScreen onOpen={handleOpen} onStartOpening={handleStartOpening} guestName={guestName} />}

        {/* AudioPlayer dirender sejak awal untuk menangkap klik user langsung */}
        <AudioPlayer 
          isPlaying={isPlaying} 
          togglePlay={() => setIsPlaying(!isPlaying)} 
          showButton={isOpened} 
        />

        {isOpened && <FallingPetals count={15} />}

        <motion.main 
          initial={{ opacity: 0 }}
          animate={isOpened ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className={!isOpened ? 'h-screen overflow-hidden' : ''}
        >
          <Hero />
          <Countdown />
          <Profile />
          <LoveStory />
          <Gallery />
          <Location />
          <WeddingGift />
          <RSVP />
        </motion.main>
      </div>
    </ParallaxProvider>
  );
}

export default App;
