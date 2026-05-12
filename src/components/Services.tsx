import { motion } from 'framer-motion';
import { Piano, Headphones, Video, Mic2, BarChart3, Globe2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Piano,
    title: 'الإنتاج الموسيقي',
    description: 'إنتاج موسيقي احترافي بأعلى معايير الجودة باستخدام أحدث التقنيات والمعدات. نعمل مع أفضل المنتجين العالميين.',
    color: 'from-blue-600/20 to-indigo-600/20',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: Headphones,
    title: 'التوزيع الرقمي',
    description: 'توزيع أغانيك على جميع منصات البث الموسيقي العالمية مثل Spotify و Apple Music و Deezer والمزيد.',
    color: 'from-purple-600/20 to-pink-600/20',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: Video,
    title: 'إنتاج الفيديو',
    description: 'إنتاج مقاطع فيديو موسيقية احترافية بجودة سينمائية عالية مع أحدث تقنيات التصوير والإخراج.',
    color: 'from-pink-600/20 to-rose-600/20',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-400',
    glow: 'shadow-pink-500/20',
  },
  {
    icon: Mic2,
    title: 'الماسترينج',
    description: 'معالجة صوتية متقدمة بواسطة خبراء الصوت لضمان أفضل جودة لأغانيك على جميع أنظمة الاستماع.',
    color: 'from-amber-600/20 to-orange-600/20',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-400',
    glow: 'shadow-amber-500/20',
  },
  {
    icon: BarChart3,
    title: 'التسويق الموسيقي',
    description: 'استراتيجيات تسويقية رقمية فعالة تشمل إدارة السوشيال ميديا وحملات الإعلانات المدفوعة وبناء الجمهور.',
    color: 'from-emerald-600/20 to-teal-600/20',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
  },
  {
    icon: Globe2,
    title: 'الإدارة الفنية',
    description: 'إدارة شاملة للمشاريع الفنية والعقود والحقوق الملكية الفكرية مع التمثيل الكامل للفنانين دولياً.',
    color: 'from-cyan-600/20 to-sky-600/20',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.05)_0%,_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-purple-500/15 border border-purple-500/30 rounded-full text-purple-400 font-semibold text-sm mb-4">
            ما نقدمه
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">خدماتنا الاحترافية</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            نقدم مجموعة متكاملة من الخدمات لدعم مسيرتك الموسيقية والوصول بأعمالك إلى العالمية.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative bg-gradient-to-br ${service.color} border ${service.border} rounded-2xl p-8 hover:shadow-xl ${service.glow} transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/2 transition-colors duration-300 rounded-2xl"></div>

              <div className={`inline-flex w-14 h-14 rounded-xl items-center justify-center bg-black/30 mb-6 border ${service.border}`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-500 group-hover:text-white transition-colors">
                <span>اعرف المزيد</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-[-3px] group-hover:-translate-y-[3px] transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
