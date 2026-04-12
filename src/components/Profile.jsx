import React from 'react';
import { motion } from 'framer-motion';
import { FloralDivider, RingIcon, WatercolorBlob, FloralCorner } from './FloralDecorations';

const Profile = () => {
  return (
    <section className="py-24 px-6 bg-light text-center relative overflow-hidden">
      {/* Watercolor blobs background */}
      <WatercolorBlob color="primary" size={400} className="top-10 -left-40" />
      <WatercolorBlob color="secondary" size={350} className="top-40 -right-32" />
      <WatercolorBlob color="accent" size={300} className="bottom-10 left-1/3" />

      {/* Floral corner decorations */}
      <div className="absolute top-0 left-0 opacity-40">
        <FloralCorner size={140} />
      </div>
      <div className="absolute top-0 right-0 opacity-40 scale-x-[-1]">
        <FloralCorner size={140} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-calligraphy text-primary mb-4">Mempelai</h2>
        <p className="text-secondary font-medium tracking-widest uppercase mb-4 font-sans">Dua Insan Penuh Cinta</p>

        <FloralDivider className="mb-16 opacity-80" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">

          {/* Groom */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mb-6">
              {/* Decorative ring around photo */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-primary p-1 shadow-2xl relative z-10">
                <img
                  src="/images/dwi.jpeg"
                  alt="Dwi"
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 scale-125"
                />
              </div>
              {/* Small floral accent */}
              <div className="absolute -bottom-2 -right-4 z-20">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g transform="translate(20,20)">
                    <circle cx="0" cy="0" r="6" fill="rgba(255,154,158,0.5)" />
                    <ellipse cx="-5" cy="-3" rx="4" ry="6" fill="rgba(255,154,158,0.3)" transform="rotate(-30)" />
                    <ellipse cx="5" cy="-3" rx="4" ry="6" fill="rgba(255,154,158,0.3)" transform="rotate(30)" />
                    <ellipse cx="0" cy="5" rx="4" ry="5" fill="rgba(250,208,196,0.4)" />
                    <circle cx="0" cy="0" r="2.5" fill="rgba(255,154,158,0.7)" />
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-calligraphy text-primary mb-2">Dwi</h3>
            <p className="text-dark/70 mb-1 font-sans text-sm">Anak Kedua dari</p>
            <p className="font-semibold text-dark font-sans text-sm">Bpk. Lord  & Ibu Lady </p>
          </motion.div>

          {/* Ring / Love connector */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <RingIcon className="mb-2" />
            <span className="text-4xl font-calligraphy text-primary/40">&</span>
          </motion.div>

          {/* Bride */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mb-6">
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-accent/30 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-primary p-1 shadow-2xl relative z-10">
                <img
                  src="/images/turkis.jpeg"
                  alt="Turkis"
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 scale-125"
                />
              </div>
              {/* Small floral accent */}
              <div className="absolute -bottom-2 -left-4 z-20 scale-x-[-1]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g transform="translate(20,20)">
                    <circle cx="0" cy="0" r="6" fill="rgba(255,154,158,0.5)" />
                    <ellipse cx="-5" cy="-3" rx="4" ry="6" fill="rgba(255,154,158,0.3)" transform="rotate(-30)" />
                    <ellipse cx="5" cy="-3" rx="4" ry="6" fill="rgba(255,154,158,0.3)" transform="rotate(30)" />
                    <ellipse cx="0" cy="5" rx="4" ry="5" fill="rgba(250,208,196,0.4)" />
                    <circle cx="0" cy="0" r="2.5" fill="rgba(255,154,158,0.7)" />
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-calligraphy text-primary mb-2">Turkis </h3>
            <p className="text-dark/70 mb-1 font-sans text-sm">Anak keenam dari</p>
            <p className="font-semibold text-dark font-sans text-sm">Bpk. Lord  & Ibu Lady </p>
          </motion.div>

        </div>

        {/* Bottom divider */}
        <FloralDivider className="mt-16 opacity-60" />
      </motion.div>
    </section>
  );
};

export default Profile;
