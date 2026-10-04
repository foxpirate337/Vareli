import { useLanguage } from '../context/LanguageContext.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { OrnamentDivider, MusicIcon } from './Icons.jsx';

export default function Atmosphere() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="atmosphere"
      ref={ref}
      className={`section-padding bg-navy-50 relative scroll-fade ${
        isVisible ? 'visible' : ''
      }`}
      aria-labelledby="atmosphere-title"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-navy-500 font-semibold mb-2 block">
            {t('atmosphere.subtitle')}
          </span>
          <h2 id="atmosphere-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800">
            {t('atmosphere.title')}
          </h2>
          <OrnamentDivider />
        </div>

        {/* Atmosphere cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Terrace */}
          <div className="card overflow-hidden flex flex-col">
            {/* 
              TODO: Replace with actual terrace photo:
              <img src="/images/atmosphere/terrace.jpg" alt="Vareli terrace" className="w-full h-56 object-cover" />
            */}
            <div className="w-full h-56 img-placeholder flex items-center justify-center p-6 text-center">
              <span className="text-navy-500 font-display text-lg">
                Terrace with sea & vineyard view
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-navy-800 mb-2">
                  {t('atmosphere.terrace')}
                </h3>
                <p className="text-sm text-navy-600 font-body leading-relaxed">
                  {t('atmosphere.terraceDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Evening */}
          <div className="card overflow-hidden flex flex-col">
            {/* 
              TODO: Replace with actual evening ambiance photo:
              <img src="/images/atmosphere/evening.jpg" alt="Evening atmosphere" className="w-full h-56 object-cover" />
            */}
            <div className="w-full h-56 img-placeholder flex items-center justify-center p-6 text-center">
              <span className="text-navy-500 font-display text-lg">
                Candlelit evening ambiance
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-navy-800 mb-2">
                  {t('atmosphere.evening')}
                </h3>
                <p className="text-sm text-navy-600 font-body leading-relaxed">
                  {t('atmosphere.eveningDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Live Music */}
          <div className="card overflow-hidden flex flex-col border-gold-300/40 bg-gradient-to-b from-white to-gold-50/20">
            {/* 
              TODO: Replace with live music photo:
              <img src="/images/atmosphere/music.jpg" alt="Live music nights" className="w-full h-56 object-cover" />
            */}
            <div className="w-full h-56 img-placeholder flex items-center justify-center p-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <MusicIcon className="w-8 h-8 text-gold-500" />
                <span className="text-navy-500 font-display text-lg">
                  Live acoustic music sessions
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-xl font-bold text-navy-800">
                    {t('atmosphere.liveMusic')}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-gold-100 text-gold-800">
                    Tue · Thu · Sat
                  </span>
                </div>
                <p className="text-sm text-navy-600 font-body leading-relaxed mb-3">
                  {t('atmosphere.liveMusicDesc')}
                </p>
                {/* Note for developer / owner */}
                <p className="text-[11px] text-navy-400 italic">
                  * Live music days based on guest reviews. Confirm schedule with management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
