import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'زهراوي برود غيرت مسيرتي الموسيقية بالكامل. الاحترافية والدعم اللذان حصلت عليهما لا مثيل لهما. أنصح كل فنان يريد الوصول إلى العالمية بالتعاون معهم.',
    name: 'أحمد سعد',
    role: 'فنان وحصري',
    image: '/images/artist1.jpg',
    rating: 5
  },
  {
    text: 'منذ انضمامي إلى زهراوي برود، ارتفع عدد مستمعيني بشكل كبير جداً. الفريق محترف ومتفاني، ويعملون بشغف حقيقي من أجل نجاح الفنانين.',
    name: 'سارة خالد',
    role: 'مغنية R&B',
    image: '/images/artist2.jpg',
    rating: 5
  },
  {
    text: 'التوزيع الرقمي الذي توفره الشركة ممتاز. أغانيي الآن متاحة على أكثر من 150 منصة عالمية وأرقام الاستماع تتزايد شهرياً.',
    name: 'عمر زكي',
    role: 'رابر',
    image: '/images/artist3.jpg',
    rating: 5
  },
];

export const Testimonials = () => {
  return (
    <section className="py-28 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.05)_0%,_transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-400 font-semibold text-sm mb-4">
            آراء الفنانين
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">ماذا يقول عنا فنانونا</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#13131a] border border-white/8 hover:border-white/15 rounded-2xl p-8 transition-colors relative"
            >
              <Quote className="w-8 h-8 text-amber-500/30 mb-4" />
              <p className="text-slate-300 leading-relaxed mb-8 text-sm">{t.text}</p>
              
              <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-xl object-cover border border-white/10"
                />
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
                <div className="mr-auto flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
