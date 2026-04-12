import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloralCorner, FloralDivider, WatercolorBlob } from './FloralDecorations';

// Fungsi bantuan untuk memberi jeda waktu agar logika animasi lebih rapi
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const SplashScreen = ({ onOpen, onStartOpening, guestName = 'Tamu Kehormatan' }) => {
  // Phases: 'initial' → 'flashing' → 'doors-opening'
  const [phase, setPhase] = useState('initial');
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = [
    "/images/IMG_1884.JPG.jpeg",
    "/images/IMG_2069.JPG.jpeg",
    "/images/IMG_1998.JPG.jpeg"
  ];

  const handleBuka = async () => {
    if (onStartOpening) {
      onStartOpening();
    }
    setPhase('flashing');

    // Looping untuk memutar setiap foto dengan efek jeda
    for (let i = 0; i < photos.length; i++) {
      setPhotoIndex(i);
      // Tunggu 1.8 detik per foto (1.2s untuk animasi flash + 0.6s untuk melihat foto)
      await sleep(900); 
    }

    // Setelah foto habis, pindah ke fase pintu terbuka (di mana flash terakhir akan muncul)
    setPhase('doors-opening');
  };

  // Dipanggil saat pintu selesai terbuka sepenuhnya
  const handleDoorsComplete = () => {
    onOpen();
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center"
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
          className="text-6xl md:text-7xl font-calligraphy text-primary mb-4 drop-shadow-sm"
        >
          Dwi & Turkis
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
          Kepada Yth:<br/><strong className="text-xl mt-2 block">{guestName}</strong>
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

      {/* ─── CAMERA FLASH SEQUENCE (Animasi Looping Foto) ─── */}
      <AnimatePresence>
        {phase === 'flashing' && (
          <motion.div 
            className="absolute inset-0 z-[60] flex items-center justify-center bg-black"
          >
            {/* Foto Baru yang Muncul (Tidak menggunakan AnimatePresence untuk cut yang lebih tegas) */}
            <motion.img 
              key={`img-${photoIndex}`}
              src={photos[photoIndex]} 
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
            
            {/* Efek Jepretan Kamera (Hitam -> Putih -> Transparan) */}
            <motion.div 
              key={`flash-${photoIndex}`}
              className="absolute inset-0 pointer-events-none"
              animate={{ 
                backgroundColor: [
                  "rgba(0,0,0,1)",       // 1. Shutter menutup (Gelap sesaat)
                  "rgba(255,255,255,1)", // 2. Flash menyala (Putih terang)
                  "rgba(255,255,255,0)"  // 3. Memudar perlahan
                ] 
              }}
              transition={{ 
                duration: 1.2, 
                times: [0, 0.05, 1], // Durasi setiap frame
                ease: 'easeOut' 
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── FINAL FLASH & CROSSFADE KE PINTU TERBUKA ─── */}
      <AnimatePresence>
        {phase === 'doors-opening' && (
          <motion.div
            className="absolute inset-0 z-[55] pointer-events-none"
          >
            {/* Mempertahankan foto terakhir di belakang pintu lalu perlahan menghilang */}
            <motion.img 
              src={photos[photos.length - 1]} 
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />

            {/* Flash Jepretan Terakhir sebelum pintu terungkap */}
            <motion.div 
              className="absolute inset-0 z-10"
              animate={{
                backgroundColor: [
                  "rgba(0,0,0,1)",       // Shutter terakhir menutup
                  "rgba(255,255,255,1)", // Flash bang!
                  "rgba(255,255,255,0)"  // Pintu perlahan terlihat
                ]
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.1, 1],
                ease: "easeOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SplashScreen;