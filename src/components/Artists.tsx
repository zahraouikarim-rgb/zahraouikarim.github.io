import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Music } from 'lucide-react';
import { artists } from '../data/artists';

export const Artists = () => {
  return (
    <section id="artists" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-400 font-semibold text-sm mb-4">
              موهبة وإبداع
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">فنانونا</h2>
            <p className="text-slate-400 text-lg">
              نفخر بالعمل مع نخبة من ألمع النجوم والمواهب الصاعدة في سماء الفن العربي.
            </p>
          </div>
          <button className="px-6 py-3 border border-white/15 hover:bg-white/8 text-slate-300 hover:text-white rounded-xl transition-all font-semibold text-sm">
            عرض كل الفنانين
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/artist/${artist.slug}`} className="group block relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

                {/* Genre badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full">
                  <span className="text-xs font-semibold text-slate-300">{artist.genre}</span>
                </div>

                {/* Artist info */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-2xl font-black text-white mb-1">{artist.name}</h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <Music className="w-3.5 h-3.5" />
                      <span>{artist.streams} استماع</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm font-bold text-amber-400">عرض الملف الشخصي</span>
                      <ArrowUpRight className="w-4 h-4 text-amber-400" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
