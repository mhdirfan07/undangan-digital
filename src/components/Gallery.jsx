import React from 'react';
import { motion } from 'framer-motion';
import { FloralDivider, FloralCorner, WatercolorBlob } from './FloralDecorations';

const Gallery = () => {

  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <section className="py-24 px-4 bg-accent/20 text-center relative overflow-hidden">
      {/* Background decorations */}
      <WatercolorBlob color="primary" size={350} className="-top-20 -right-20" />
      <WatercolorBlob color="secondary" size={300} className="bottom-20 -left-32" />

      {/* Floral corners */}
      <div className="absolute bottom-0 left-0 opacity-30 rotate-180 scale-x-[-1]">
        <FloralCorner size={120} />
      </div>
      <div className="absolute bottom-0 right-0 opacity-30 rotate-180">
        <FloralCorner size={120} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative z-10"
      >
         <h2 className="text-4xl md:text-5xl font-calligraphy text-dark mb-4">Galeri</h2>
         <p className="text-secondary font-medium tracking-widest uppercase mb-4 font-sans">Moment Bahagia Kami</p>

         <FloralDivider className="mb-12 opacity-70" />

         <p className="text-sm text-gray-500 mb-8 italic font-sans">Foto-foto ini diambil dan diintegrasikan langsung melalui Folder Google Drive.</p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {images.map((src, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl shadow-lg h-72 group relative"
              >
                <img 
                  src={src} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Soft gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Floral accent on top-right of each card */}
                <div className="absolute top-0 right-0 opacity-50 scale-x-[-1]">
                  <FloralCorner size={60} />
                </div>
              </motion.div>
            ))}
         </div>

         <FloralDivider className="mt-16 opacity-50" />
      </motion.div>
    </section>
  );
};

export default Gallery;
