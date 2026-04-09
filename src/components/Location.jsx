import React from 'react';
import { motion } from 'framer-motion';
import { FloralDivider, FloralCorner, WatercolorBlob } from './FloralDecorations';

const Location = () => {
  const venue = {
    name: 'Cultural Park Bengkulu',
    address: 'Kota Bengkulu, Bengkulu, Indonesia',
    date: 'Minggu, 12 Desember 2027',
    akadTime: '08:00 WIB - Selesai',
    resepsiTime: '11:00 WIB - Selesai',
    mapsLink: 'https://maps.app.goo.gl/4jWFDBFz4J6sJNF9A',
    lat: -3.8161785,
    lng: 102.2881776,
  };

  // Google Maps embed URL
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.7!2d${venue.lng}!3d${venue.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b077ee814c6f%3A0x67a7562522789d8d!2sCultural%20Park%20Bengkulu!5e0!3m2!1sid!2sid!4v1`;

  return (
    <section className="py-24 px-4 bg-light relative overflow-hidden">
      {/* Background blobs */}
      <WatercolorBlob color="primary" size={400} className="-top-20 -left-32" />
      <WatercolorBlob color="secondary" size={350} className="bottom-10 -right-28" />
      <WatercolorBlob color="accent" size={280} className="top-1/2 left-1/4" />

      {/* Floral corners */}
      <div className="absolute top-0 left-0 opacity-40">
        <FloralCorner size={140} />
      </div>
      <div className="absolute top-0 right-0 opacity-40 scale-x-[-1]">
        <FloralCorner size={140} />
      </div>
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
        className="max-w-4xl mx-auto relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-calligraphy text-primary mb-4">Lokasi Acara</h2>
        <p className="text-secondary font-medium tracking-widest uppercase mb-4 font-sans">Tempat & Waktu</p>
        
        <FloralDivider className="mb-12 opacity-70" />

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10 relative overflow-hidden"
          >
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 opacity-20 scale-x-[-1]">
              <FloralCorner size={80} />
            </div>
            
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <h3 className="text-2xl font-calligraphy text-primary mb-2">Akad Nikah</h3>
            <p className="text-dark font-sans font-semibold mb-1">{venue.date}</p>
            <p className="text-dark/70 font-sans text-sm">{venue.akadTime}</p>
            
            <div className="mt-4 pt-4 border-t border-primary/10">
              <p className="text-dark/80 font-sans text-sm leading-relaxed">
                <span className="font-semibold text-dark">{venue.name}</span><br/>
                {venue.address}
              </p>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-accent/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 opacity-20 scale-x-[-1]">
              <FloralCorner size={80} />
            </div>
            
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-calligraphy text-accent mb-2">Resepsi</h3>
            <p className="text-dark font-sans font-semibold mb-1">{venue.date}</p>
            <p className="text-dark/70 font-sans text-sm">{venue.resepsiTime}</p>
            
            <div className="mt-4 pt-4 border-t border-accent/10">
              <p className="text-dark/80 font-sans text-sm leading-relaxed">
                <span className="font-semibold text-dark">{venue.name}</span><br/>
                {venue.address}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 relative"
        >
          <iframe
            src={embedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pernikahan - Cultural Park Bengkulu"
            className="w-full"
          />
        </motion.div>

        {/* Open in Google Maps button */}
        <motion.a
          href={venue.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-primary text-white font-sans font-semibold rounded-full hover:bg-accent hover:text-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Buka di Google Maps
        </motion.a>

        <FloralDivider className="mt-16 opacity-50" />
      </motion.div>
    </section>
  );
};

export default Location;
