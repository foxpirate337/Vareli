import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { menuCategories } from '../data/menu.js';
import { OrnamentDivider } from './Icons.jsx';

export default function Menu() {
  const { t, localized } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const categoryRefs = useRef({});

  const handleTabClick = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const yOffset = -140; // Header + tabs offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="menu"
      ref={ref}
      className={`section-padding bg-navy-50/60 relative scroll-fade ${
        isVisible ? 'visible' : ''
      }`}
      aria-labelledby="menu-title"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-navy-500 font-semibold mb-2 block">
            {t('menu.subtitle')}
          </span>
          <h2 id="menu-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800">
            {t('menu.title')}
          </h2>
          <OrnamentDivider />
        </div>

        {/* Sticky category chips */}
        <div className="sticky top-16 md:top-20 z-30 bg-navy-50/95 backdrop-blur-md py-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            className="menu-chips-container"
            role="tablist"
            aria-label="Menu categories"
          >
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                onClick={() => handleTabClick(cat.id)}
                className={`menu-chip ${activeCategory === cat.id ? 'active' : ''}`}
              >
                <span>{localized(cat, 'name')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu content by categories */}
        <div className="space-y-12">
          {menuCategories.map((cat) => (
            <div
              key={cat.id}
              id={`category-${cat.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${cat.id}`}
              className="scroll-mt-36"
            >
              {/* Category Header */}
              <div className="border-b border-navy-200 pb-3 mb-6">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-800">
                  {cat.nameEn}
                </h3>
                <span className="text-sm text-navy-500 italic block mt-0.5">
                  {cat.nameHr}
                </span>
                {cat.introEn && (
                  <p className="text-xs text-navy-500 mt-2 italic font-body">
                    {localized(cat, 'intro')}
                  </p>
                )}
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-white border border-navy-100 shadow-sm hover:border-navy-200 transition-colors duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-baseline justify-between gap-3 mb-1">
                        <h4 className="font-display text-lg sm:text-xl font-bold text-navy-800">
                          {item.nameEn}
                        </h4>
                        <span className="price-tag text-base sm:text-lg shrink-0">
                          {item.price}
                        </span>
                      </div>

                      {/* Croatian name */}
                      <p className="text-xs text-navy-400 italic mb-2">
                        {item.nameHr}
                      </p>

                      {/* Description */}
                      {item.descriptionEn && (
                        <p className="text-sm text-navy-600 font-body leading-relaxed">
                          {localized(item, 'description')}
                        </p>
                      )}

                      {/* Alternate price (e.g., for 2 people) */}
                      {item.priceAlt && (
                        <span className="inline-block mt-2 text-xs font-semibold text-navy-500 bg-navy-50 px-2.5 py-1 rounded-md">
                          {item.priceAlt}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Allergen note */}
        <div className="mt-16 p-4 rounded-xl bg-navy-100/40 border border-navy-200/50 text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-navy-600 font-body">
            ⚠️ {t('menu.allergenNote')}
          </p>
        </div>
      </div>
    </section>
  );
}
