import { motion } from 'framer-motion';
import { Music, ArrowLeft, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Concert background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/60 to-[#0a0a0f]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-amber-900/20"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/40"
            style={{ left: `${(i * 8.3) % 100}%`, top: `${(i * 13.7) % 100}%` }}
            animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-purple-500/30 rounded-full px-5 py-2 backdrop-blur-sm">
            <Headphones className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-slate-200">مرحباً بك في عالم الموسيقى الاحترافية</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-9xl font-black mb-6 tracking-wider leading-none"
        >
          <span className="text-white">ZAHRAOUI</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">
            PROD
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          منصة التوزيع الموسيقي العالمي الرائدة في الشرق الأوسط. نقدم خدمات إنتاج وتوزيع موسيقية احترافية بجودة عالية وتقنيات حديثة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#artists"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30"
          >
            <Music className="w-5 h-5" />
            استكشف الفنانين
          </a>
          <Link
            to="/contact"
            className="group flex items-center gap-2 px-8 py-4 bg-white/8 hover:bg-white/15 border border-white/15 text-white font-bold rounded-xl transition-all backdrop-blur-sm"
          >
            تواصل معنا
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
