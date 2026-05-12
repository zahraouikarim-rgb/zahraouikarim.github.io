import { motion } from 'framer-motion';

const platforms = [
  { name: 'Spotify', color: '#1DB954' },
  { name: 'Apple Music', color: '#fc3c44' },
  { name: 'YouTube Music', color: '#FF0000' },
  { name: 'Deezer', color: '#a238ff' },
  { name: 'Anghami', color: '#5e45d5' },
  { name: 'Amazon Music', color: '#00A8E0' },
  { name: 'Tidal', color: '#00FFFF' },
  { name: 'Shazam', color: '#0088ff' },
];

export const Platforms = () => {
  return (
    <section className="py-16 bg-[#0d0d14] border-y border-white/5 overflow-hidden">
      <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-10">
        موزعون على أكبر منصات البث العالمية
      </p>
      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 w-max"
        >
          {[...platforms, ...platforms].map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-xl px-6 py-3 shrink-0"
            >
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: p.color }}></div>
              <span className="text-slate-300 font-semibold text-sm whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
