# 🎵 ZAHRAOUI PROD - منصة التوزيع الموسيقي

موقع احترافي متكامل لشركة إنتاج وتوزيع موسيقي.

---

## ✅ هل سيعمل على GitHub Pages؟

**نعم، 100%!** الموقع مُهيّأ بشكل خاص ليعمل على GitHub Pages بدون أي مشاكل:

- ✔️ يستخدم **HashRouter** (روابط مع `#`) — يدعم GitHub Pages بالكامل
- ✔️ كل شيء في **ملف واحد** `index.html` — لا يحتاج إعدادات معقدة
- ✔️ لا توجد روابط API خارجية تحتاج CORS
- ✔️ جميع الصور والملفات داخلية

---

## 🚀 طريقة التنصيب (محلياً)

```bash
# 1. تثبيت الحزم
npm install

# 2. تشغيل الموقع محلياً
npm run dev

# 3. بناء الموقع للنشر
npm run build
```

بعد `npm run build`، سيتم إنشاء مجلد `dist/` فيه الموقع كاملاً جاهز للنشر.

---

## 📤 الرفع على GitHub Pages (طريقة 1 - يدوياً)

### الخطوات:

1. **بناء الموقع:**
   ```bash
   npm run build
   ```

2. **افتح مجلد `dist/`** — ستجد فيه ملف `index.html` ومجلد `images`.

3. **اذهب إلى مستودع GitHub الخاص بك** (مثلاً `zahraoui-prod.github.io`)

4. **احذف الملفات القديمة** وارفع محتويات مجلد `dist/` كاملة:
   - `index.html`
   - مجلد `images/` (إن وجد)

5. **اعمل Commit & Push:**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

6. **انتظر دقيقة أو دقيقتين**، ثم افتح:
   `https://YOUR-USERNAME.github.io/`

✅ **انتهى! الموقع يعمل الآن.**

---

## 🤖 الرفع التلقائي على GitHub Pages (طريقة 2 - GitHub Actions)

أنشئ ملف `.github/workflows/deploy.yml` في مستودعك بالمحتوى التالي:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

ثم في إعدادات المستودع:
- اذهب إلى **Settings → Pages**
- في **Source** اختر: **GitHub Actions**

✅ كل ما تعمل `git push`، الموقع يتحدّث تلقائياً!

---

## 🌐 الرفع على FTP (استضافة عادية مثل Hostinger, cPanel...)

### الخطوات:

1. **بناء الموقع:**
   ```bash
   npm run build
   ```

2. **افتح برنامج FTP** (مثل **FileZilla** أو **WinSCP**)

3. **اتصل بالخادم:**
   - Host: `ftp.yoursite.com`
   - Username & Password: من شركة الاستضافة

4. **اذهب إلى مجلد** `public_html` أو `www` أو `htdocs`

5. **ارفع جميع محتويات مجلد `dist/`:**
   - `index.html`
   - مجلد `images/`

6. **افتح موقعك** → جاهز! ✅

---

## 🔧 ملاحظات مهمة جداً

### 1️⃣ روابط الصفحات الفرعية
الموقع يستخدم **HashRouter**، لذا الروابط ستكون:
- `https://yoursite.com/#/`
- `https://yoursite.com/#/contact`
- `https://yoursite.com/#/artist/ahmed-saad`

هذا **مقصود** ويعمل على GitHub Pages بدون مشاكل (لأن GitHub Pages لا يدعم Routes العادية بدون `.htaccess`).

### 2️⃣ إذا كنت تستخدم نطاق مخصص
أنشئ ملف `CNAME` في مجلد `dist/` قبل الرفع، يحتوي على نطاقك:
```
www.yourdomain.com
```

### 3️⃣ للاستضافات التي تدعم BrowserRouter (Apache/.htaccess)
إذا كنت تريد روابط بدون `#`، أنشئ ملف `.htaccess` داخل `public_html`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📁 محتويات `dist/` بعد البناء

```
dist/
├── index.html       ← كل الموقع (CSS + JS + HTML)
└── images/          ← الصور
    ├── hero-bg.jpg
    ├── studio.jpg
    └── artist1-4.jpg
```

---

## 🎨 تخصيص الموقع

### تعديل بيانات الفنانين:
افتح `src/data/artists.ts` وعدّل البيانات حسب رغبتك.

### تعديل معلومات التواصل:
- `src/components/Footer.tsx` — معلومات Footer
- `src/pages/ContactPage.tsx` — معلومات صفحة Contact

### تغيير الألوان:
الألوان الرئيسية:
- **بنفسجي**: `purple-500/600/700`
- **برتقالي**: `amber-500`, `orange-500`
- **خلفية داكنة**: `#0a0a0f`

---

## 💡 نصائح إضافية

✅ **بعد كل تعديل**، اعمل `npm run build` ثم ارفع `dist/` من جديد.

✅ **Cache المتصفح**: قد تحتاج لعمل `Ctrl + Shift + R` لرؤية التحديثات.

✅ **GitHub Pages قد يأخذ 1-5 دقائق** لتحديث الموقع بعد الـ Push.

---

## 🆘 حل المشاكل الشائعة

| المشكلة | الحل |
|---------|------|
| الموقع يظهر صفحة بيضاء | تأكد من رفع `index.html` في الجذر مباشرة |
| الصور لا تظهر | تأكد من رفع مجلد `images/` كاملاً |
| الروابط لا تعمل | استخدم الروابط مع `#` (مثل `/#/contact`) |
| 404 على GitHub Pages | تأكد من إعدادات Pages في Settings |

---

🎵 **تم بناؤه بحب لـ ZAHRAOUI PROD** 🎵
