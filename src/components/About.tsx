import { motion } from 'framer-motion';
import { CheckCircle2, Award, Globe2, TrendingUp } from 'lucide-react';

const highlights = [
  'استوديوهات تسجيل مجهزة بأحدث التقنيات',
  'فريق من أفضل المنتجين والمهندسين الصوتيين',
  'شراكات مع كبرى منصات البث العالمية',
  'توزيع في أكثر من 25 دولة حول العالم',
];

const awards = [
  { icon: Award, label: 'جائزة أفضل توزيع موسيقي 2023', color: 'text-amber-400' },
  { icon: Globe2, label: 'حضور في 25+ دولة عالمياً', color: 'text-blue-400' },
  { icon: TrendingUp, label: 'نمو 300% في الاستماع 2024', color: 'text-emerald-400' },
];

export const About = () => {
  return (
    <section id="about" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-pink-600 to-amber-500 rounded-2xl blur-sm opacity-50"></div>
              <img
                src="/images/studio.jpg"
                alt="Studio"
                className="relative w-full h-[450px] object-cover rounded-2xl"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-[#13131a] border border-purple-500/30 rounded-2xl p-5 shadow-2xl"
            >
              <p className="text-4xl font-black text-white">+10</p>
              <p className="text-sm text-slate-400 font-medium">سنوات خبرة</p>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-6 -left-6 bg-[#13131a] border border-amber-500/30 rounded-2xl p-5 shadow-2xl"
            >
              <p className="text-4xl font-black text-amber-400">150+</p>
              <p className="text-sm text-slate-400 font-medium">فنان موهوب</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <span className="inline-block px-4 py-1.5 bg-purple-500/15 border border-purple-500/30 rounded-full text-purple-400 font-semibold text-sm mb-4">
                من نحن
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                نصنع الموسيقى التي
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">
                  تلامس الروح
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                زهراوي برود هي شركة رائدة في مجال الإنتاج والتوزيع الموسيقي. نسعى دائماً لاكتشاف المواهب الشابة ودعمها للوصول إلى العالمية. مع فريق عمل محترف وأحدث استوديوهات التسجيل، نضمن لك جودة لا مثيل لها.
              </p>
            </div>

            <div className="space-y-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4">
              {awards.map(({ icon: Icon, label, color }, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-xl px-4 py-3">
                  <Icon className={`w-5 h-5 ${color} shrink-0`} />
                  <span className="text-slate-300 font-medium text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
