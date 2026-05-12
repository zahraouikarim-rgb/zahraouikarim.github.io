import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Music4, HeadphonesIcon, Globe, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: 150, suffix: '+', label: 'فنان وحصري', color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { icon: Music4, value: 5000, suffix: '+', label: 'أغنية موزعة', color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { icon: HeadphonesIcon, value: 50, suffix: 'M+', label: 'استماع شهري', color: 'text-pink-400', bg: 'bg-pink-400/10' },
  { icon: Globe, value: 25, suffix: '', label: 'دولة حول العالم', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { icon: TrendingUp, value: 300, suffix: '%', label: 'نمو سنوي', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export const Stats = () => {
  return (
    <section id="stats" className="py-28 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(139,92,246,0.08)_0%,_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-500/15 border border-blue-500/30 rounded-full text-blue-400 font-semibold text-sm mb-4">
            بالأرقام
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">إنجازاتنا</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white/3 border border-white/8 rounded-2xl p-8 hover:border-white/15 transition-colors"
            >
              <div className={`w-14 h-14 mx-auto ${stat.bg} rounded-xl flex items-center justify-center mb-5`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <h4 className={`text-3xl md:text-4xl font-black mb-2 ${stat.color}`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
