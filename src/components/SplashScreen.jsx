import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloralCorner, FloralDivider, WatercolorBlob } from './FloralDecorations';

const SplashScreen = ({ onOpen }) => {
  // Phases: 'initial' → 'flashing' → 'doors-opening' → done (unmount)
  const [phase, setPhase] = useState('initial');
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
  ];

  const handleBuka = () => {
    setPhase('flashing');
    
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (count >= photos.length) {
        clearInterval(interval);
        // Smoothly transition: last photo fades → doors open
        setTimeout(() => {
          setPhase('doors-opening');
        }, 400);
      } else {
        setPhotoIndex(count);
      }
    }, 700);
  };

  // Called when doors have fully opened
  const handleDoorsComplete = () => {
    onOpen();
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center"
      // Don't use exit here — we control everything via phases
    >
      {/* ─── DOORS ─── */}
      {/* Left Door */}
      <motion.div 
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-light z-40 border-r border-accent/30 shadow-[10px_0_15px_-3px_rgba(0,0,0,0.05)]"
        animate={phase === 'doors-opening' ? { x: '-100%' } : { x: 0 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => {
          if (phase === 'doors-opening') handleDoorsComplete();
        }}
      >
        <div className="absolute top-0 left-0">
          <FloralCorner size={160} />
        </div>
        <div className="absolute bottom-0 right-0 rotate-180">
          <FloralCorner size={130} />
        </div>
        <WatercolorBlob color="accent" size={250} className="top-1/4 -right-20 opacity-60" />
        <WatercolorBlob color="secondary" size={200} className="bottom-1/3 left-10 opacity-40" />
      </motion.div>
      
      {/* Right Door */}
      <motion.div 
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-light z-40 border-l border-accent/30 shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.05)]"
        animate={phase === 'doors-opening' ? { x: '100%' } : { x: 0 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute top-0 right-0 scale-x-[-1]">
          <FloralCorner size={160} />
        </div>
        <div className="absolute bottom-0 left-0 rotate-180 scale-x-[-1]">
          <FloralCorner size={130} />
        </div>
        <WatercolorBlob color="primary" size={250} className="top-1/3 -left-20 opacity-50" />
        <WatercolorBlob color="accent" size={180} className="bottom-1/4 right-10 opacity-40" />
      </motion.div>

      {/* ─── INVITATION CONTENT (visible in 'initial' phase) ─── */}
      <motion.div 
        className="relative z-50 flex flex-col items-center justify-center text-center px-4"
        animate={phase !== 'initial' ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <FloralDivider className="mb-6 opacity-70" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase mb-4 text-secondary font-medium font-sans"
        >
          The Wedding Of
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-5xl md:text-7xl font-calligraphy text-primary mb-4 drop-shadow-sm"
        >
          Romeo & Juliet
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <FloralDivider className="mb-6 opacity-60" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-8 font-sans text-lg md:text-xl text-dark"
        >
          Dear Mr/Mrs/Ms,<br/><strong className="text-xl mt-2 block">Tamu Kehormatan</strong>
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          onClick={handleBuka}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-primary text-white font-sans text-lg rounded-full hover:bg-accent hover:text-dark transition-all duration-300 shadow-xl border border-white/50"
        >
          ✉ Buka Undangan
        </motion.button>
      </motion.div>

      {/* ─── CAMERA FLASH SEQUENCE ─── */}
      <AnimatePresence>
        {phase === 'flashing' && (
          <motion.div 
            className="absolute inset-0 z-[60] flex items-center justify-center bg-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={`img-${photoIndex}`}
                src={photos[photoIndex]} 
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </AnimatePresence>
            {/* White Flash Effect */}
            <motion.div 
              key={`flash-${photoIndex}`}
              className="absolute inset-0 bg-white pointer-events-none"
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── LAST PHOTO CROSSFADE TO DOORS ─── */}
      <AnimatePresence>
        {phase === 'doors-opening' && (
          <motion.div
            className="absolute inset-0 z-[55] pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <img 
              src={photos[photos.length - 1]} 
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SplashScreen;
