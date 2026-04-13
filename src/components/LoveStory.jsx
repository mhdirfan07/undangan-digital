import React from 'react';
import { motion } from 'framer-motion';
import { FloralDivider, WatercolorBlob, FloralCorner, RingIcon } from './FloralDecorations';

const LoveStory = () => {
  const storyItems = [
    {
      title: "Awal Pertemuan",
      content: "Takdir mempertemukan kami di tanah rantau, ribuan kilometer dari rumah. Namun siapa sangka, di tengah asingnya kota orang, kami justru menemukan kehangatan kampung halaman dalam diri satu sama lain. Berawal dari kesamaan asal, kami tumbuh dalam pertemanan yang bermuara pada satu janji: Komitmen.",
      date: "Perkenalan"
    },
    {
      title: "Ujian Jarak",
      content: "Meski jarak sempat memisahkan saat langkah membawa salah satu dari kami kembali ke tempat asal, ia tak pernah benar-benar menjauhkan. Karena bagi kami, cinta bukan tentang frekuensi pertemuan, tapi tentang siapa yang tetap bertahan saat jarak yang memisahkan.",
      date: "Long Distance"
    },
    {
      title: "Menuju Halal",
      content: "Kini, saatnya janji tak kasat mata ini diresmikan dalam ikatan suci. Bukan lagi tentang 'aku' di sini dan 'kamu' di sana, tapi tentang 'kita' yang memulai perjalanan ibadah terlama.",
      date: "Hari Bahagia",
      icon: <RingIcon className="w-8 md:w-10 h-auto opacity-80" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-light text-center relative overflow-hidden">
      {/* Watercolor blobs background */}
      <WatercolorBlob color="secondary" size={400} className="top-10 -left-40" />
      <WatercolorBlob color="accent" size={350} className="top-40 -right-32" />
      
      {/* Floral corner decorations */}
      <div className="absolute top-0 left-0 opacity-40">
        <FloralCorner size={140} />
      </div>
      <div className="absolute bottom-0 right-0 opacity-40 scale-[1] rotate-180">
        <FloralCorner size={140} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-calligraphy text-primary mb-4">Love Story</h2>
        <p className="text-secondary font-medium tracking-widest uppercase mb-4 font-sans">Kisah Perjalanan Kami</p>

        <FloralDivider className="mb-16 opacity-80" />

        {/* Timeline Container */}
        <div className="relative w-full max-w-4xl mx-auto mt-10">
          
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>
          
          {/* Mobile Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 block sm:hidden rounded-full"></div>

          {storyItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`relative flex items-center mb-16 last:mb-0 w-full ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-row`}
              >
                {/* Desktop Empty Space for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
                
                {/* Center Node (Dot or Icon) */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center -ml-[3px] md:ml-0 z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-10 h-10 rounded-full bg-white border-4 border-primary shadow-md flex items-center justify-center overflow-hidden"
                  >
                     {item.icon ? (
                       <div className="scale-[0.6] text-primary">{item.icon}</div>
                     ) : (
                       <div className="w-3 h-3 rounded-full bg-secondary"></div>
                     )}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 pl-14' : 'md:pl-16 pl-14'} pr-0`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white relative text-left group hover:-translate-y-1 transition-transform duration-300"
                  >
                    {/* Decorative leaf element */}
                    <div className="absolute -top-4 -right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="rotate-45">
                        <path d="M30 0 C45 10, 50 25, 45 40 C35 55, 15 55, 5 40 C0 25, 15 10, 30 0Z" fill="rgba(168,230,207,1)" />
                        <path d="M30 4 C30 20, 30 40, 30 50" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
                      </svg>
                    </div>

                    <div className="mb-2">
                       <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-3">
                         {item.date}
                       </span>
                    </div>
                    <h3 className="text-2xl font-calligraphy text-dark mb-3">{item.title}</h3>
                    <p className="text-dark/70 font-sans leading-relaxed text-sm md:text-base">
                      {item.content}
                    </p>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom divider */}
        <FloralDivider className="mt-20 opacity-60" />
      </motion.div>
    </section>
  );
};

export default LoveStory;
