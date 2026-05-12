import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'من نحن', href: '/#about' },
  { name: 'الخدمات', href: '/#services' },
  { name: 'الفنانون', href: '/#artists' },
  { name: 'الإحصائيات', href: '/#stats' },
  { name: 'اتصل بنا', href: '/contact', isPage: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isContact = location.pathname === '/contact';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isContact ? 'bg-[#0a0a0f]/95 backdrop-blur-xl shadow-[0_2px_40px_rgba(0,0,0,0.6)] py-3 border-b border-white/5' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          <Link to="/" className="flex items-center gap-2.5 group">
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

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.isPage
                ? location.pathname === link.href
                : location.pathname === '/' && !link.isPage;
              return link.isPage ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-slate-900'
                      : 'text-slate-300 hover:text-white hover:bg-white/8'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-200"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/98 border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link) =>
                link.isPage ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 font-semibold transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 font-semibold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
