import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FloralDivider, FloralCorner } from './FloralDecorations';

const RSVP = () => {
  const [formData, setFormData] = useState({ name: '', attendance: 'Hadir', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Mock list of responses since we don't have active Cloudflare D1 integration yet
  const [responses, setResponses] = useState([
    { name: 'Budi Santoso', attendance: 'Hadir', message: 'Selamat menempuh hidup baru! Semoga samawa selalu.' },
    { name: 'Siti Aminah', attendance: 'Hadir', message: 'Happy wedding kak! Doa terbaik dari kami sekeluarga.' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name && formData.message) {
      setResponses([{...formData}, ...responses]);
      setSubmitted(true);
      setFormData({ name: '', attendance: 'Hadir', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 px-4 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm"></div>
      
      {/* Floral decorations on dark background */}
      <div className="absolute top-0 left-0 opacity-30">
        <FloralCorner size={160} />
      </div>
      <div className="absolute top-0 right-0 opacity-30 scale-x-[-1]">
        <FloralCorner size={160} />
      </div>
      <div className="absolute bottom-0 left-0 opacity-20 rotate-180 scale-x-[-1]">
        <FloralCorner size={130} />
      </div>
      <div className="absolute bottom-0 right-0 opacity-20 rotate-180">
        <FloralCorner size={130} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-calligraphy text-primary mb-4">RSVP & Ucapan</h2>
        <p className="text-white/80 font-medium tracking-widest uppercase mb-4 font-sans">Kehadiran & Doa Restu</p>

        <FloralDivider className="mb-12 opacity-50" />

        <div className="glass-dark p-8 rounded-2xl text-left border border-primary/30">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-primary mb-2 text-sm font-sans">Nama Lengkap</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            <div>
              <label className="block text-primary mb-2 text-sm font-sans">Kehadiran</label>
              <select 
                value={formData.attendance}
                onChange={e => setFormData({...formData, attendance: e.target.value})}
                className="w-full bg-[#1a1a1a] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Belum Pasti">Belum Pasti</option>
              </select>
            </div>

            <div>
              <label className="block text-primary mb-2 text-sm font-sans">Pesan / Ucapan</label>
              <textarea 
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                rows="4"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans"
                placeholder="Tuliskan harapan dan doa untuk mempelai"
                required
              />
            </div>

            <motion.button 
              type="submit" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-white hover:text-primary transition-colors duration-300 font-sans"
            >
              💌 Kirim Ucapan
            </motion.button>
            {submitted && <p className="text-green-400 text-sm mt-2 text-center font-sans">Ucapan berhasil dikirim!</p>}
          </form>
        </div>

        {/* Guestbook List */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-sans text-white mb-6 border-b border-white/20 pb-2">Guestbook ({responses.length})</h3>
          <div className="flex flex-col gap-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            {responses.map((res, i) => (
              <motion.div 
                key={i} 
                className="bg-white/5 p-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-primary font-semibold font-sans">{res.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full font-sans ${res.attendance === 'Hadir' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                    {res.attendance}
                  </span>
                </div>
                <p className="text-white/80 text-sm font-sans">{res.message}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <FloralDivider className="mt-16 opacity-40" />

      </motion.div>
    </section>
  );
};

export default RSVP;
