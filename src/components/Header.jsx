import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useOpenStatus } from '../hooks/useOpenStatus.js';
import { PhoneIcon, MenuIcon, CloseIcon } from './Icons.jsx';

const NAV_ITEMS = [
  { key: 'story', href: '#story' },
  { key: 'menu', href: '#menu' },
  { key: 'cocktails', href: '#cocktails' },
  { key: 'atmosphere', href: '#atmosphere' },
  { key: 'reviews', href: '#reviews' },
  { key: 'visit', href: '#visit' },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { status } = useOpenStatus();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll handled by CSS scroll-behavior: smooth
  };

  const statusColors = {
    open: 'bg-green-500',
    closingSoon: 'bg-amber-500',
    closed: 'bg-red-400',
  };

  const statusText = {
    open: t('status.openNow'),
    closingSoon: t('status.closingSoon'),
    closed: t('status.closed'),
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-sm'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group"
              aria-label="Vareli - Home"
            >
              <img
                src="/logo.png"
                alt="Vareli Logo"
                className="w-9 h-9 md:w-11 md:h-11 rounded-full object-contain bg-white/95 p-0.5 shadow-sm ring-1 ring-white/30 transition-transform group-hover:scale-105 duration-200"
              />
              <span className={`font-display text-xl md:text-2xl font-bold tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-navy-700' : 'text-white'
              }`}>
                Vareli
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isScrolled
                      ? 'text-navy-600 hover:text-navy-800 hover:bg-navy-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {t(`nav.${key}`)}
                </a>
              ))}
            </nav>

            {/* Right side: status, language, CTA */}
            <div className="flex items-center gap-3">
              {/* Open/Closed status (desktop) */}
              <div className={`hidden md:flex items-center gap-1.5 text-xs font-medium ${
                isScrolled ? 'text-navy-600' : 'text-white/90'
              }`}>
                <span className={`w-2 h-2 rounded-full ${statusColors[status]} animate-pulse`} aria-hidden="true" />
                <span>{statusText[status]}</span>
              </div>

              {/* Language Selector */}
              <div className="hidden md:flex items-center rounded-lg overflow-hidden border border-navy-200/30" role="group" aria-label="Language selector">
                {['en', 'hr'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2.5 py-1.5 text-xs font-semibold uppercase transition-colors duration-200 cursor-pointer ${
                      language === lang
                        ? isScrolled
                          ? 'bg-navy-600 text-white'
                          : 'bg-white text-navy-700'
                        : isScrolled
                          ? 'text-navy-500 hover:bg-navy-50'
                          : 'text-white/70 hover:bg-white/10'
                    }`}
                    aria-label={lang === 'en' ? 'English' : 'Hrvatski'}
                    aria-pressed={language === lang}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* CTA Button - Call/Reserve */}
              <a
                href="tel:+385989549687"
                className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isScrolled
                    ? 'bg-navy-600 text-white hover:bg-navy-700'
                    : 'bg-white text-navy-700 hover:bg-white/90'
                }`}
                aria-label={t('nav.callReserve')}
              >
                <PhoneIcon className="w-4 h-4" />
                <span className="hidden md:inline">{t('nav.callReserve')}</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                  isScrolled ? 'text-navy-700 hover:bg-navy-50' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <nav
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex items-center justify-between p-4 border-b border-navy-100">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Vareli Logo"
                className="w-8 h-8 rounded-full object-contain bg-white p-0.5 border border-navy-100"
              />
              <span className="font-display text-lg font-bold text-navy-700">Vareli</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg text-navy-600 hover:bg-navy-50 cursor-pointer"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Status indicator (mobile) */}
          <div className="flex items-center gap-2 px-4 py-3 text-sm text-navy-600">
            <span className={`w-2 h-2 rounded-full ${statusColors[status]} animate-pulse`} aria-hidden="true" />
            <span>{statusText[status]}</span>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto py-2">
            {NAV_ITEMS.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="block px-6 py-3 text-navy-700 font-medium hover:bg-navy-50 transition-colors duration-200"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </div>

          {/* Language selector (mobile) */}
          <div className="px-4 py-3 border-t border-navy-100">
            <div className="flex items-center gap-2">
              {['en', 'hr'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold uppercase transition-colors duration-200 cursor-pointer ${
                    language === lang
                      ? 'bg-navy-600 text-white'
                      : 'text-navy-500 border border-navy-200 hover:bg-navy-50'
                  }`}
                  aria-label={lang === 'en' ? 'English' : 'Hrvatski'}
                  aria-pressed={language === lang}
                >
                  {lang === 'en' ? 'English' : 'Hrvatski'}
                </button>
              ))}
            </div>
          </div>

          {/* Call button (mobile) */}
          <div className="p-4 border-t border-navy-100">
            <a
              href="tel:+385989549687"
              className="btn-primary w-full text-center"
            >
              <PhoneIcon className="w-5 h-5" />
              {t('nav.callReserve')}
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile bottom CTA bar (only visible on small screens when scrolled) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-transform duration-300 ${
          isScrolled ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-navy-100 px-4 py-3 safe-area-bottom">
          <div className="flex items-center gap-3">
            <a
              href="tel:+385989549687"
              className="btn-primary flex-1 text-center text-sm py-2.5"
            >
              <PhoneIcon className="w-4 h-4" />
              {t('nav.callReserve')}
            </a>
            <a
              href="#visit"
              className="btn-secondary flex-1 text-center text-sm py-2.5"
            >
              {t('nav.reserve')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
