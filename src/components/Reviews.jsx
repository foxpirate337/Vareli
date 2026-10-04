import { useLanguage } from '../context/LanguageContext.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { reviews, restaurantInfo } from '../data/menu.js';
import { StarIcon, QuoteIcon, OrnamentDivider, ExternalLinkIcon } from './Icons.jsx';

export default function Reviews() {
  const { t, localized } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="reviews"
      ref={ref}
      className={`section-padding bg-white relative scroll-fade ${
        isVisible ? 'visible' : ''
      }`}
      aria-labelledby="reviews-title"
    >
      <div className="section-container">
        {/* Header with Google Score */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-navy-500 font-semibold mb-2 block">
            {t('reviews.subtitle')}
          </span>
          <h2 id="reviews-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800 mb-4">
            {t('reviews.title')}
          </h2>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="font-display text-3xl font-bold text-navy-800">
              {restaurantInfo.rating}
            </span>
            <div className="flex text-gold-400" aria-label="4.7 stars out of 5">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-sm text-navy-500">
              ({restaurantInfo.reviewCount} reviews)
            </span>
          </div>

          <OrnamentDivider />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="card p-6 flex flex-col justify-between relative"
            >
              <QuoteIcon className="absolute top-4 right-4 text-navy-200" />
              <div>
                {/* Stars */}
                <div className="flex text-gold-400 mb-4" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                {/* Text */}
                <p className="text-sm sm:text-base text-navy-700 font-body leading-relaxed italic mb-6">
                  "{localized(rev, 'text')}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-navy-100 pt-4 flex items-center justify-between">
                <div>
                  <span className="font-display text-base font-bold text-navy-800 block">
                    {rev.name}
                  </span>
                  {rev.badgeEn && (
                    <span className="text-xs text-gold-600 font-semibold">
                      {localized(rev, 'badge')}
                    </span>
                  )}
                </div>
                <span className="text-xs text-navy-400">Google Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={restaurantInfo.googleReviewsLink || `https://www.google.com/search?q=${encodeURIComponent(restaurantInfo.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>{t('reviews.readAll')}</span>
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
          <a
            href={restaurantInfo.googleReviewsLink || `https://www.google.com/search?q=${encodeURIComponent(restaurantInfo.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-navy-600 hover:text-navy-800 underline transition-colors duration-200"
          >
            {t('reviews.leaveReview')}
          </a>
        </div>
      </div>
    </section>
  );
}
