// ═══════════════════════════════════════════════════════════════
// Vareli Croatian Kitchen & Cocktail Bar — Menu Data
// Edit prices, descriptions, and items here.
// The website components read from this file.
// ═══════════════════════════════════════════════════════════════

export const restaurantInfo = {
  name: 'Vareli Croatian Kitchen & Cocktail Bar',
  alternateName: 'Konoba Vareli',
  address: 'Trg Škujica 1, 51516 Vrbnik, Croatia',
  plusCode: '3MGF+FW',
  phone: '+385 98 954 9687',
  phoneLink: 'tel:+385989549687',
  whatsappNumber: '385989549687', // WhatsApp number without + sign
  email: '', // TODO: Add email
  instagram: 'https://www.instagram.com/vareli.krk/',
  facebook: '', // TODO: Add Facebook URL
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.5!2d14.6720!3d45.0775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA0JzM5LjAiTiAxNMKwNDAnMjcuMCJF!5e0!3m2!1sen!2shr!4v1700000000000!5m2!1sen!2shr',
  googleMapsLink: 'https://maps.google.com/?q=Trg+%C5%A0kujica+1,+51516+Vrbnik,+Croatia',
  googleReviewsLink: '', // TODO: Add actual Google Reviews link
  rating: 4.7,
  reviewCount: 291,
  priceRange: '€15–35',
  hours: {
    // 0=Sunday, 1=Monday, ..., 6=Saturday
    0: { open: '10:00', close: '00:00' },
    1: { open: '10:00', close: '00:00' },
    2: { open: '10:00', close: '00:00' },
    3: { open: '10:00', close: '00:00' },
    4: { open: '10:00', close: '00:00' },
    5: { open: '10:00', close: '00:00' },
    6: { open: '10:00', close: '02:00' }, // Saturday
  },
  hoursDisplay: {
    en: 'Daily 10:00 – 00:00 · Saturday until 02:00',
    hr: 'Svaki dan 10:00 – 00:00 · Subota do 02:00',
  },
};

// ═══ SIGNATURE DISHES (featured on homepage) ═══
export const signatureDishes = [
  {
    id: 'sig-1',
    nameEn: 'Adriatic Shrimp Croquettes',
    nameHr: 'Kroketi od kozica',
    descriptionEn: 'Made with Adriatic shrimp and sun-dried tomatoes, with smoked sweet potato cream and lime.',
    descriptionHr: 'Od jadranskih kozica i sušenih rajčica, s dimljenom kremom od batata i limetom.',
    price: '€13.50',
  },
  {
    id: 'sig-2',
    nameEn: 'Cod Spread & Focaccia',
    nameHr: 'Bakalar & focaccia',
    descriptionEn: 'Creamy cod spread finished with olive oil and capers, with homemade focaccia.',
    descriptionHr: 'Kremasti namaz od bakalara s maslinovim uljem i kaparima, uz domaću focacciu.',
    price: '€11.50',
  },
  {
    id: 'sig-3',
    nameEn: 'Stuffed Calamari with Shrimp',
    nameHr: 'Punjene lignje s kozicama',
    descriptionEn: 'Special house recipe with sun-dried cherry tomatoes & Grana Padano, with homemade roasted potatoes.',
    descriptionHr: 'Posebni recept kuće sa sušenim cherry rajčicama i Grana Padanom, uz domaći pečeni krumpir.',
    price: '€19.90',
  },
  {
    id: 'sig-4',
    nameEn: 'Sea Bass with Sweet Potato Purée',
    nameHr: 'File brancina s pireom od batata',
    descriptionEn: 'With Trieste-style garlic sauce and sweet potato purée.',
    descriptionHr: 'S tršćanskim umakom od češnjaka i pireom od batata.',
    price: '€21.50',
  },
  {
    id: 'sig-5',
    nameEn: 'Tuna Steak',
    nameHr: 'Tuna steak',
    descriptionEn: 'With Swiss chard & potatoes, and Trieste-style garlic sauce.',
    descriptionHr: 'S blitvom i krumpirom, uz tršćanski umak od češnjaka.',
    price: '€24.90',
  },
  {
    id: 'sig-6',
    nameEn: 'Seafood Plate for 4',
    nameHr: 'Riblja plata za 4',
    descriptionEn: 'Generous Adriatic platter: 2 tuna steaks, 2 sea bream fillets, 2 sea bass fillets, shrimp croquettes and crispy hake fillet.',
    descriptionHr: 'Bogata jadranska plata: 2 tuna steaka, 2 fileta orade, 2 fileta brancina, kroketi od kozica i hrskavi filet oslića.',
    price: '€99.00',
  },
];

// ═══ FULL MENU ═══
export const menuCategories = [
  {
    id: 'seafood',
    nameEn: 'Seafood Specialties',
    nameHr: 'Morski specijaliteti',
    icon: '🐟', // Will be replaced with SVG icon in component
    items: [
      {
        nameEn: 'Sea Bream Fillet in Zlatna Žlahtina Sauce',
        nameHr: 'File orade u umaku od Zlatne žlahtine',
        descriptionEn: 'White wine sauce with Mediterranean herbs, served with Swiss chard and potatoes.',
        descriptionHr: 'Umak od bijelog vina s mediteranskim biljem, uz blitvu i krumpir.',
        price: '€19.90',
      },
      {
        nameEn: 'Sea Bass Fillet with Sweet Potato Purée',
        nameHr: 'File brancina s pireom od batata',
        descriptionEn: 'With Trieste-style garlic sauce and sweet potato purée.',
        descriptionHr: 'S tršćanskim umakom od češnjaka i pireom od batata.',
        price: '€21.50',
      },
      {
        nameEn: 'Cuttlefish Ragout',
        nameHr: 'Ragu od sipe',
        descriptionEn: 'Slow-cooked, served with creamy polenta and Mediterranean flavors.',
        descriptionHr: 'Polako kuhano, uz kremenastu palentu i mediteranske okuse.',
        price: '€16.50',
      },
      {
        nameEn: 'Fried Calamari with Potatoes',
        nameHr: 'Pržene lignje s krumpirom',
        descriptionEn: 'Golden fried calamari with homemade potatoes. A Mediterranean classic.',
        descriptionHr: 'Zlatno pržene lignje s domaćim krumpirom. Mediteranski klasik.',
        price: '€16.70',
      },
      {
        nameEn: 'Stuffed Calamari with Prosciutto & Cheese',
        nameHr: 'Punjene lignje s pršutom i sirom',
        descriptionEn: 'Special house recipe of cooked and roasted calamari, with homemade roasted potatoes.',
        descriptionHr: 'Posebni recept kuće od kuhanih i pečenih lignji, uz domaći pečeni krumpir.',
        price: '€18.50',
      },
      {
        nameEn: 'Stuffed Calamari with Shrimp, Sun-Dried Cherry Tomatoes & Grana Padano',
        nameHr: 'Punjene lignje s kozicama, sušenim cherry rajčicama i Grana Padanom',
        descriptionEn: 'Special house recipe, with homemade roasted potatoes.',
        descriptionHr: 'Posebni recept kuće, uz domaći pečeni krumpir.',
        price: '€19.90',
      },
      {
        nameEn: 'Tuna Steak with Swiss Chard & Potatoes',
        nameHr: 'Tuna steak s blitvom i krumpirom',
        descriptionEn: 'With Trieste-style garlic sauce.',
        descriptionHr: 'S tršćanskim umakom od češnjaka.',
        price: '€24.90',
      },
      {
        nameEn: 'Seafood Plate for 4',
        nameHr: 'Riblja plata za 4',
        descriptionEn: 'Generous Adriatic platter: 2 tuna steaks, 2 sea bream fillets, 2 sea bass fillets, shrimp croquettes and crispy hake fillet, with homemade potatoes and Swiss chard.',
        descriptionHr: 'Bogata jadranska plata: 2 tuna steaka, 2 fileta orade, 2 fileta brancina, kroketi od kozica i hrskavi filet oslića, uz domaći krumpir i blitvu.',
        price: '€99.00',
      },
    ],
  },
  {
    id: 'cold-appetizers',
    nameEn: 'Cold Appetizers',
    nameHr: 'Hladna predjela',
    items: [
      {
        nameEn: 'Cold Tomato Soup',
        nameHr: 'Hladna juha od rajčice',
        descriptionEn: 'Cold homemade tomato and basil soup, served in a glass.',
        descriptionHr: 'Hladna domaća juha od rajčice i bosiljka, servirana u čaši.',
        price: '€7.50',
      },
      {
        nameEn: 'Beef Tartare',
        nameHr: 'Goveđi tartar',
        descriptionEn: 'With caper and anchovy sauce, pickles and mustard, accompanied by butter, arugula and bread.',
        descriptionHr: 'S umakom od kapara i inćuna, kiselim krastavcima i senfom, uz maslac, rukolu i kruh.',
        price: '€14.90',
        priceAlt: 'for 2 / za 2 osobe €28.00',
      },
      {
        nameEn: 'Drniš & Istrian Platter',
        nameHr: 'Drniš & istarska plata',
        descriptionEn: 'Drniš prosciutto, Fajman cheeses and tapenade.',
        descriptionHr: 'Drniški pršut, Fajman sirevi i tapenade.',
        price: '€11.90',
      },
      {
        nameEn: 'Istrian Platter',
        nameHr: 'Istarska plata',
        descriptionEn: 'Selection of three cheeses with honey and ricotta infused with Aura Teranino.',
        descriptionHr: 'Izbor tri sira s medom i ricottom prožetom Aura Teraninom.',
        price: '€11.90',
      },
      {
        nameEn: 'Premium Drniš & Istrian Platter',
        nameHr: 'Premium Drniš & istarska plata',
        descriptionEn: 'Drniš prosciutto, Istrian cheeses, tapenade, homemade focaccia and fresh fruit.',
        descriptionHr: 'Drniški pršut, istarski sirevi, tapenade, domaća focaccia i svježe voće.',
        price: '€36.00',
      },
      {
        nameEn: 'Cod Spread & Focaccia',
        nameHr: 'Bakalar & focaccia',
        descriptionEn: 'Creamy cod spread finished with olive oil and capers, with homemade focaccia.',
        descriptionHr: 'Kremasti namaz od bakalara s maslinovim uljem i kaparima, uz domaću focacciu.',
        price: '€11.50',
      },
    ],
  },
  {
    id: 'hot-appetizers',
    nameEn: 'Hot Appetizers',
    nameHr: 'Topla predjela',
    items: [
      {
        nameEn: 'Creamy Porcini & Wild Mushroom Soup',
        nameHr: 'Krem juha od vrganja i mixa gljiva',
        descriptionEn: '',
        descriptionHr: '',
        price: '€6.50',
      },
      {
        nameEn: 'Adriatic Shrimp Croquettes',
        nameHr: 'Kroketi od kozica',
        descriptionEn: 'Made with Adriatic shrimp and sun-dried tomatoes, with smoked sweet potato cream and lime.',
        descriptionHr: 'Od jadranskih kozica i sušenih rajčica, s dimljenom kremom od batata i limetom.',
        price: '€13.50',
      },
      {
        nameEn: 'Baked Pie with Mushrooms',
        nameHr: 'Tortica s gljivama',
        descriptionEn: 'Filled with mushrooms and Parmigiano, with a fresh mini salad.',
        descriptionHr: 'Punjena gljivama i Parmigianom, uz svježu mini salatu.',
        price: '€12.50',
      },
      {
        nameEn: 'Baked Štrukli',
        nameHr: 'Zapečeni štrukli',
        descriptionEn: 'Hand-stretched dough filled with fresh cheese and baked with cream.',
        descriptionHr: 'Ručno razvučeno tijesto punjeno svježim sirom i zapečeno s vrhnjem.',
        price: '€10.90',
        priceAlt: 'Mini €6.90',
      },
      {
        nameEn: 'Štrukli Add-ons',
        nameHr: 'Dodaci za štrukle',
        descriptionEn: 'Mushrooms · Prosciutto & cheese · Pesto & cherry tomatoes',
        descriptionHr: 'Gljive · Pršut i sir · Pesto i cherry rajčice',
        price: '€3.50',
        priceAlt: 'Mini €2.00',
        isAddOn: true,
      },
    ],
  },
  {
    id: 'salads',
    nameEn: 'Salads',
    nameHr: 'Salate',
    items: [
      {
        nameEn: 'Arugula & Cherry Tomatoes',
        nameHr: 'Rikola i cherry rajčice',
        descriptionEn: 'Fresh arugula with cherry tomatoes.',
        descriptionHr: 'Svježa rikola s cherry rajčicama.',
        price: '€5.90',
      },
      {
        nameEn: 'Caprese & Pesto',
        nameHr: 'Caprese salata s pestom',
        descriptionEn: 'Fresh mozzarella, tomatoes and basil pesto.',
        descriptionHr: 'Svježa mozzarella, rajčice i pesto od bosiljka.',
        price: '€8.50',
      },
      {
        nameEn: 'Caesar Salad',
        nameHr: 'Cezar salata',
        descriptionEn: 'With shrimp or chicken, herb croutons, Parmigiano shavings.',
        descriptionHr: 'S kozicama ili piletinom, začinskim krutonima, listićima Parmigiana.',
        price: '€16.50',
      },
      {
        nameEn: 'Creamy Burrata',
        nameHr: 'Kremasta burrata',
        descriptionEn: 'With fresh tomatoes, basil pesto, basil leaves, roasted pine nuts.',
        descriptionHr: 'Sa svježim rajčicama, pesto od bosiljka, listićima bosiljka, prženim pinjolima.',
        price: '€14.90',
      },
      {
        nameEn: 'Mediterranean Salad',
        nameHr: 'Mediteranska salata',
        descriptionEn: 'Tomatoes, cucumbers, onions and feta with olive oil dressing.',
        descriptionHr: 'Rajčice, krastavci, luk i feta sir s prelivom od maslinovog ulja.',
        price: '€6.50',
      },
      {
        nameEn: 'Mixed Seasonal Salad',
        nameHr: 'Miješana sezonska salata',
        descriptionEn: '',
        descriptionHr: '',
        price: '€5.90',
      },
    ],
  },
  {
    id: 'kids',
    nameEn: 'Kids Menu',
    nameHr: 'Dječji meni',
    items: [
      {
        nameEn: 'Home-Made Crispy Chicken Fingers',
        nameHr: 'Domaći hrskavi pileći prutići',
        descriptionEn: 'With fries.',
        descriptionHr: 'S pomfritom.',
        price: '€8.50',
      },
      {
        nameEn: 'Sea Bass Fillet with Swiss Chard & Fries',
        nameHr: 'File brancina s blitvom i pomfrit',
        descriptionEn: '',
        descriptionHr: '',
        price: '€11.00',
      },
      {
        nameEn: 'Crispy Fish Fillet & Fries',
        nameHr: 'Hrskavi riblji filet i krumpirići',
        descriptionEn: 'With homemade potatoes.',
        descriptionHr: 'S domaćim krumpirićima.',
        price: '€8.90',
      },
      {
        nameEn: 'Ham & Cheese Pinsa',
        nameHr: 'Pinsa sa šunkom i sirom',
        descriptionEn: 'Traditional Roman-style pinsa with ham and melted cheese.',
        descriptionHr: 'Tradicionalna rimska pinsa sa šunkom i rastopljenim sirom.',
        price: '€11.50',
      },
    ],
  },
  {
    id: 'sides',
    nameEn: 'Sides',
    nameHr: 'Prilozi',
    items: [
      {
        nameEn: 'Homemade Focaccia',
        nameHr: 'Domaća focaccia',
        descriptionEn: '',
        descriptionHr: '',
        price: '€4.00',
      },
      {
        nameEn: 'Olives',
        nameHr: 'Masline',
        descriptionEn: '',
        descriptionHr: '',
        price: '€4.00',
      },
    ],
  },
  {
    id: 'desserts',
    nameEn: 'Desserts',
    nameHr: 'Deserti',
    introEn: 'All our desserts are homemade and freshly prepared with carefully selected ingredients.',
    introHr: 'Svi naši deserti su domaći i svježe pripremljeni od pažljivo odabranih sastojaka.',
    items: [
      {
        nameEn: 'Homemade Classic Tiramisu',
        nameHr: 'Domaći klasični tiramisu',
        descriptionEn: 'Rich mascarpone cream and coffee aroma.',
        descriptionHr: 'Bogata mascarpone krema i aroma kave.',
        price: '€5.50',
      },
      {
        nameEn: 'Homemade Lino Lada White Tiramisu',
        nameHr: 'Domaći tiramisu s Lino Ladom White',
        descriptionEn: 'Creamy tiramisu with Lino Lada White spread.',
        descriptionHr: 'Kremasti tiramisu s namazom Lino Lada White.',
        price: '€6.50',
      },
      {
        nameEn: 'Pistachio Cheesecake',
        nameHr: 'Pistacio cheesecake',
        descriptionEn: 'Creamy with rich flavor and delicate texture.',
        descriptionHr: 'Kremast s bogatim okusom i nježnom teksturom.',
        price: '€6.90',
      },
      {
        nameEn: 'Homemade Raspberry Tiramisu',
        nameHr: 'Domaći tiramisu s malinama',
        descriptionEn: 'Delicate tiramisu with fresh raspberry flavor.',
        descriptionHr: 'Nježni tiramisu sa svježim okusom malina.',
        price: '€6.50',
      },
      {
        nameEn: 'Crème Brûlée',
        nameHr: 'Crème brûlée',
        descriptionEn: 'Classic, with silky custard and caramelized sugar crust.',
        descriptionHr: 'Klasični, sa svilenkastim kremom i karameliziranom korom od šećera.',
        price: '€6.00',
      },
    ],
  },
];

// ═══ SIGNATURE COCKTAILS ═══
export const signatureCocktails = [
  {
    number: 1,
    name: 'The Golden Žlahtina',
    price: '€8',
    ingredientsEn: 'Zlatna Žlahtina white wine, blueberry, honey, mint, lime',
    ingredientsHr: 'Zlatna Žlahtina bijelo vino, borovnica, med, menta, limeta',
    storyEn: "Inspired by Vrbnik's wine heritage, lifted by house-made blueberry liqueur from the owner's own blueberry harvest.",
    storyHr: 'Inspiriran vinskom baštinom Vrbnika, obogaćen domaćim likerom od borovnica iz vlasnikove berbe.',
  },
  {
    number: 2,
    name: 'Vrbnik Breeze',
    price: '€9.50',
    ingredientsEn: 'Lavender, lemon, tangerine, prosecco, soda',
    ingredientsHr: 'Lavanda, limun, mandarina, prosecco, soda',
    storyEn: "Local lavender and sun-ripened citrus capture the fresh sea breeze of Vrbnik's stone streets.",
    storyHr: 'Lokalna lavanda i suncem dozreli citrusi dočaravaju svježi morski povjetarac kamenih ulica Vrbnika.',
  },
  {
    number: 3,
    name: 'Bloom & Seek',
    price: '€9.50',
    ingredientsEn: 'Vodka, basil, lemon, rose, soda',
    ingredientsHr: 'Votka, bosiljak, limun, ruža, soda',
    storyEn: 'Rose, basil and lemon echo the village tradition of hidden flowers, creating a fresh and intriguing sip.',
    storyHr: 'Ruža, bosiljak i limun odjekuju seoskom tradicijom skrivenog cvijeća, stvarajući osvježavajući i intrigantan gutljaj.',
  },
  {
    number: 4,
    name: 'Stone & Olive',
    price: '€12.50',
    ingredientsEn: 'Tanqueray gin, Campari, Antica Formula, olive oil, rosemary',
    ingredientsHr: 'Tanqueray gin, Campari, Antica Formula, maslinovo ulje, ružmarin',
    storyEn: "An elevated Negroni with olive oil and rosemary, inspired by Krk's sun, stone and ancient olive trees.",
    storyHr: 'Uzvišeni Negroni s maslinovim uljem i ružmarinom, inspiriran suncem Krka, kamenom i drevnim maslinama.',
  },
  {
    number: 5,
    name: 'Drniški SUNsigot',
    price: '€9',
    ingredientsEn: 'Jameson, lemon, sugar, foamer, Sansigot (Katunar winery) red wine',
    ingredientsHr: 'Jameson, limun, šećer, pjenušac, Sansigot (vinarija Katunar) crno vino',
    storyEn: 'Jameson and lemon layered with local red wine, finished with Drniš prosciutto in the spirit of a Vrbnik sunset.',
    storyHr: 'Jameson i limun slojeviti s lokalnim crnim vinom, dovršeni drniškim pršutom u duhu vrbničkog zalaska sunca.',
  },
];

// ═══ REVIEWS ═══
export const reviews = [
  {
    name: 'Kaiser',
    textEn: 'We come back to Vrbnik every year on holiday and Vareli is always a must-visit. This time the new stuffed calamari really stood out — absolutely memorable.',
    textHr: 'Svake godine se vraćamo u Vrbnik na odmor i Vareli je uvijek obavezan posjet. Ovaj put nas je oduševio novi punjeni kalamar — jednostavno nezaboravan.',
  },
  {
    name: 'Jan Hrad',
    badgeEn: 'Local Guide',
    badgeHr: 'Lokalni vodič',
    textEn: 'Great variety — from fresh fish and salads to grilled meat. Excellent cocktails and a good wine selection. The live music makes the evening truly special.',
    textHr: 'Odlična raznolikost — od svježe ribe i salata do mesa s roštilja. Izvrsni kokteli i dobar izbor vina. Živa glazba čini večer doista posebnom.',
  },
  {
    name: 'Evgenija Gorgieva',
    textEn: 'We stumbled upon Vrbnik by chance, drawn in by the atmosphere. We ordered the calamari and absolutely loved them — what a wonderful surprise.',
    textHr: 'Slučajno smo naišli na Vrbnik, privučeni atmosferom. Naručili smo kalamari i bili oduševljeni — kakvo divno iznenađenje.',
  },
];
