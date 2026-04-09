import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { FloralCorner, FloralDivider, WatercolorBlob, BismillahDecor } from './FloralDecorations';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <Parallax speed={-20} className="absolute inset-0">
        <div className="w-full h-[120vh] bg-[url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center brightness-50" />
      </Parallax>
      
      {/* Floral corners overlay */}
      <div className="absolute top-0 left-0 z-20 opacity-80">
        <FloralCorner size={200} />
      </div>
      <div className="absolute top-0 right-0 z-20 opacity-80 scale-x-[-1]">
        <FloralCorner size={200} />
      </div>
      <div className="absolute bottom-0 left-0 z-20 opacity-60 rotate-180 scale-x-[-1]">
        <FloralCorner size={160} />
      </div>
      <div className="absolute bottom-0 right-0 z-20 opacity-60 rotate-180">
        <FloralCorner size={160} />
      </div>

      <div className="relative z-10 text-center text-white p-8 md:p-12 max-w-3xl glass-dark rounded-3xl">
        {/* Bismillah */}
        <BismillahDecor className="mb-6" />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-widest text-primary mb-4 uppercase font-sans font-medium"
        >
          We Are Getting Married
        </motion.p>

        {/* Floral divider above name */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FloralDivider className="mb-4 opacity-60" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-calligraphy text-white mb-4 drop-shadow-lg"
        >
          Romeo & Juliet
        </motion.h1>

        {/* Floral divider below name */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <FloralDivider className="mb-6 opacity-60" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl font-sans tracking-wide mb-4"
        >
          Minggu, 12 Desember 2027
        </motion.p>

        {/* Romantic verse */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-sm md:text-base font-sans italic text-white/60 leading-relaxed"
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup<br className="hidden md:block" /> dari jenismu sendiri, supaya kamu merasa tenteram."
          <span className="block mt-1 text-xs text-primary/70 not-italic">— QS. Ar-Rum: 21</span>
        </motion.p>
      </div>
      
      {/* Curved bottom overlay */}
      {/* <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-light to-transparent z-20"></div> */}
    </section>
  );
};

export default Hero;
