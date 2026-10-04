import { useLanguage } from '../context/LanguageContext.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { signatureDishes } from '../data/menu.js';
import { OrnamentDivider } from './Icons.jsx';

export default function SignatureDishes() {
  const { t, localized } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="signatures"
      ref={ref}
      className={`section-padding bg-white relative scroll-fade ${
        isVisible ? 'visible' : ''
      }`}
      aria-labelledby="signatures-title"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-navy-500 font-semibold mb-2 block">
            {t('signatures.subtitle')}
          </span>
          <h2 id="signatures-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800">
            {t('signatures.title')}
          </h2>
          <OrnamentDivider />
        </div>

        {/* Dishes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {signatureDishes.map((dish, index) => (
            <article
              key={dish.id}
              className="card overflow-hidden group flex flex-col"
            >
              {/* Photo placeholder */}
              {/* 
                TODO: Replace with actual dish photo:
                <img 
                  src={`/images/dishes/${dish.id}.jpg`} 
                  alt={localized(dish, 'name')}
                  className="w-full h-48 sm:h-56 object-cover" 
                  loading="lazy"
                />
              */}
              <div
                className="w-full h-48 sm:h-56 img-placeholder flex items-center justify-center p-6 text-center"
                aria-label={`Photo of ${localized(dish, 'name')}`}
              >
                <div className="text-navy-400">
                  <span className="block font-display text-lg font-semibold text-navy-600/70 mb-1">
                    {localized(dish, 'name')}
                  </span>
                  <span className="text-xs text-navy-400/80 italic">
                    {/* Placeholder hint for developers */}
                    Photo placeholder · Add image in public/images/dishes/
                  </span>
                </div>
              </div>

              {/* Dish info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-800 group-hover:text-navy-600 transition-colors duration-200">
                      {dish.nameEn}
                    </h3>
                    <span className="price-tag shrink-0">{dish.price}</span>
                  </div>
                  
                  {/* Croatian name in background */}
                  <p className="text-xs text-navy-400 italic mb-3">
                    {dish.nameHr}
                  </p>

                  <p className="text-sm text-navy-600 font-body leading-relaxed">
                    {localized(dish, 'description')}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View full menu CTA */}
        <div className="text-center mt-12">
          <a
            href="#menu"
            className="btn-secondary"
          >
            {t('hero.viewMenu')}
          </a>
        </div>
      </div>
    </section>
  );
}
