import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FloralDivider, FloralCorner } from './FloralDecorations';
import { db } from '../lib/firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

const RSVP = () => {
  const [formData, setFormData] = useState({ name: '', attendance: 'Hadir', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [responses, setResponses] = useState([]);
  const [firebaseReady, setFirebaseReady] = useState(true);

  // Load responses from Firestore (real-time)
  useEffect(() => {
    try {
      const q = query(collection(db, 'rsvp'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setResponses(data);
      }, (err) => {
        console.warn('Firebase not configured yet, using offline mode:', err.message);
        setFirebaseReady(false);
        // Fallback demo data
        setResponses([
          { id: '1', name: 'Budi Santoso', attendance: 'Hadir', message: 'Selamat menempuh hidup baru! Semoga samawa selalu.' },
          { id: '2', name: 'Siti Aminah', attendance: 'Hadir', message: 'Happy wedding kak! Doa terbaik dari kami sekeluarga.' }
        ]);
      });
      return () => unsubscribe();
    } catch (err) {
      console.warn('Firebase initialization error:', err.message);
      setFirebaseReady(false);
      setResponses([
        { id: '1', name: 'Budi Santoso', attendance: 'Hadir', message: 'Selamat menempuh hidup baru! Semoga samawa selalu.' },
        { id: '2', name: 'Siti Aminah', attendance: 'Hadir', message: 'Happy wedding kak! Doa terbaik dari kami sekeluarga.' }
      ]);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setSubmitting(true);
    setError(null);

    try {
      if (firebaseReady) {
        // Save to Firebase Firestore
        await addDoc(collection(db, 'rsvp'), {
          name: formData.name,
          attendance: formData.attendance,
          message: formData.message,
          createdAt: serverTimestamp()
        });
      } else {
        // Offline fallback: add locally
        setResponses(prev => [{ id: Date.now().toString(), ...formData }, ...prev]);
      }

      setSubmitted(true);
      setFormData({ name: '', attendance: 'Hadir', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      setError('Gagal mengirim ucapan. Silakan coba lagi.');
      // Still add locally on error
      setResponses(prev => [{ id: Date.now().toString(), ...formData }, ...prev]);
      setSubmitted(true);
      setFormData({ name: '', attendance: 'Hadir', message: '' });
      setTimeout(() => { setSubmitted(false); setError(null); }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm"></div>
      
      {/* Floral decorations */}
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
        <h2 className="text-4xl md:text-5xl font-calligraphy text-white mb-4">Wishes</h2>
        <p className="text-white/80 font-medium tracking-widest uppercase mb-4 font-sans">Ucapan Selamat & Do'a</p>

        <FloralDivider className="mb-12 opacity-50" />

        {/* Firebase status indicator */}
        {!firebaseReady && (
          <div className="mb-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-2 text-yellow-300 text-xs font-sans">
            ⚠️ Mode offline — Firebase belum dikonfigurasi. Data disimpan sementara di browser.
          </div>
        )}

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
              disabled={submitting}
              whileHover={{ scale: submitting ? 1 : 1.02 }}
              whileTap={{ scale: submitting ? 1 : 0.98 }}
              className={`w-full mt-4 font-semibold py-3 rounded-lg transition-colors duration-300 font-sans ${
                submitting 
                  ? 'bg-primary/50 text-white/50 cursor-wait' 
                  : 'bg-primary text-white hover:bg-white hover:text-primary'
              }`}
            >
              {submitting ? '⏳ Mengirim...' : '💌 Kirim Ucapan'}
            </motion.button>
            
            {submitted && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm mt-2 text-center font-sans"
              >
                ✅ Ucapan berhasil dikirim!
              </motion.p>
            )}
            {error && (
              <p className="text-red-400 text-sm mt-2 text-center font-sans">{error}</p>
            )}
          </form>
        </div>

        {/* Guestbook List */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-sans text-white mb-6 border-b border-white/20 pb-2">
            Guestbook ({responses.length})
          </h3>
          <div className="flex flex-col gap-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            {responses.length === 0 ? (
              <p className="text-white/40 text-sm text-center py-8 font-sans">Belum ada ucapan. Jadilah yang pertama! 💕</p>
            ) : (
              responses.map((res, i) => (
                <motion.div 
                  key={res.id || i} 
                  className="bg-white/5 p-4 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.1, 0.5) }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-primary font-semibold font-sans">{res.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full font-sans ${
                      res.attendance === 'Hadir' ? 'bg-green-500/20 text-green-300' : 
                      res.attendance === 'Tidak Hadir' ? 'bg-red-500/20 text-red-300' : 
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {res.attendance}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm font-sans">{res.message}</p>
                </motion.div>
              ))
            )}
          </div>
        </div>

        <FloralDivider className="mt-16 opacity-40" />

      </motion.div>
    </section>
  );
};

export default RSVP;
