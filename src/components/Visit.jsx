import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { restaurantInfo } from '../data/menu.js';
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  EuroIcon,
  WhatsAppIcon,
  OrnamentDivider,
  NavigationIcon,
} from './Icons.jsx';

export default function Visit() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '19:00',
    guests: '2',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit via WhatsApp
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello! I would like to reserve a table at Vareli:\n` +
      `Name: ${formData.name}\n` +
      `Date: ${formData.date}\n` +
      `Time: ${formData.time}\n` +
      `Guests: ${formData.guests}\n` +
      (formData.notes ? `Notes: ${formData.notes}\n` : '')
    );
    window.open(`https://wa.me/${restaurantInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  // Submit via Email
  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Reservation Request - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nNotes: ${formData.notes}`
    );
    window.location.href = `mailto:${restaurantInfo.email || 'info@vareli.hr'}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="visit"
      ref={ref}
      className={`section-padding bg-navy-50/50 relative scroll-fade ${
        isVisible ? 'visible' : ''
      }`}
      aria-labelledby="visit-title"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-navy-500 font-semibold mb-2 block">
            {t('visit.subtitle')}
          </span>
          <h2 id="visit-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800">
            {t('visit.title')}
          </h2>
          <OrnamentDivider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info & Map */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="card p-5">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-800">
                      {t('visit.address')}
                    </h3>
                    <p className="text-sm text-navy-600 mt-1">
                      {restaurantInfo.address}
                    </p>
                    <span className="text-xs text-navy-400 mt-1 block">
                      Plus Code: {restaurantInfo.plusCode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card p-5">
                <div className="flex items-start gap-3">
                  <ClockIcon className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-800">
                      {t('visit.hours')}
                    </h3>
                    <p className="text-sm text-navy-600 mt-1">
                      {restaurantInfo.hoursDisplay[language] || restaurantInfo.hoursDisplay.en}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card p-5">
                <div className="flex items-start gap-3">
                  <PhoneIcon className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-800">
                      {t('visit.phone')}
                    </h3>
                    <a
                      href={restaurantInfo.phoneLink}
                      className="text-sm text-navy-600 hover:text-navy-800 underline mt-1 block"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div className="card p-5">
                <div className="flex items-start gap-3">
                  <EuroIcon className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-800">
                      {t('visit.priceRange')}
                    </h3>
                    <p className="text-sm text-navy-600 mt-1">
                      {restaurantInfo.priceRange} {t('visit.perPerson')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Iframe */}
            <div className="card overflow-hidden">
              <iframe
                title="Google Maps Location of Vareli"
                src="https://maps.google.com/maps?q=Trg+Škujica+1,+51516+Vrbnik,+Croatia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-4 bg-white flex items-center justify-between">
                <span className="text-sm text-navy-600">Trg Škujica 1, Vrbnik</span>
                <a
                  href={restaurantInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-3"
                >
                  <NavigationIcon className="w-3.5 h-3.5" />
                  <span>{t('visit.getDirections')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Reservation Form */}
          <div className="card p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-navy-800 mb-2">
              {t('reservation.title')}
            </h3>
            <p className="text-sm text-navy-500 mb-6 font-body">
              Book your table via WhatsApp or call us directly.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="res-name" className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-1">
                  {t('reservation.name')} *
                </label>
                <input
                  type="text"
                  id="res-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-navy-800 focus:border-navy-600 focus:outline-none text-sm"
                  placeholder="John Doe"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="res-date" className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-1">
                    {t('reservation.date')} *
                  </label>
                  <input
                    type="date"
                    id="res-date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-navy-800 focus:border-navy-600 focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="res-time" className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-1">
                    {t('reservation.time')} *
                  </label>
                  <input
                    type="time"
                    id="res-time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-navy-800 focus:border-navy-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="res-guests" className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-1">
                  {t('reservation.guests')} *
                </label>
                <select
                  id="res-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-navy-800 focus:border-navy-600 focus:outline-none text-sm"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'person' : 'people'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="res-notes" className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-1">
                  {t('reservation.notes')}
                </label>
                <textarea
                  id="res-notes"
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={t('reservation.notesPlaceholder')}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy-200 text-navy-800 focus:border-navy-600 focus:outline-none text-sm resize-none"
                />
              </div>

              {/* WhatsApp submit button */}
              <button
                type="submit"
                className="btn-primary w-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white border-0 py-3"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>{t('reservation.submit')}</span>
              </button>

              {/* Fallback email button */}
              <button
                type="button"
                onClick={handleEmailSubmit}
                className="w-full text-center text-xs text-navy-500 hover:text-navy-700 underline py-1"
              >
                {t('reservation.submitEmail')}
              </button>

              {/* Or call us */}
              <div className="relative my-4 text-center">
                <span className="text-xs text-navy-400 bg-white px-3 relative z-10">
                  {t('reservation.orCallUs')}
                </span>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-navy-100" />
                </div>
              </div>

              {/* Direct call button */}
              <a
                href={restaurantInfo.phoneLink}
                className="btn-secondary w-full py-3"
              >
                <PhoneIcon className="w-5 h-5 text-navy-600" />
                <span>{t('visit.callUs')}: {restaurantInfo.phone}</span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
