import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-5">
            
            <div className="md:col-span-2 bg-gradient-to-br from-purple-600 to-amber-600 p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">تواصل معنا</h3>
                  <p className="text-white/80 mb-10 leading-relaxed">
                    نحن هنا لمساعدتك في تحقيق أهدافك الموسيقية. لا تتردد في التواصل معنا لأي استفسار.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span dir="ltr" className="font-medium">+971 50 123 4567</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-sm">info@zahraouiprod.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="font-medium">دبي، الإمارات العربية المتحدة</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-10 bg-slate-800/50">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">الاسم الكامل</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="محمد أحمد"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="email@example.com"
                      dir="ltr"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">الموضوع</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="استفسار عن الإنتاج الموسيقي"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">الرسالة</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group">
                  <span>إرسال الرسالة</span>
                  <Send className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};