export interface Track {
  id: number;
  title: string;
  duration: string;
  plays: string;
  year: number;
}

export interface Artist {
  id: number;
  slug: string;
  name: string;
  nameEn: string;
  genre: string;
  bio: string;
  image: string;
  cover: string;
  streams: string;
  followers: string;
  albums: number;
  since: number;
  socials: {
    spotify?: string;
    youtube?: string;
    instagram?: string;
  };
  tracks: Track[];
  tags: string[];
}

export const artists: Artist[] = [
  {
    id: 1,
    slug: 'ahmed-saad',
    name: 'أحمد سعد',
    nameEn: 'Ahmed Saad',
    genre: 'بوب عربي',
    bio: 'فنان عربي متميز بأسلوبه الفريد في دمج الموسيقى الكلاسيكية والمعاصرة. بدأ مسيرته الفنية في عام 2015 وحقق نجاحًا واسعًا في الوطن العربي وخارجه. تعاون مع كبار الموزعين الموسيقيين وأصدر عدة ألبومات ناجحة.',
    image: '/images/artist1.jpg',
    cover: '/images/hero-bg.jpg',
    streams: '2.5M',
    followers: '890K',
    albums: 4,
    since: 2015,
    tags: ['بوب', 'عربي', 'رومانسي'],
    socials: {
      spotify: '#',
      youtube: '#',
      instagram: '#'
    },
    tracks: [
      { id: 1, title: 'روح القلب', duration: '3:45', plays: '1.2M', year: 2024 },
      { id: 2, title: 'عيون الليل', duration: '4:12', plays: '980K', year: 2024 },
      { id: 3, title: 'بعيد عنك', duration: '3:58', plays: '756K', year: 2023 },
      { id: 4, title: 'حلم البعيد', duration: '4:30', plays: '612K', year: 2023 },
      { id: 5, title: 'صوت الصمت', duration: '3:22', plays: '540K', year: 2022 },
      { id: 6, title: 'نجمة الفجر', duration: '3:50', plays: '430K', year: 2022 },
    ]
  },
  {
    id: 2,
    slug: 'sara-khaled',
    name: 'سارة خالد',
    nameEn: 'Sara Khaled',
    genre: 'R&B / Soul',
    bio: 'صوت ذهبي يجمع بين الموسيقى العربية الأصيلة وإيقاعات الـ R&B الحديثة. سارة خالد فنانة من جيل جديد تحمل رسالة موسيقية راقية تلامس القلوب. انضمت إلى زهراوي برود في 2018 وأصدرت ثلاثة ألبومات ناجحة.',
    image: '/images/artist2.jpg',
    cover: '/images/studio.jpg',
    streams: '1.8M',
    followers: '640K',
    albums: 3,
    since: 2018,
    tags: ['R&B', 'Soul', 'جاز'],
    socials: {
      spotify: '#',
      youtube: '#',
      instagram: '#'
    },
    tracks: [
      { id: 1, title: 'أنثى الغناء', duration: '4:05', plays: '890K', year: 2024 },
      { id: 2, title: 'شمس الصباح', duration: '3:40', plays: '720K', year: 2024 },
      { id: 3, title: 'قصة حب', duration: '4:18', plays: '580K', year: 2023 },
      { id: 4, title: 'بحر الأحلام', duration: '3:55', plays: '420K', year: 2022 },
      { id: 5, title: 'ليلى والقمر', duration: '4:02', plays: '380K', year: 2022 },
    ]
  },
  {
    id: 3,
    slug: 'omar-zaki',
    name: 'عمر زكي',
    nameEn: 'Omar Zaki',
    genre: 'Hip Hop / Rap',
    bio: 'رابر شاب يعبّر عن واقع الشباب العربي بأسلوب جريء وصريح. عمر زكي يدمج الكلمة الشعرية الحرة مع البيت الموسيقي الإلكتروني، ليقدم صوتًا مختلفًا يجذب الملايين. انضم إلى الفريق عام 2020.',
    image: '/images/artist3.jpg',
    cover: '/images/hero-bg.jpg',
    streams: '3.1M',
    followers: '1.2M',
    albums: 2,
    since: 2020,
    tags: ['Hip Hop', 'Rap', 'إلكترونيك'],
    socials: {
      spotify: '#',
      youtube: '#',
      instagram: '#'
    },
    tracks: [
      { id: 1, title: 'صوت الشارع', duration: '3:10', plays: '1.5M', year: 2024 },
      { id: 2, title: 'مدينة الأضواء', duration: '3:35', plays: '1.1M', year: 2024 },
      { id: 3, title: 'جيل جديد', duration: '2:58', plays: '890K', year: 2023 },
      { id: 4, title: 'الحقيقة', duration: '3:45', plays: '720K', year: 2023 },
      { id: 5, title: 'ألوان', duration: '3:20', plays: '540K', year: 2022 },
      { id: 6, title: 'بلا قيود', duration: '3:55', plays: '480K', year: 2022 },
    ]
  },
  {
    id: 4,
    slug: 'el-massar',
    name: 'فرقة المسار',
    nameEn: 'El Massar Band',
    genre: 'Indie Rock',
    bio: 'فرقة موسيقية متكاملة تمزج بين روك البديل والموسيقى الشرقية لتخلق صوتًا فريدًا لم يسمعه العالم من قبل. تأسست الفرقة عام 2017 وسرعان ما حققت شهرة واسعة في المشهد الموسيقي العربي المستقل.',
    image: '/images/artist4.jpg',
    cover: '/images/studio.jpg',
    streams: '500K',
    followers: '210K',
    albums: 2,
    since: 2017,
    tags: ['Indie', 'Rock', 'فيوجن'],
    socials: {
      spotify: '#',
      youtube: '#',
      instagram: '#'
    },
    tracks: [
      { id: 1, title: 'المسافات', duration: '5:12', plays: '220K', year: 2024 },
      { id: 2, title: 'خارج الصندوق', duration: '4:45', plays: '180K', year: 2024 },
      { id: 3, title: 'تحت النجوم', duration: '4:30', plays: '145K', year: 2023 },
      { id: 4, title: 'الطريق', duration: '5:00', plays: '120K', year: 2022 },
    ]
  }
];
