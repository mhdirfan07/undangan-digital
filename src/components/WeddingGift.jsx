import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FloralDivider, FloralCorner, WatercolorBlob } from './FloralDecorations';

const WeddingGift = () => {
  const [copied, setCopied] = useState('');

  const accounts = [
    {
      bank: 'Mandiri',
      number: '1234567890123',
      name: 'Dwi',
      logo: 'public/images/mandiri_logo.png',
      logoSize: 'w-24'
    },
    {
      bank: 'BCA',
      number: '0987654321',
      name: 'Turkis',
      logo: 'public/images/bca_logo.png',
      logoSize: 'w-24'
    },
    {
      bank: 'DANA',
      number: '081234567890',
      name: 'Dwi & Turkis',
      logo: 'public/images/Dana_logo.png',
      logoSize: 'w-24'
    }
  ];

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    setCopied(number);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section className="py-24 px-4 bg-light relative overflow-hidden">
      {/* Background decorations */}
      <WatercolorBlob color="primary" size={400} className="-bottom-20 -left-20" />
      <WatercolorBlob color="accent" size={300} className="top-1/4 -right-10 opacity-30" />

      {/* Floral corners */}
      <div className="absolute top-0 right-0 opacity-40 scale-x-[-1]">
        <FloralCorner size={140} />
      </div>
      <div className="absolute bottom-0 left-0 opacity-30 rotate-180 scale-x-[-1]">
        <FloralCorner size={120} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-calligraphy text-primary mb-4">Kado Digital</h2>
        <p className="text-secondary font-medium tracking-widest uppercase mb-4 font-sans text-sm">Doa Restu Anda Adalah Karunia Terindah</p>
        
        <FloralDivider className="mb-12 opacity-70" />

        <p className="text-dark/70 font-sans mb-12 max-w-2xl mx-auto">
          Bagi Bapak/Ibu/Saudara/i yang ingin mengirimkan kado digital, dapat melalui nomor rekening/e-wallet di bawah ini:
        </p>

        {/* Account Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accounts.map((acc, i) => (
            <motion.div
              key={acc.bank}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-primary/10 relative group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-20 flex items-center justify-center mb-6 mx-auto">
                <img 
                  src={acc.logo} 
                  alt={acc.bank} 
                  className={`${acc.logoSize} object-contain transform group-hover:scale-110 transition-transform duration-500 shadow-sm rounded-lg p-2 bg-white/50`}
                />
              </div>
              
              <h3 className="text-xl font-semibold text-dark mb-1 font-sans">{acc.bank}</h3>
              <p className="text-dark/60 text-sm mb-4 font-sans">A.N. {acc.name}</p>
              
              <div className="bg-light p-4 rounded-xl mb-6 relative overflow-hidden">
                <p className="text-primary font-bold font-sans tracking-widest text-lg">{acc.number}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCopy(acc.number)}
                className={`w-full py-3 rounded-xl font-sans font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  copied === acc.number 
                    ? 'bg-green-500 text-white' 
                    : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {copied === acc.number ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Tersalin
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Salin Nomor
                  </>
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-dark/50 italic font-sans text-sm">Terima kasih atas segala ketulusan doa dan kado terbaik yang diberikan.</p>
          <FloralDivider className="opacity-40" />
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingGift;
