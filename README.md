# Vareli Croatian Kitchen & Cocktail Bar — Official Website

Modern, curated, mobile-first one-page website for **Vareli Croatian Kitchen & Cocktail Bar** in Vrbnik, Krk Island (Croatia).

Built with **Vite**, **React**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production (Vercel / Netlify / Cloudflare Pages)
```bash
npm run build
```
The output will be in the `dist/` directory, ready to deploy directly with zero extra configuration.

---

## 🎨 Visual Identity & Design System

- **Palette**:
  - Deep Mediterranean Navy / Cobalt: `#2E4A8C`
  - Periwinkle background: `#EDF0F8`
  - Warm parchment / sand: `#F1E6CF`
  - Antique gold accent: `#B08D3C`
- **Typography**:
  - Titles & Headlines: **Cormorant Garamond** (Google Fonts)
  - Body text & UI: **Inter** (Google Fonts)
  - Signature Script: **Playfair Display** (Google Fonts)
- **Features**:
  - Live "Open now / Closed" status calculated dynamically on the `Europe/Zagreb` timezone.
  - Interactive sticky category navigation for menu.
  - Multi-language support (English & Croatian out-of-the-box, easily extensible to German and Italian).
  - WhatsApp instant reservation pre-fill with email fallback and direct call CTA.
  - SEO optimized with JSON-LD Schema.org `Restaurant` metadata.

---

## 📝 How to Update Menu & Prices (For Restaurant Owners)

All restaurant information, dishes, cocktails, and prices are contained in **a single file**:
📂 `src/data/menu.js`

To change a price or add a dish:
1. Open `src/data/menu.js`.
2. Find the dish (e.g., `price: '€19.90'`).
3. Update the value and save the file. The website updates automatically!

---

## 📸 How to Add Real Photos

All placeholder sections contain code comments indicating where real images should be placed.

1. **Dishes photos**:
   - Place images in `public/images/dishes/`
   - In `src/components/SignatureDishes.jsx`, replace the placeholder `div` with:
     ```jsx
     <img src={`/images/dishes/${dish.id}.jpg`} alt={dish.nameEn} className="w-full h-48 sm:h-56 object-cover" loading="lazy" />
     ```

2. **Cocktails photos**:
   - Place images in `public/images/cocktails/`
   - In `src/components/Cocktails.jsx`, replace the placeholder `div` with:
     ```jsx
     <img src={`/images/cocktails/cocktail-${cocktail.number}.jpg`} alt={cocktail.name} className="w-full h-44 object-cover rounded-lg mb-4" loading="lazy" />
     ```

3. **Atmosphere / Terrace / Live Music photos**:
   - Place images in `public/images/atmosphere/`
   - In `src/components/Atmosphere.jsx`, replace the placeholder `div`s with `<img>` tags.

---

## 🌐 Adding New Languages (DE, IT)

To add German (`de`) or Italian (`it`):
1. Open `src/data/translations.js`.
2. Add a new `de:` or `it:` object copying the keys from `en:`.
3. In `src/context/LanguageContext.jsx`, add `'de'` and `'it'` to `SUPPORTED_LANGUAGES`:
   ```js
   const SUPPORTED_LANGUAGES = ['en', 'hr', 'de', 'it'];
   ```

---

## 📍 Restaurant Details

- **Name**: Vareli Croatian Kitchen & Cocktail Bar (Konoba Vareli)
- **Address**: Trg Škujica 1, 51516 Vrbnik, Croatia
- **Phone**: [+385 98 954 9687](tel:+385989549687)
- **Instagram**: [https://www.instagram.com/vareli.krk/](https://www.instagram.com/vareli.krk/)
- **Opening Hours**: Daily 10:00 – 00:00 · Saturday until 02:00
- **Rating**: 4.7 ★ (291 Google Reviews)
