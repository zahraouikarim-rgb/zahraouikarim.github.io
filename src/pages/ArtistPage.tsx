import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Music, Users, Disc3, Calendar,
  Play, Pause, Heart, Share2, ExternalLink,
  ChevronLeft
} from 'lucide-react';
import { useState } from 'react';
import { artists } from '../data/artists';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ArtistPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const artist = artists.find((a) => a.slug === slug);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [likedTracks, setLikedTracks] = useState<Set<number>>(new Set());

  if (!artist) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center">
        <p className="text-2xl text-white font-bold mb-6">الفنان غير موجود</p>
        <Link to="/" className="text-amber-400 hover:text-amber-300 font-semibold">العودة للرئيسية</Link>
      </div>
    );
  }

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  const toggleLike = (id: number) => {
    setLikedTracks((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const otherArtists = artists.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img
          src={artist.cover}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0a0a0f]/60 to-[#0a0a0f]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent"></div>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 right-6 flex items-center gap-2 text-slate-300 hover:text-white bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2 text-sm font-semibold transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          رجوع
        </button>
      </div>

      {/* Artist Profile */}
      <div className="max-w-7xl mx-auto px-6 -mt-36 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-end mb-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative shrink-0"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-amber-500 rounded-2xl blur opacity-60"></div>
            <img
              src={artist.image}
              alt={artist.name}
              className="relative w-44 h-44 object-cover rounded-2xl border-4 border-[#0a0a0f] shadow-2xl"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1 min-w-0"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {artist.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-purple-500/15 border border-purple-500/30 rounded-full text-purple-400 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-2">{artist.name}</h1>
            <p className="text-slate-400 font-semibold mb-6">{artist.nameEn} · {artist.genre}</p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-black rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all transform hover:scale-105">
                <Play className="w-5 h-5" fill="currentColor" />
                تشغيل الكل
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white/8 border border-white/15 text-white font-bold rounded-xl hover:bg-white/15 transition-colors">
                <Heart className="w-5 h-5" />
                متابعة
              </button>
              <button className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 text-slate-300 rounded-xl hover:bg-white/10 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: Music, label: 'استماع شهري', value: artist.streams, color: 'text-purple-400' },
            { icon: Users, label: 'المتابعون', value: artist.followers, color: 'text-amber-400' },
            { icon: Disc3, label: 'الألبومات', value: artist.albums.toString(), color: 'text-pink-400' },
            { icon: Calendar, label: 'عضو منذ', value: artist.since.toString(), color: 'text-blue-400' },
          ].map(({ icon: Icon, label, value, color }, i) => (
            <div key={i} className="bg-[#13131a] border border-white/8 rounded-xl p-5 text-center">
              <Icon className={`w-5 h-5 ${color} mx-auto mb-2`} />
              <p className="text-white font-black text-2xl">{value}</p>
              <p className="text-slate-500 text-xs font-medium mt-1">{label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">

          {/* Playlist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <Music className="w-6 h-6 text-purple-400" />
              قائمة التشغيل
            </h2>

            <div className="bg-[#13131a] border border-white/8 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <span className="col-span-1">#</span>
                <span className="col-span-5">الأغنية</span>
                <span className="col-span-2 text-center">السنة</span>
                <span className="col-span-2 text-center">الاستماع</span>
                <span className="col-span-2 text-center">المدة</span>
              </div>

              {artist.tracks.map((track, index) => {
                const isPlaying = playingId === track.id;
                const isLiked = likedTracks.has(track.id);
                return (
                  <div
                    key={track.id}
                    className={`grid grid-cols-12 gap-4 px-6 py-4 items-center group hover:bg-white/4 transition-colors cursor-pointer ${isPlaying ? 'bg-purple-900/20' : ''}`}
                    onClick={() => togglePlay(track.id)}
                  >
                    <div className="col-span-1 text-center">
                      {isPlaying ? (
                        <div className="flex gap-0.5 justify-center">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-0.5 h-4 bg-purple-400 rounded"
                              animate={{ scaleY: [1, 0.4, 1] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      ) : (
                        <span className="text-slate-500 group-hover:hidden text-sm">{index + 1}</span>
                      )}
                      {!isPlaying && (
                        <Play className="w-4 h-4 text-white hidden group-hover:block mx-auto" fill="currentColor" />
                      )}
                    </div>

                    <div className="col-span-5 flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isPlaying ? 'bg-purple-600' : 'bg-white/8'}`}>
                        <Music className={`w-4 h-4 ${isPlaying ? 'text-white' : 'text-slate-400'}`} />
                      </div>
                      <span className={`font-semibold text-sm truncate ${isPlaying ? 'text-purple-300' : 'text-white'}`}>
                        {track.title}
                      </span>
                    </div>

                    <span className="col-span-2 text-center text-slate-500 text-sm">{track.year}</span>
                    <span className="col-span-2 text-center text-slate-400 text-sm">{track.plays}</span>

                    <div className="col-span-2 flex items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => toggleLike(track.id)}
                        className={`transition-colors ${isLiked ? 'text-red-400' : 'text-slate-600 hover:text-red-400'}`}
                      >
                        <Heart className="w-4 h-4" fill={isLiked ? 'currentColor' : 'none'} />
                      </button>
                      <span className="text-slate-500 text-sm">{track.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mini player when playing */}
            {playingId && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-gradient-to-r from-purple-900/50 to-slate-900 border border-purple-500/30 rounded-2xl p-4 flex items-center gap-4"
              >
                <button
                  onClick={() => setPlayingId(null)}
                  className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shrink-0 hover:bg-purple-500 transition-colors"
                >
                  <Pause className="w-5 h-5 text-white" />
                </button>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm truncate">
                    {artist.tracks.find((t) => t.id === playingId)?.title}
                  </p>
                  <p className="text-slate-400 text-xs">{artist.name}</p>
                </div>
                {/* Fake progress bar */}
                <div className="hidden md:flex items-center gap-3 flex-1 max-w-xs">
                  <span className="text-slate-500 text-xs">1:23</span>
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-purple-500 rounded-full"
                      animate={{ width: ['30%', '70%'] }}
                      transition={{ duration: 20, ease: 'linear' }}
                    />
                  </div>
                  <span className="text-slate-500 text-xs">{artist.tracks.find((t) => t.id === playingId)?.duration}</span>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Bio + Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Bio */}
            <div className="bg-[#13131a] border border-white/8 rounded-2xl p-6">
              <h3 className="text-white font-black text-lg mb-4">نبذة عن الفنان</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{artist.bio}</p>
            </div>

            {/* Platforms */}
            <div className="bg-[#13131a] border border-white/8 rounded-2xl p-6">
              <h3 className="text-white font-black text-lg mb-4">استمع على</h3>
              <div className="space-y-3">
                {[
                  { name: 'Spotify', bg: 'bg-green-600/20 border-green-600/30 text-green-400', href: artist.socials.spotify },
                  { name: 'YouTube Music', bg: 'bg-red-600/20 border-red-600/30 text-red-400', href: artist.socials.youtube },
                  { name: 'Anghami', bg: 'bg-purple-600/20 border-purple-600/30 text-purple-400', href: '#' },
                  { name: 'Apple Music', bg: 'bg-pink-600/20 border-pink-600/30 text-pink-400', href: '#' },
                ].map(({ name, bg, href }) => (
                  <a
                    key={name}
                    href={href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border ${bg} hover:opacity-80 transition-opacity`}
                  >
                    <span className="font-semibold text-sm">{name}</span>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-purple-900/40 to-amber-900/20 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-white font-bold mb-2">هل تريد العمل مع {artist.name}؟</p>
              <p className="text-slate-400 text-sm mb-4">تواصل معنا للتعاون والعروض</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black rounded-xl transition-colors text-sm"
              >
                تواصل معنا
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Other Artists */}
        <div className="pb-20">
          <h2 className="text-2xl font-black text-white mb-8">فنانون آخرون</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherArtists.map((a) => (
              <Link key={a.id} to={`/artist/${a.slug}`} className="group flex items-center gap-4 bg-[#13131a] border border-white/8 hover:border-white/20 rounded-2xl p-4 transition-colors">
                <img src={a.image} alt={a.name} className="w-16 h-16 object-cover rounded-xl shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-white font-bold truncate">{a.name}</p>
                  <p className="text-slate-500 text-sm">{a.genre}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-amber-400 transition-colors shrink-0 rotate-180" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
