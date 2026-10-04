import { useLanguage } from '../context/LanguageContext.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { signatureCocktails } from '../data/menu.js';
import { OrnamentDivider, FloralCorner } from './Icons.jsx';

export default function Cocktails() {
  const { t, localized } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="cocktails"
      ref={ref}
      className={`section-padding bg-parchment relative overflow-hidden scroll-fade ${
        isVisible ? 'visible' : ''
      }`}
      aria-labelledby="cocktails-title"
    >
      {/* Floral gold corners */}
      <FloralCorner position="top-left" gold={true} className="opacity-40" />
      <FloralCorner position="top-right" gold={true} className="opacity-40" />
      <FloralCorner position="bottom-left" gold={true} className="opacity-40" />
      <FloralCorner position="bottom-right" gold={true} className="opacity-40" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold mb-2 block">
            {t('cocktails.title')}
          </span>
          <h2
            id="cocktails-title"
            className="font-script italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-navy-900 mb-4 font-normal"
          >
            "{t('cocktails.subtitle')}"
          </h2>
          <OrnamentDivider gold={true} />
          <p className="text-navy-700/80 font-body text-base md:text-lg leading-relaxed mt-6">
            {t('cocktails.intro')}
          </p>
        </div>

        {/* Cocktails list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {signatureCocktails.map((cocktail) => (
            <article
              key={cocktail.number}
              className="cocktail-card group flex flex-col justify-between"
            >
              {/* Photo placeholder */}
              {/* 
                TODO: Replace with actual cocktail photo:
                <img 
                  src={`/images/cocktails/cocktail-${cocktail.number}.jpg`} 
                  alt={cocktail.name}
                  className="w-full h-44 object-cover rounded-lg mb-4" 
                  loading="lazy"
                />
              */}
              <div
                className="w-full h-44 rounded-lg bg-gradient-to-br from-gold-100/80 to-sand-200/60 border border-gold-200/50 flex items-center justify-center p-4 text-center mb-5"
                aria-label={`Photo of ${cocktail.name}`}
              >
                <div className="text-gold-700/60">
                  <span className="block font-display text-base font-semibold mb-1">
                    {cocktail.name}
                  </span>
                  <span className="text-xs italic text-gold-600/70">
                    Photo placeholder · Add in public/images/cocktails/
                  </span>
                </div>
              </div>

              <div>
                {/* Header: number + name + price */}
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-sm font-semibold text-gold-600">
                      0{cocktail.number}.
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-gold-700 transition-colors duration-200">
                      {cocktail.name}
                    </h3>
                  </div>
                  <span className="font-display text-lg font-bold text-gold-700 shrink-0">
                    {cocktail.price}
                  </span>
                </div>

                {/* Ingredients */}
                <p className="text-xs uppercase tracking-wider text-gold-700 font-semibold mb-3 font-body">
                  {localized(cocktail, 'ingredients')}
                </p>

                {/* Story */}
                <p className="text-sm text-navy-700/90 font-body leading-relaxed italic border-t border-gold-200/60 pt-3">
                  "{localized(cocktail, 'story')}"
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
