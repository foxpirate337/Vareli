// ═══════════════════════════════════════════════════════════════
// Vareli — Translations (i18n)
// Add new languages by creating a new object following the
// same key structure as 'en' and 'hr'.
// ═══════════════════════════════════════════════════════════════

const translations = {
  en: {
    // Navigation
    nav: {
      story: 'Story',
      menu: 'Menu',
      cocktails: 'Cocktails',
      atmosphere: 'Atmosphere',
      reviews: 'Reviews',
      visit: 'Visit',
      reserve: 'Reserve',
      callReserve: 'Call / Reserve',
    },
    // Hero
    hero: {
      tagline: 'Croatian Kitchen & Cocktails',
      subtitle: 'in the heart of Vrbnik',
      description: 'Fresh Adriatic seafood, local wines, and signature cocktails on the sun-kissed shores of Krk Island.',
      viewMenu: 'View Menu',
      reserveTable: 'Reserve a Table',
      openDaily: 'Open daily until midnight',
      googleReviews: 'Google reviews',
    },
    // Our Story
    story: {
      title: 'Our Story',
      subtitle: 'A taste of the Adriatic',
      p1: 'Nestled in the ancient heart of Vrbnik, on the charming Trg Škujica, Vareli brings together the finest traditions of Croatian coastal cuisine with a contemporary spirit. Our kitchen celebrates the flavors of the Adriatic — from the prized prosciutto of Drniš and artisanal Istrian cheeses to the freshest catch of the day.',
      p2: 'We pour the celebrated Žlahtina wine, a grape unique to Vrbnik\'s sun-drenched vineyards, alongside our handcrafted signature cocktails — each one inspired by the island\'s Mediterranean herbs, centuries of winemaking tradition, and the breathtaking views from our terrace.',
      p3: 'Whether you\'re here for a leisurely lunch overlooking the sea or an evening of cocktails and live music under the stars, Vareli is where the spirit of Krk Island comes alive.',
    },
    // Signature Dishes
    signatures: {
      title: 'Signature Dishes',
      subtitle: 'Our chef\'s selection',
    },
    // Menu
    menu: {
      title: 'Our Menu',
      subtitle: 'Flavors of the Adriatic',
      allergenNote: 'If you have dietary restrictions or allergies, please ask our staff.',
    },
    // Cocktails
    cocktails: {
      title: 'Signature Cocktails',
      subtitle: 'Our Story in Every Sip',
      intro: 'Inspired by Vrbnik, its vineyards, Mediterranean herbs and centuries of tradition. Five original cocktails crafted to tell our story.',
    },
    // Atmosphere
    atmosphere: {
      title: 'The Atmosphere',
      subtitle: 'Where moments become memories',
      terrace: 'Sun-kissed Terrace',
      terraceDesc: 'Enjoy panoramic views of the Adriatic Sea and Vrbnik\'s vineyards from our stone terrace, perfect for a leisurely lunch or sunset cocktails.',
      evening: 'Evening Ambiance',
      eveningDesc: 'As the sun sets over the island, Vareli transforms into a warm, candlelit haven — the perfect setting for an intimate dinner or a lively night out.',
      liveMusic: 'Live Music',
      // TODO: Confirm live music schedule with the owner
      liveMusicDesc: 'Join us on Tuesday, Thursday and Saturday evenings for live music sessions that bring the spirit of Vrbnik to life.',
    },
    // Reviews
    reviews: {
      title: 'What Our Guests Say',
      subtitle: 'on Google',
      readAll: 'Read all reviews on Google',
      leaveReview: 'Share your experience',
    },
    // Visit
    visit: {
      title: 'Visit Us',
      subtitle: 'Find us in Vrbnik',
      address: 'Address',
      hours: 'Opening Hours',
      phone: 'Phone',
      priceRange: 'Price Range',
      perPerson: 'per person',
      getDirections: 'Get Directions',
      callUs: 'Call Us',
    },
    // Reservation
    reservation: {
      title: 'Reserve a Table',
      name: 'Your Name',
      date: 'Date',
      time: 'Time',
      guests: 'Number of Guests',
      notes: 'Special Requests',
      notesPlaceholder: 'Allergies, celebrations, seating preferences...',
      submit: 'Send via WhatsApp',
      submitEmail: 'Send via Email',
      orCallUs: 'or call us directly',
    },
    // Footer
    footer: {
      tagline: 'Croatian Kitchen & Cocktail Bar',
      rights: '© {year} Vareli Croatian Kitchen & Cocktail Bar',
      followUs: 'Follow Us',
    },
    // Status
    status: {
      openNow: 'Open now',
      closed: 'Closed',
      closingSoon: 'Closing soon',
    },
  },

  hr: {
    nav: {
      story: 'Priča',
      menu: 'Jelovnik',
      cocktails: 'Kokteli',
      atmosphere: 'Atmosfera',
      reviews: 'Recenzije',
      visit: 'Posjetite',
      reserve: 'Rezerviraj',
      callReserve: 'Nazovi / Rezerviraj',
    },
    hero: {
      tagline: 'Hrvatska kuhinja i kokteli',
      subtitle: 'u srcu Vrbnika',
      description: 'Svježi jadranski plodovi mora, lokalna vina i autorski kokteli na suncem obasjanim obalama otoka Krka.',
      viewMenu: 'Pogledaj jelovnik',
      reserveTable: 'Rezerviraj stol',
      openDaily: 'Otvoreno svaki dan do ponoći',
      googleReviews: 'Google recenzija',
    },
    story: {
      title: 'Naša priča',
      subtitle: 'Okus Jadrana',
      p1: 'Smješten u drevnom srcu Vrbnika, na šarmantnom Trgu Škujica, Vareli spaja najbolje tradicije hrvatske obalne kuhinje sa suvremenim duhom. Naša kuhinja slavi okuse Jadrana — od cijenjenog drniškog pršuta i istarskih sireva do najsvježijeg ulova dana.',
      p2: 'Točimo slavno vino Žlahtina, sortu jedinstvenu za suncem obasjane vrbničke vinograde, uz naše ručno izrađene autorske koktele — svaki inspiriran mediteranskim biljem otoka, stoljetnom tradicijom vinarstva i zadivljujućim pogledom s naše terase.',
      p3: 'Bilo da ste ovdje na opušteni ručak s pogledom na more ili na večer koktela i žive glazbe pod zvijezdama, Vareli je mjesto gdje duh otoka Krka oživljava.',
    },
    signatures: {
      title: 'Preporučena jela',
      subtitle: 'Izbor našeg kuhara',
    },
    menu: {
      title: 'Naš jelovnik',
      subtitle: 'Okusi Jadrana',
      allergenNote: 'Ako imate prehrambena ograničenja ili alergije, obratite se našem osoblju.',
    },
    cocktails: {
      title: 'Autorski kokteli',
      subtitle: 'Naša priča u svakom gutljaju',
      intro: 'Inspirirani Vrbnikom, njegovim vinogradima, mediteranskim biljem i stoljetnom tradicijom. Pet originalnih koktela osmišljenih da ispričaju našu priču.',
    },
    atmosphere: {
      title: 'Atmosfera',
      subtitle: 'Gdje trenuci postaju uspomene',
      terrace: 'Sunčana terasa',
      terraceDesc: 'Uživajte u panoramskom pogledu na Jadransko more i vrbničke vinograde s naše kamene terase, savršene za opušteni ručak ili koktele uz zalazak sunca.',
      evening: 'Večernji ugođaj',
      eveningDesc: 'Kad sunce zađe nad otokom, Vareli se pretvara u toplo utočište uz svijeće — savršen ambijent za intimnu večeru ili živahnu noć.',
      liveMusic: 'Živa glazba',
      liveMusicDesc: 'Pridružite nam se utorkom, četvrtkom i subotom navečer na sesijama žive glazbe koje oživljavaju duh Vrbnika.',
    },
    reviews: {
      title: 'Što kažu naši gosti',
      subtitle: 'na Googleu',
      readAll: 'Pročitajte sve recenzije na Googleu',
      leaveReview: 'Podijelite svoje iskustvo',
    },
    visit: {
      title: 'Posjetite nas',
      subtitle: 'Pronađite nas u Vrbniku',
      address: 'Adresa',
      hours: 'Radno vrijeme',
      phone: 'Telefon',
      priceRange: 'Cjenovni raspon',
      perPerson: 'po osobi',
      getDirections: 'Upute za dolazak',
      callUs: 'Nazovite nas',
    },
    reservation: {
      title: 'Rezervirajte stol',
      name: 'Vaše ime',
      date: 'Datum',
      time: 'Vrijeme',
      guests: 'Broj gostiju',
      notes: 'Posebni zahtjevi',
      notesPlaceholder: 'Alergije, proslave, preferencije sjedenja...',
      submit: 'Pošalji putem WhatsAppa',
      submitEmail: 'Pošalji e-mailom',
      orCallUs: 'ili nas nazovite izravno',
    },
    footer: {
      tagline: 'Hrvatska kuhinja i koktel bar',
      rights: '© {year} Vareli Croatian Kitchen & Cocktail Bar',
      followUs: 'Pratite nas',
    },
    status: {
      openNow: 'Otvoreno',
      closed: 'Zatvoreno',
      closingSoon: 'Uskoro zatvaramo',
    },
  },

  // TODO: Add German (de) and Italian (it) translations
  // Copy the 'en' object and translate the values.
  // de: { ... },
  // it: { ... },
};

export default translations;
