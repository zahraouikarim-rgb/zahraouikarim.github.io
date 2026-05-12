import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, Music, Headphones, Mic2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const contactReasons = [
  { icon: Music, label: 'الإنتاج الموسيقي' },
  { icon: Headphones, label: 'التوزيع الرقمي' },
  { icon: Mic2, label: 'الماسترينج' },
  { icon: MessageSquare, label: 'استفسار عام' },
];

const faqs = [
  { q: 'كم تستغرق عملية الإنتاج الموسيقي؟', a: 'تتراوح مدة الإنتاج بين أسبوعين وشهر حسب تعقيد المشروع ومتطلباته الفنية.' },
  { q: 'ما هي منصات التوزيع المتاحة؟', a: 'نوزع على أكثر من 150 منصة عالمية بما فيها Spotify و Apple Music و Deezer و Anghami وغيرها.' },
  { q: 'هل تقبلون الفنانين الجدد؟', a: 'نعم، نرحب دائماً باكتشاف المواهب الجديدة. تواصل معنا وأرسل عينة من أعمالك.' },
  { q: 'كيف يتم احتساب حقوق الملكية الفكرية؟', a: 'نعمل بنظام شراكة شفاف يضمن لك الحصول على حقوقك الكاملة من كل عملية استماع وبث.' },
];

export const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.12)_0%,_transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 bg-purple-500/15 border border-purple-500/30 rounded-full text-purple-400 font-semibold text-sm mb-6">
              نحن هنا لمساعدتك
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              تواصل <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">معنا</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              هل أنت فنان موهوب تبحث عن شريك احترافي؟ أو لديك مشروع موسيقي تحتاج فيه مساعدة؟ نحن هنا.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Phone, label: 'اتصل بنا', value: '+971 50 123 4567', sub: 'متاحون من 9 صباحاً إلى 10 مساءً', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-500/20' },
            { icon: Mail, label: 'البريد الإلكتروني', value: 'info@zahraouiprod.com', sub: 'نرد خلال 24 ساعة', color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-500/20' },
            { icon: MapPin, label: 'الموقع', value: 'دبي، الإمارات', sub: 'برج الخليج، الطابق 15', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-500/20' },
          ].map(({ icon: Icon, label, value, sub, color, bg, border }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white/3 border ${border} rounded-2xl p-6 flex items-start gap-4`}
            >
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
                <p className="text-white font-bold text-lg leading-tight">{value}</p>
                <p className="text-slate-400 text-sm mt-1">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Form + FAQ */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#13131a] border border-white/8 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-2">أرسل رسالتك</h2>
              <p className="text-slate-400 mb-8">سنتواصل معك في أقرب وقت ممكن</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="w-20 h-20 text-emerald-400 mb-6" />
                  <h3 className="text-2xl font-black text-white mb-3">تم الإرسال بنجاح!</h3>
                  <p className="text-slate-400">شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">الاسم الكامل *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#0a0a0f] border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-slate-600"
                        placeholder="محمد أحمد"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        required
                        dir="ltr"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#0a0a0f] border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-slate-600"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">رقم الهاتف</label>
                    <input
                      type="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#0a0a0f] border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-slate-600"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  {/* Reason */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-300">سبب التواصل</label>
                    <div className="grid grid-cols-2 gap-3">
                      {contactReasons.map(({ icon: Icon, label }) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => setForm({ ...form, reason: label })}
                          className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                            form.reason === label
                              ? 'bg-purple-600/20 border-purple-500/50 text-purple-300'
                              : 'bg-[#0a0a0f] border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">الرسالة *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#0a0a0f] border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all resize-none placeholder:text-slate-600"
                      placeholder="اكتب تفاصيل مشروعك أو استفسارك هنا..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-black rounded-xl transition-all transform hover:scale-[1.02] shadow-xl shadow-orange-500/20"
                  >
                    <Send className="w-5 h-5" />
                    إرسال الرسالة
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar: Hours + FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Working hours */}
            <div className="bg-[#13131a] border border-white/8 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-bold">ساعات العمل</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: 'الإثنين - الجمعة', time: '9:00 ص - 10:00 م' },
                  { day: 'السبت', time: '10:00 ص - 8:00 م' },
                  { day: 'الأحد', time: 'مغلق' },
                ].map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">{day}</span>
                    <span className={`text-sm font-semibold ${time === 'مغلق' ? 'text-red-400' : 'text-white'}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-[#13131a] border border-white/8 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-5">الأسئلة الشائعة</h3>
              <div className="space-y-5">
                {faqs.map(({ q, a }, i) => (
                  <div key={i} className="border-b border-white/5 pb-5 last:border-0 last:pb-0">
                    <p className="text-slate-200 font-semibold text-sm mb-2">{q}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
};
