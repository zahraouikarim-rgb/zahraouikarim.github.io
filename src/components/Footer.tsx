import { Link } from 'react-router-dom';
import { Music, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const platforms = [
  { name: 'Spotify', color: 'hover:bg-green-600' },
  { name: 'Apple Music', color: 'hover:bg-pink-600' },
  { name: 'YouTube Music', color: 'hover:bg-red-600' },
  { name: 'Deezer', color: 'hover:bg-purple-600' },
  { name: 'Anghami', color: 'hover:bg-blue-600' },
];

export const Footer = () => {
  return (
    <footer className="bg-[#07070d] pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top CTA */}
        <div className="bg-gradient-to-r from-purple-900/50 to-amber-900/30 border border-purple-500/20 rounded-2xl p-10 mb-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15)_0%,_transparent_70%)]"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">هل أنت فنان موهوب؟</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">انضم إلى عائلة زهراوي برود وخذ مسيرتك الموسيقية إلى المستوى التالي</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-bold rounded-xl transition-all transform hover:scale-105"
            >
              ابدأ رحلتك معنا
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Platforms */}
        <div className="mb-16">
          <p className="text-center text-slate-500 text-sm mb-6 font-medium">متوفرون على جميع المنصات</p>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((p) => (
              <button
                key={p.name}
                className={`px-5 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm font-semibold transition-all ${p.color} hover:text-white hover:border-transparent`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 blur-md opacity-50 rounded-lg group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-indigo-700 p-2 rounded-lg">
                  <Music className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-lg tracking-widest text-white">ZAHRAOUI</span>
                <span className="text-xs font-bold tracking-[0.3em] text-purple-400">PROD</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              منصتك الأولى للإنتاج والتوزيع الموسيقي الاحترافي في الشرق الأوسط. نحن نصنع الموسيقى التي تلامس الروح.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span dir="ltr">+971 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>info@zahraouiprod.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>دبي، الإمارات العربية المتحدة</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">الشركة</h4>
            <ul className="space-y-4">
              {[
                { label: 'من نحن', href: '/#about' },
                { label: 'خدماتنا', href: '/#services' },
                { label: 'فنانونا', href: '/#artists' },
                { label: 'الإحصائيات', href: '/#stats' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-400 hover:text-amber-400 transition-colors text-sm font-medium">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">الخدمات</h4>
            <ul className="space-y-4">
              {['الإنتاج الموسيقي', 'التوزيع الرقمي', 'الماسترينج', 'التسويق الموسيقي', 'الإدارة الفنية'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} ZAHRAOUI PROD. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-300 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-slate-300 transition-colors">الشروط والأحكام</a>
            <a href="#" className="hover:text-slate-300 transition-colors">حقوق الملكية</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
