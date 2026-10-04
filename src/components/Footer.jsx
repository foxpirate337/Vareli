import { useLanguage } from '../context/LanguageContext.jsx';
import { restaurantInfo } from '../data/menu.js';
import { InstagramIcon, FacebookIcon, WaveIcon } from './Icons.jsx';

export default function Footer() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="bg-navy-900 text-white/80 py-12 md:py-16 border-t border-navy-800" role="contentinfo">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/logo.png"
                alt="Vareli Logo"
                className="w-10 h-10 rounded-full object-contain bg-white/95 p-0.5 shadow-sm"
              />
              <span className="font-display text-2xl font-bold text-white block">
                Vareli
              </span>
            </div>
            <p className="font-display italic text-white/70 text-base mb-4">
              {t('footer.tagline')}
            </p>
            <p className="text-sm text-white/60 max-w-sm mb-4">
              {restaurantInfo.address}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={restaurantInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              {restaurantInfo.facebook && (
                <a
                  href={restaurantInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#story" className="hover:text-white transition-colors">{t('nav.story')}</a></li>
              <li><a href="#signatures" className="hover:text-white transition-colors">{t('signatures.title')}</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">{t('nav.menu')}</a></li>
              <li><a href="#cocktails" className="hover:text-white transition-colors">{t('nav.cocktails')}</a></li>
              <li><a href="#atmosphere" className="hover:text-white transition-colors">{t('nav.atmosphere')}</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">{t('nav.reviews')}</a></li>
              <li><a href="#visit" className="hover:text-white transition-colors">{t('nav.visit')}</a></li>
            </ul>
          </div>

          {/* Language & Contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">
              Language / Jezik
            </h4>
            <div className="flex items-center gap-2 mb-6">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded text-xs font-semibold uppercase cursor-pointer ${
                  language === 'en' ? 'bg-white text-navy-900' : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hr')}
                className={`px-3 py-1.5 rounded text-xs font-semibold uppercase cursor-pointer ${
                  language === 'hr' ? 'bg-white text-navy-900' : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                Hrvatski
              </button>
            </div>
            <p className="text-xs text-white/50">
              Tel: <a href={restaurantInfo.phoneLink} className="hover:text-white">{restaurantInfo.phone}</a>
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>{t('footer.rights')}</p>
          <div className="flex items-center gap-1">
            <span>Made with care for Vrbnik</span>
            <WaveIcon className="w-4 h-2 text-white/40 ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
