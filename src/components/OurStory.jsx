import { useLanguage } from '../context/LanguageContext.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { OrnamentDivider, FloralCorner } from './Icons.jsx';

export default function OurStory() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="story"
      ref={ref}
      className={`relative section-padding bg-navy-50 overflow-hidden scroll-fade ${
        isVisible ? 'visible' : ''
      }`}
      aria-labelledby="story-title"
    >
      <FloralCorner position="top-left" className="opacity-20" />
      <FloralCorner position="bottom-right" className="opacity-20" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section badge */}
          <span className="text-xs uppercase tracking-widest text-navy-500 font-semibold mb-2 block">
            {t('story.subtitle')}
          </span>

          {/* Heading */}
          <h2 id="story-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800 mb-2">
            {t('story.title')}
          </h2>

          <OrnamentDivider />

          {/* Story text */}
          <div className="space-y-6 text-base md:text-lg text-navy-600 leading-relaxed font-body mt-8">
            <p>{t('story.p1')}</p>
            <p>{t('story.p2')}</p>
            <p className="font-medium text-navy-700">{t('story.p3')}</p>
          </div>

          {/* Key highlights / badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-navy-200/60">
            <div className="p-4 rounded-xl bg-white/60 border border-navy-100">
              <span className="block font-display text-2xl font-bold text-navy-700">Trg Škujica</span>
              <span className="text-xs text-navy-500">Historic center</span>
            </div>
            <div className="p-4 rounded-xl bg-white/60 border border-navy-100">
              <span className="block font-display text-2xl font-bold text-navy-700">Adriatic</span>
              <span className="text-xs text-navy-500">Fresh local catch</span>
            </div>
            <div className="p-4 rounded-xl bg-white/60 border border-navy-100">
              <span className="block font-display text-2xl font-bold text-navy-700">Žlahtina</span>
              <span className="text-xs text-navy-500">Vrbnik indigenous wine</span>
            </div>
            <div className="p-4 rounded-xl bg-white/60 border border-navy-100">
              <span className="block font-display text-2xl font-bold text-navy-700">Midnight</span>
              <span className="text-xs text-navy-500">Open late daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
