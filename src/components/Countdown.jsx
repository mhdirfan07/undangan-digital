import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FloralDivider, FloralCorner, WatercolorBlob } from './FloralDecorations';

const Countdown = () => {
  const targetDate = new Date('2026-05-09T08:00:00+07:00').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-light via-accent/10 to-light relative overflow-hidden">
      {/* Background decorations */}
      <WatercolorBlob color="primary" size={300} className="-top-16 -right-20" />
      <WatercolorBlob color="secondary" size={250} className="bottom-0 -left-24" />

      {/* Floral corners */}
      <div className="absolute top-0 left-0 opacity-30">
        <FloralCorner size={120} />
      </div>
      <div className="absolute top-0 right-0 opacity-30 scale-x-[-1]">
        <FloralCorner size={120} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-calligraphy text-primary mb-3">Menuju Hari Bahagia</h2>
        <p className="text-secondary font-medium tracking-widest uppercase mb-4 font-sans text-sm">Sabtu, 09 Mei 2026</p>

        <FloralDivider className="mb-10 opacity-60" />

        {/* Countdown boxes */}
        <div className="flex justify-center gap-3 md:gap-6">
          {timeUnits.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-20 h-24 md:w-28 md:h-32 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/15 flex items-center justify-center overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                {/* Decorative gradient top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
                
                {/* Number with animation */}
                <motion.span
                  key={unit.value}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-3xl md:text-5xl font-sans font-bold text-dark"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>

                {/* Subtle center line */}
                <div className="absolute left-2 right-2 top-1/2 border-t border-dashed border-primary/10" />
              </div>
              <span className="mt-3 text-xs md:text-sm font-sans font-medium text-dark/60 uppercase tracking-wider">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Separator dots */}
        <div className="flex justify-center gap-3 mt-6">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              className="w-1.5 h-1.5 rounded-full bg-primary/40"
            />
          ))}
        </div>

        <FloralDivider className="mt-10 opacity-40" />
      </motion.div>
    </section>
  );
};

export default Countdown;
