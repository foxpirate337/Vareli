import { useLanguage } from '../context/LanguageContext.jsx';
import { useOpenStatus } from '../hooks/useOpenStatus.js';
import { restaurantInfo } from '../data/menu.js';
import { StarIcon, WaveIcon, OrnamentDivider, FloralCorner } from './Icons.jsx';

export default function Hero() {
  const { t } = useLanguage();
  const { status } = useOpenStatus();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden"
      aria-label="Hero"
    >
      {/* Background ornamental pattern */}
      <div className="absolute inset-0 hero-pattern opacity-50" aria-hidden="true" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/30" aria-hidden="true" />

      {/* Floral corner decorations */}
      <FloralCorner position="top-left" className="opacity-40 w-24 h-24 md:w-32 md:h-32" />
      <FloralCorner position="top-right" className="opacity-40 w-24 h-24 md:w-32 md:h-32" />
      <FloralCorner position="bottom-left" className="opacity-30 w-20 h-20 md:w-28 md:h-28" />
      <FloralCorner position="bottom-right" className="opacity-30 w-20 h-20 md:w-28 md:h-28" />

      {/* Main content */}
      <div className="relative z-10 section-container text-center py-20 md:py-28">
        {/* Logo emblem */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-navy-400 to-gold-400 opacity-30 blur-sm group-hover:opacity-50 transition duration-300" />
            <img
              src="/logo.png"
              alt="Vareli Croatian Kitchen & Cocktail Bar Logo"
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-contain bg-white/95 p-1 shadow-xl ring-2 ring-white/30"
            />
          </div>
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8">
          <span className={`w-2 h-2 rounded-full ${
            status === 'open' ? 'bg-green-400' : status === 'closingSoon' ? 'bg-amber-400' : 'bg-red-400'
          } animate-pulse`} aria-hidden="true" />
          <span>{t('hero.openDaily')}</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          {t('hero.tagline')}
        </h1>
        
        <p className="font-display text-xl sm:text-2xl md:text-3xl text-white/80 italic mb-6">
          {t('hero.subtitle')}
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 mb-10 font-body">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-navy-700 font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200 text-base cursor-pointer"
          >
            {t('hero.viewMenu')}
          </a>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white font-semibold rounded-lg border-2 border-white/40 hover:bg-white/10 hover:border-white/60 transition-all duration-200 text-base cursor-pointer"
          >
            {t('hero.reserveTable')}
          </a>
        </div>

        {/* Google Rating Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-white">{restaurantInfo.rating}</span>
            <div className="flex" aria-label={`${restaurantInfo.rating} out of 5 stars`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`w-4 h-4 ${
                    star <= Math.floor(restaurantInfo.rating)
                      ? 'text-gold-400'
                      : star - 0.5 <= restaurantInfo.rating
                      ? 'text-gold-400/60'
                      : 'text-white/30'
                  }`}
                  filled={star <= restaurantInfo.rating}
                />
              ))}
            </div>
          </div>
          <span className="w-px h-6 bg-white/20" aria-hidden="true" />
          <span className="text-white/80 text-sm">
            {restaurantInfo.reviewCount} {t('hero.googleReviews')}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 wave-decoration" aria-hidden="true" />
    </section>
  );
}
