// Comprehensive Travel Data for Mumbai & Uttarakhand Tour Operator

export const HERO_SLIDES = [
  {
    id: "slide-uttarakhand-1",
    region: "Uttarakhand",
    title: "UTTARAKHAND",
    highlight: "Devbhoomi Himalayas",
    ghostText: "DEVBHOOMI",
    tagline: "Sacred Rivers, Glacial Peaks & Mountain Soul",
    description: "Immerse yourself in the majestic Garhwal and Kumaon Himalayas. From the thunderous rapids of Rishikesh and high-altitude sanctums of Kedarnath to the mist-kissed lakes of Nainital and snowfields of Auli.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85",
    accentColor: "#38bdf8",
    rating: 4.9,
    reviews: 1420,
    startingPrice: 14999,
    duration: "6 Days / 5 Nights",
    bestSeason: "March - June & Sept - Nov",
    linkedPackageId: "pkg-kedarnath-badrinath"
  },
  {
    id: "slide-mumbai-1",
    region: "Mumbai",
    title: "MUMBAI",
    highlight: "The City of Dreams",
    ghostText: "MAXIMUM CITY",
    tagline: "Colonial Grandeur, Arabian Sea Sunsets & Bustling Heritage",
    description: "Discover India's vibrant financial and cultural capital. Marvel at Gothic Victorian architecture, stroll the iconic Marine Drive Queen's Necklace, sail to Elephanta Caves, and savour authentic coastal Maharashtra delicacies.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2000&q=85",
    accentColor: "#f59e0b",
    rating: 4.8,
    reviews: 980,
    startingPrice: 6499,
    duration: "3 Days / 2 Nights",
    bestSeason: "October - March",
    linkedPackageId: "pkg-mumbai-heritage-coastal"
  },
  {
    id: "slide-rishikesh-1",
    region: "Uttarakhand",
    title: "RISHIKESH",
    highlight: "Yoga Capital & White Waters",
    ghostText: "GANGA YATRA",
    tagline: "White Water Rafting, Riverside Camping & Evening Ganga Aarti",
    description: "Experience the adrenaline of Grade IV river rafting on the holy Ganges, cliff jumping, bungee expeditions, and the divine tranquility of Parmarth Niketan evening Aarti amid ringing bells and chanting.",
    image: "https://images.unsplash.com/photo-1620021216304-4f8bc1ab9c8d?auto=format&fit=crop&w=2000&q=85",
    accentColor: "#10b981",
    rating: 4.9,
    reviews: 1120,
    startingPrice: 7999,
    duration: "4 Days / 3 Nights",
    bestSeason: "September - May",
    linkedPackageId: "pkg-rishikesh-adventure"
  },
  {
    id: "slide-auli-1",
    region: "Uttarakhand",
    title: "AULI & CHOPTA",
    highlight: "Skiing & Switzerland of India",
    ghostText: "WHITE MEADOWS",
    tagline: "Panoramic Nanda Devi Views, Alpine Treks & Snowy Slopes",
    description: "Glide on the highest ropeway in Asia overlooking Nanda Devi and Trishul peaks. Trek through rhododendron forests to the highest Shiva temple in the world at Tungnath and Chandrashila summit.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=2000&q=85",
    accentColor: "#60a5fa",
    rating: 4.9,
    reviews: 740,
    startingPrice: 18499,
    duration: "6 Days / 5 Nights",
    bestSeason: "Dec - Feb (Snow) & April - June",
    linkedPackageId: "pkg-auli-chopta-trek"
  },
  {
    id: "slide-mumbai-getaway-1",
    region: "Mumbai & Beyond",
    title: "LONAVALA & ALIBAUG",
    highlight: "Sahyadri & Coastal Escapes",
    ghostText: "SAHYADRI ESCAPE",
    tagline: "Forts, Waterfalls, Beachfront Villas & Konkan Culture",
    description: "Handcrafted weekend getaways just 2 to 3 hours from Mumbai. Relax on sun-kissed beaches in Alibaug with private speedboat transfers from Gateway, or explore misty Sahyadri valleys and historic forts in Lonavala.",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=2000&q=85",
    accentColor: "#fb923c",
    rating: 4.7,
    reviews: 860,
    startingPrice: 5999,
    duration: "2 Days / 1 Night",
    bestSeason: "July - September (Monsoon) & Oct - March",
    linkedPackageId: "pkg-alibaug-lonavala-retreat"
  },
  {
    id: "slide-corbett-1",
    region: "Uttarakhand",
    title: "JIM CORBETT",
    highlight: "Royal Bengal Tiger Safari",
    ghostText: "WILD CORBETT",
    tagline: "Untamed Wilderness, Dense Sal Forests & Luxury Forest Lodges",
    description: "Venture deep into India's oldest national park on open-top 4x4 Jeep safaris in search of the elusive Royal Bengal Tiger, wild Asian elephants, and over 600 exotic bird species along the Ramganga river.",
    image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=2000&q=85",
    accentColor: "#eab308",
    rating: 4.8,
    reviews: 910,
    startingPrice: 12999,
    duration: "3 Days / 2 Nights",
    bestSeason: "November - June",
    linkedPackageId: "pkg-jim-corbett-safari"
  }
];

export const POPULAR_LOCATIONS = [
  {
    id: "loc-kedarnath",
    name: "Kedarnath Temple",
    state: "Uttarakhand",
    category: "Spiritual & Trek",
    tag: "Char Dham Jyotirlinga",
    altitude: "3,583 m",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    packagesCount: 4,
    description: "One of the twelve revered Jyotirlingas of Lord Shiva, nestled against the magnificent Kedarnath peak in the Garhwal Himalayas."
  },
  {
    id: "loc-marine-drive",
    name: "Marine Drive & Gateway",
    state: "Mumbai",
    category: "Heritage & City",
    tag: "Queen's Necklace",
    altitude: "Sea Level",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    packagesCount: 3,
    description: "Iconic Arabian Sea promenade lit up at dusk like a string of pearls, facing the legendary Gateway of India and Taj Mahal Palace hotel."
  },
  {
    id: "loc-rishikesh",
    name: "Rishikesh & Ganga",
    state: "Uttarakhand",
    category: "Adventure & Spiritual",
    tag: "Yoga Capital",
    altitude: "340 m",
    image: "https://images.unsplash.com/photo-1620021216304-4f8bc1ab9c8d?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    packagesCount: 5,
    description: "Where emerald Himalayan waters meet ancient yoga ashrams, adrenaline-pumping river rafting, and sunset riverbank aartis."
  },
  {
    id: "loc-nainital",
    name: "Nainital Lake & Mussoorie",
    state: "Uttarakhand",
    category: "Hill Station & Romantic",
    tag: "Queen of the Hills",
    altitude: "2,084 m",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    packagesCount: 4,
    description: "Scenic emerald lake surrounded by seven hills in Nainital, paired with the cascading waterfalls and Mall Road vistas of Mussoorie."
  },
  {
    id: "loc-elephanta",
    name: "Elephanta Caves & Harbour",
    state: "Mumbai",
    category: "UNESCO Heritage",
    tag: "6th Century Sculptures",
    altitude: "Sea Level",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    packagesCount: 2,
    description: "Ferry cruise from Mumbai harbour to Gharapuri Island featuring rock-cut cave temples dedicated to Shiva including the monumental Trimurti."
  },
  {
    id: "loc-auli",
    name: "Auli Snow Meadows",
    state: "Uttarakhand",
    category: "Snow & Adventure",
    tag: "Himalayan Ski Resort",
    altitude: "2,800 m",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    packagesCount: 3,
    description: "India's premier skiing destination surrounded by coniferous and oak forests with breathtaking panoramas of Mt. Nanda Devi."
  },
  {
    id: "loc-jimcorbett",
    name: "Jim Corbett National Park",
    state: "Uttarakhand",
    category: "Wildlife & Safari",
    tag: "Tiger Reserve",
    altitude: "400 m",
    image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    packagesCount: 3,
    description: "Dense sal forests and grasslands sheltering the majestic Royal Bengal tiger, wild elephants, sambar deer, and rare bird species."
  },
  {
    id: "loc-alibaug",
    name: "Alibaug & Coastal Forts",
    state: "Mumbai / Maharashtra",
    category: "Weekend Beach",
    tag: "Mini Goa of Maharashtra",
    altitude: "Sea Level",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    packagesCount: 2,
    description: "Sun-drenched beaches, Kolaba sea fort accessible at low tide, coconut groves, and mouth-watering Malvani seafood just 45 mins by speed boat from Mumbai."
  }
];

export const TOUR_PACKAGES = [
  {
    id: "pkg-kedarnath-badrinath",
    title: "Kedarnath & Badrinath Sacred Do Dham Yatra",
    subtitle: "Complete Spiritual Pilgrimage with VIP Darshan & Helicopter/Pony Option",
    destination: "Kedarnath & Badrinath",
    state: "Uttarakhand",
    category: "Spiritual",
    badge: "Most Booked",
    price: 18499,
    originalPrice: 22999,
    discount: "20% OFF",
    duration: "6 Days / 5 Nights",
    daysCount: 6,
    nightsCount: 5,
    rating: 4.95,
    reviewsCount: 342,
    startingFrom: "Ex-Haridwar / Ex-Dehradun (Flight coordination from Mumbai included)",
    groupType: "Private / Small Group",
    difficulty: "Moderate to Challenging",
    bestSeason: "May - June & Sept - October",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620021216304-4f8bc1ab9c8d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Embark on an unforgettable pilgrimage into the high Himalayas. We provide comfortable sanitised transport, verified deluxe hotel stays, biometric yatra pass support, oxygen assistance on high terrain, and seamless coordination whether you travel from Mumbai or Delhi.",
    highlights: [
      "Guaranteed Yatra registration & biometric token coordination",
      "Darshan at Kedarnath Jyotirlinga surrounded by snow peaks",
      "Scenic drive along Devprayag (Sangam of Alaknanda & Bhagirathi)",
      "Badrinath Temple VIP Darshan & holy bath in Tapt Kund",
      "Visit Mana Village (Last Indian Village before Tibet border) & Bheem Pul",
      "Comfortable stays in Guptkashi, Kedarnath Base & Badrinath/Joshimath"
    ],
    inclusions: [
      "5 Nights accommodation in sanitized hotels / luxury swiss camps",
      "Daily Morning Breakfast & Delicious Pure Veg Dinners",
      "Private AC Sedan/Innova for entire mountain circuit (AC off on hill drive)",
      "All toll taxes, parking, driver night charges, fuel",
      "Medical first aid kit and portable oxygen cylinder in vehicle",
      "24/7 Mumbai-based travel coordinator on WhatsApp & phone call"
    ],
    exclusions: [
      "Helicopter tickets / Pony / Palki charges (Can be added on request)",
      "Lunch, snacks, and personal temple donation offerings",
      "Airfare/train fare to/from Haridwar/Dehradun (Assistance available)",
      "Travel insurance (Available for ₹499 add-on)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar / Dehradun to Guptkashi (210 km / 7-8 hrs)",
        desc: "Morning pickup from Dehradun Airport (Jolly Grant) or Haridwar station. Scenic journey along the sacred Mandakini river via Devprayag and Rudraprayag confluence. Check into hotel at Guptkashi. Evening at leisure with mountain view."
      },
      {
        day: 2,
        title: "Guptkashi to Sonprayag to Kedarnath Base & Darshan (Trek 16 km / Heli)",
        desc: "Early morning transfer to Sonprayag/Gaurikund. Trek uphill to Kedarnath Temple through breathtaking Himalayan trails, or board helicopter from Phata/Sersi. Check into camp/guest house. Attend evening Aarti at Kedarnath temple."
      },
      {
        day: 3,
        title: "Kedarnath Morning Darshan to Guptkashi / Chopta",
        desc: "Wake up early for the sublime Maha Abhishek Darshan of Lord Shiva. Soak in the morning golden glow over Kedarnath peak. Trek down to Gaurikund, drive back to Guptkashi or Chopta. Rest and dinner."
      },
      {
        day: 4,
        title: "Guptkashi / Chopta to Badrinath (190 km / 7 hrs)",
        desc: "Drive through scenic valleys via Joshimath. Arrive at holy town of Badrinath. Take holy dip at Tapt Kund natural hot springs. Visit Badrinath Temple for evening Aarti. Overnight stay in Badrinath."
      },
      {
        day: 5,
        title: "Badrinath, Mana Village to Rudraprayag / Srinagar",
        desc: "Explore Mana Village (Vyas Gufa, Ganesh Gufa, Saraswati River origin). Start descent towards Rudraprayag / Srinagar. Enjoy panoramic river valley views. Overnight in river-facing resort."
      },
      {
        day: 6,
        title: "Rudraprayag to Rishikesh & Drop to Haridwar / Dehradun",
        desc: "Drive back towards Rishikesh. Visit Ram Jhula and Lakshman Jhula suspension bridges. Evening drop at Dehradun Airport or Haridwar station for flight/train back to Mumbai. Journey ends with divine memories."
      }
    ]
  },
  {
    id: "pkg-mumbai-heritage-coastal",
    title: "Signature South Mumbai Heritage, Art Deco & Elephanta Cruise",
    subtitle: "The Ultimate Royal & Cultural Exploration of Maximum City",
    destination: "Mumbai City & Harbour",
    state: "Mumbai",
    category: "Heritage",
    badge: "Bestseller",
    price: 7499,
    originalPrice: 9999,
    discount: "25% OFF",
    duration: "3 Days / 2 Nights",
    daysCount: 3,
    nightsCount: 2,
    rating: 4.88,
    reviewsCount: 285,
    startingFrom: "Ex-Mumbai (Pickup from Airport / Railway Station / Hotel)",
    groupType: "Private Chauffeur-Driven",
    difficulty: "Easy / Leisure",
    bestSeason: "Round the Year (Best: Oct - March)",
    images: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Crafted specially for visitors wanting to understand the soul of Mumbai. Experience the contrasting grandeur of colonial British architecture, Art Deco promenades, UNESCO World Heritage sites, royal Arabian sea cruises, and iconic street culinary walks.",
    highlights: [
      "Private guided walk of UNESCO World Heritage CSMT Victoria Terminus",
      "Arabian sea ferry cruise to 6th-century Elephanta Island rock caves",
      "Evening sunset drive along Queen's Necklace (Marine Drive) to Bandra Fort",
      "Visit Gateway of India, Taj Mahal Palace Hotel & Kala Ghoda Arts Precinct",
      "Tasting tour of Mumbai street food classics (Chowpatty Pav Bhaji, Kulfi, Irani Chai)",
      "Drive across the architectural marvel Rajiv Gandhi Bandra-Worli Sea Link"
    ],
    inclusions: [
      "2 Nights stay in handpicked 4-star South Mumbai / Bandra boutique hotel",
      "Daily lavish buffet breakfast",
      "Dedicated air-conditioned private vehicle with professional chauffeur",
      "Elephanta ferry luxury upper deck tickets & island toy train ticket",
      "Certified English/Hindi heritage walking tour guide for Half-day",
      "Packaged drinking water and all parking/toll fees"
    ],
    exclusions: [
      "Personal shopping and museum entry camera fees",
      "Dinners and alcoholic beverages",
      "Gratuities for driver and guide"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Mumbai, Gateway of India & Queen's Necklace Sunset",
        desc: "Warm welcome upon arrival at Mumbai airport or CSMT station. Check in to your hotel. Afternoon visit to Gateway of India, photograph the legendary Taj Mahal Palace, explore the colonial Colaba Causeway, and watch the sun sink into the Arabian sea along Marine Drive."
      },
      {
        day: 2,
        title: "Elephanta Island Ferry Cruise & UNESCO Victorian Gothic Trail",
        desc: "Morning cruise across Mumbai harbor to Elephanta Caves to admire the majestic 20-foot Trimurti sculpture. Return to Colaba for lunch at a historic Irani cafe. Afternoon walking trail through Kala Ghoda, Flora Fountain, Bombay High Court, and CSMT terminus."
      },
      {
        day: 3,
        title: "Dhobi Ghat, Bandra-Worli Sea Link, Bollywood Sights & Departure",
        desc: "Morning visit to the world's largest outdoor laundry at Mahalaxmi Dhobi Ghat. Drive across the iconic 8-lane Bandra-Worli Sea Link cable-stayed bridge. Explore trendy Bandra, Mount Mary Basilica, Bandstand (outside celebrities' homes), and drop at airport."
      }
    ]
  },
  {
    id: "pkg-rishikesh-adventure",
    title: "Rishikesh Thrills, Riverside Camping & Ganga Aarti Escape",
    subtitle: "Grade IV White Water Rafting, Bungee, Cliff Jump & Yoga Retreat",
    destination: "Rishikesh & Shivpuri",
    state: "Uttarakhand",
    category: "Adventure",
    badge: "Trending",
    price: 8999,
    originalPrice: 11499,
    discount: "22% OFF",
    duration: "4 Days / 3 Nights",
    daysCount: 4,
    nightsCount: 3,
    rating: 4.92,
    reviewsCount: 418,
    startingFrom: "Ex-Dehradun / Ex-Haridwar (Direct flights from Mumbai)",
    groupType: "Small Group / Friends & Couples",
    difficulty: "Moderate / Active",
    bestSeason: "September to June",
    images: [
      "https://images.unsplash.com/photo-1620021216304-4f8bc1ab9c8d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "The quintessential Himalayan adventure trip. Stay in riverside luxury camps nestled by mountain streams in Shivpuri. Tackle 16-24 km rapids like Roller Coaster and Golf Course with international certified river guides, followed by evening riverside bonfires and divine Ganga Aarti.",
    highlights: [
      "16 km thrilling white water rafting expedition with cliff jumping & body surfing",
      "Riverside luxury Swiss camps with swimming pool & mountain views",
      "Evening Parmarth Niketan Ganga Aarti with VIP seated arrangements",
      "Guided walk across iconic Lakshman Jhula, Ram Jhula & Beatles Ashram",
      "Bonfire evenings with live barbecue and acoustic mountain music",
      "Optional high-adrenaline Bungy Jump (83m) at Jumpin Heights"
    ],
    inclusions: [
      "3 Nights stay (2 Nights luxury camp in Shivpuri + 1 Night boutique resort in Tapovan)",
      "All meals: 3 Breakfasts, 2 Lunches & 3 Dinners with evening snacks",
      "16 KM River Rafting with all imported safety gear & certified river captains",
      "Private AC transport for local transfers and sightseeing",
      "Bonfire & music session every evening at the camp",
      "Complimentary jungle hike to secret Patna Waterfall"
    ],
    exclusions: [
      "Bungy Jump, Giant Swing, Flying Fox tickets (Add-ons available)",
      "Personal river video clip from GoPro camera",
      "Transportation to Dehradun from Mumbai"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Rishikesh / Shivpuri Camp Check-in",
        desc: "Pickup from Dehradun airport / Haridwar railway station. Drive into the picturesque valley of Shivpuri. Welcome drinks and check-in to riverside luxury Swiss tent. Enjoy volleyball, pool, evening bonfire with music, and delicious dinner."
      },
      {
        day: 2,
        title: "White Water Rafting (Marine Drive to Shivpuri / NIM Beach)",
        desc: "Gear up with lifejackets and helmets. Briefing by expert river guides. Navigate world-famous rapids: Roller Coaster, Golf Course, Clubhouse, and Cash Flow. Experience cliff jumping from a 25-ft rock and body surfing in cool emerald currents. Return to camp for warm lunch."
      },
      {
        day: 3,
        title: "Beatles Ashram, Secret Waterfall & Parmarth Niketan Ganga Aarti",
        desc: "Morning yoga session by the river. Short jungle trek to Patna Waterfall. Head to Rishikesh town, visit the graffiti-covered Beatles Ashram (Chaurasi Kutia). Sunset at Parmarth Niketan for the world-renowned Ganga Aarti with Vedic chants."
      },
      {
        day: 4,
        title: "Cafes of Tapovan & Departure",
        desc: "Leisurely breakfast at German Bakery or Little Buddha Cafe overlooking the river. Souvenir shopping for brass artifacts, crystal malas, and organic teas. Transfer to Dehradun airport / Haridwar station for return to Mumbai."
      }
    ]
  },
  {
    id: "pkg-nainital-mussoorie-hills",
    title: "Best of Uttarakhand: Nainital, Kausani & Mussoorie Queen Trail",
    subtitle: "Emerald Lakes, Colonial Hills & Majestic Himalayan Peaks",
    destination: "Nainital, Corbett, Mussoorie",
    state: "Uttarakhand",
    category: "Family & Honeymoon",
    badge: "Scenic Favorite",
    price: 15499,
    originalPrice: 19999,
    discount: "22% OFF",
    duration: "7 Days / 6 Nights",
    daysCount: 7,
    nightsCount: 6,
    rating: 4.89,
    reviewsCount: 310,
    startingFrom: "Ex-Delhi / Ex-Dehradun / Ex-Kathgodam (Mumbai flight assistance)",
    groupType: "Private Family Tour",
    difficulty: "Easy / Relaxed",
    bestSeason: "March - July & Oct - February",
    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "The most popular holiday package for families and honeymooners from Mumbai seeking refreshing mountain air. Cruise on Naini Lake, explore the misty heights of Mussoorie, witness 300 km Himalayan vistas from Kausani, and spot wildlife in Jim Corbett.",
    highlights: [
      "Row boat cruise on emerald green Naini Lake & aerial ropeway to Snow View Point",
      "Visit Kempty Falls, Cloud's End and Gun Hill in Mussoorie",
      "Jeep Safari into the buffer zone of Jim Corbett Tiger Reserve",
      "Sunset views of Trishul, Nanda Devi and Panchachuli peaks from Kausani",
      "Stay in scenic valley-facing hillside boutique resorts",
      "Strolls along the vibrant colonial Mall Roads of Nainital and Mussoorie"
    ],
    inclusions: [
      "6 Nights deluxe accommodation with scenic views",
      "Daily breakfast and dinner throughout the tour",
      "Dedicated AC vehicle for all transfers, sightseeing and inter-city drives",
      "Naini lake boating tickets included",
      "Corbett Open Jeep Safari permit & guide charges",
      "Driver allowances, tolls, mountain tax and interstate permits"
    ],
    exclusions: [
      "Lunch, snacks, and monument entry tickets",
      "Pony rides and personal shopping expenses",
      "Train/flight fares"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi / Dehradun to Nainital (Drive)",
        desc: "Pickup and scenic drive ascending into the Kumaon hills. Arrive in Nainital and check into your lake-view resort. Evening stroll along the Mall Road and boating on Naini Lake."
      },
      {
        day: 2,
        title: "Nainital Lake Tour & Sightseeing",
        desc: "Explore Bhimtal, Sattal, and Naukuchiatal. Visit Naina Devi Temple and take the cable car to Snow View for sweeping views of Himalayan snow peaks."
      },
      {
        day: 3,
        title: "Nainital to Kausani via Ranikhet (115 km)",
        desc: "Drive through pine-scented forests via Ranikhet (Chaubatia Apple Orchards & Golf Course). Reach Kausani, often called the 'Switzerland of India'. Watch sunset over the Nanda Devi range."
      },
      {
        day: 4,
        title: "Kausani to Jim Corbett National Park (160 km)",
        desc: "Witness sunrise over the Himalayas. Drive to Jim Corbett Tiger Reserve. Check into luxury forest resort bordering Kosi river. Evening pool relaxation and nature walk."
      },
      {
        day: 5,
        title: "Morning Jeep Safari & Drive to Mussoorie",
        desc: "Early dawn open-top Jeep safari into Corbett's wilderness. Return for hearty breakfast, then drive towards the Queen of the Hills, Mussoorie. Arrive by evening."
      },
      {
        day: 6,
        title: "Mussoorie Scenic Highlights & Mall Road",
        desc: "Visit the roaring Kempty Falls, scenic Company Garden, and Cloud's End. Afternoon stroll on Camel's Back Road and vintage cafes along Mussoorie Mall Road."
      },
      {
        day: 7,
        title: "Mussoorie to Dehradun Airport Drop",
        desc: "Breakfast with valley view. Descend to Dehradun (Jolly Grant Airport) for return direct flight back to Mumbai."
      }
    ]
  },
  {
    id: "pkg-auli-chopta-trek",
    title: "Auli Snow & Chopta Chandrashila Himalayan Trek",
    subtitle: "Asia's Longest Cable Car, Alpine Meadows & Highest Shiva Temple",
    destination: "Auli, Chopta, Joshimath",
    state: "Uttarakhand",
    category: "Adventure",
    badge: "Himalayan Gem",
    price: 19999,
    originalPrice: 24999,
    discount: "20% OFF",
    duration: "6 Days / 5 Nights",
    daysCount: 6,
    nightsCount: 5,
    rating: 4.96,
    reviewsCount: 194,
    startingFrom: "Ex-Rishikesh / Ex-Dehradun",
    groupType: "Small Group / Guided Trek",
    difficulty: "Moderate",
    bestSeason: "Nov - March (Snow) & April - June (Flowers)",
    images: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620021216304-4f8bc1ab9c8d?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "A dream expedition for snow lovers, hikers, and landscape photographers. Ride the 4 km cable car to Auli's glistening ski slopes overlooking Mt. Nanda Devi, followed by an exhilarating trek to Tungnath (3,680 m) and Chandrashila summit (4,000 m).",
    highlights: [
      "Ride Asia's second longest ropeway from Joshimath to Auli (4 km)",
      "Unmatched 360-degree panorama of Nanda Devi, Kamet, Dunagiri & Hathi Parbat",
      "Trek through rhododendron forests to Tungnath, the highest Shiva temple on earth",
      "Chandrashila peak summit (13,100 ft) with panoramic sunrise",
      "Visit the tranquil alpine lake of Deoriatal reflecting Chaukhamba peaks",
      "Cozy stays in warm mountain cottages with traditional Garhwali food"
    ],
    inclusions: [
      "5 Nights accommodation in cozy wooden cottages / alpine camps",
      "All meals: Morning tea, breakfast, packed trek lunch, evening snacks & dinner",
      "Certified trek leader, local mountain guide & safety support",
      "Forest department trek permits and camping charges",
      "Private vehicle (Innova/Tempo Traveller) from Rishikesh to Rishikesh",
      "Trekking poles and microspikes/gaiters during snow season"
    ],
    exclusions: [
      "Ski equipment rental and professional ski instructor fees (Add-on)",
      "Ropeway ticket from Joshimath to Auli",
      "Personal porter for luggage backpack"
    ],
    itinerary: [
      {
        day: 1,
        title: "Rishikesh to Sari Village / Deoriatal Base (190 km)",
        desc: "Morning pickup from Rishikesh. Drive through Devprayag and Rudraprayag along the Mandakini river. Arrive at Sari village and short trek (2.5 km) to Deoriatal lake. Sunset view of Chaukhamba reflections in the lake."
      },
      {
        day: 2,
        title: "Chopta & Tungnath - Chandrashila Summit (Trek 8 km return)",
        desc: "Early morning start from Chopta. Trek past dwarf rhododendrons to 1000-year-old Tungnath Temple. Continue climbing to Chandrashila summit (4,000 m) for jaw-dropping views of over 40 Himalayan peaks. Descend back to Chopta."
      },
      {
        day: 3,
        title: "Chopta to Joshimath & Auli",
        desc: "Drive through the picturesque Mandal valley to Joshimath. Board the thrilling cable car up to Auli. Check into resort surrounded by towering snow-clad peaks. Enjoy sunset over Nanda Devi."
      },
      {
        day: 4,
        title: "Auli Exploration, Gorson Bugyal Snow Hike & Skiing",
        desc: "Full day in Auli. Optional beginner ski lessons or snow-shoe hike across the vast meadows of Gorson Bugyal. Visit the artificial lake and capture magical golden hour photography."
      },
      {
        day: 5,
        title: "Auli / Joshimath to Srinagar / Rishikesh",
        desc: "Descend from Auli. Drive along the Alaknanda river back towards the lower foothills. Check into riverside hotel in Srinagar or Rishikesh."
      },
      {
        day: 6,
        title: "Return to Rishikesh / Dehradun Airport Drop",
        desc: "Morning leisure, drive to Dehradun Airport for return flight to Mumbai with unforgettable mountain memories."
      }
    ]
  },
  {
    id: "pkg-alibaug-lonavala-retreat",
    title: "Mumbai Coastal & Sahyadri Escape: Alibaug & Lonavala",
    subtitle: "Private Speedboat from Gateway, Beachfront Villas & Sahyadri Hills",
    destination: "Alibaug & Lonavala",
    state: "Mumbai",
    category: "Weekend Getaway",
    badge: "Quick Getaway",
    price: 6499,
    originalPrice: 8499,
    discount: "23% OFF",
    duration: "3 Days / 2 Nights",
    daysCount: 3,
    nightsCount: 2,
    rating: 4.82,
    reviewsCount: 176,
    startingFrom: "Ex-Mumbai (Gateway of India / City Center)",
    groupType: "Private Couple / Family",
    difficulty: "Easy / Pure Relaxation",
    bestSeason: "October to June (Also spectacular in Monsoon)",
    images: [
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "The quintessential getaway for Mumbaikars and tourists in Mumbai looking for quick rejuvenation without lengthy travel. Hop on a speedboat from Gateway of India to sunny Alibaug beaches, then head to the breezy misty cliffs and ancient Buddhist rock caves of Lonavala.",
    highlights: [
      "Private or luxury speedboat transfer from Gateway of India to Mandwa",
      "Relax at secluded Kihim and Varsoli beaches with water sports",
      "Explore historic 17th-century Kolaba Sea Fort built by Chhatrapati Shivaji Maharaj",
      "Visit Tiger's Leap, Bhushi Dam & 2000-year-old Karla Caves in Lonavala",
      "Savour famous Lonavala chikki and authentic Konkani coastal fish curries",
      "Stay in boutique pool resort with lush garden surroundings"
    ],
    inclusions: [
      "1 Night beach resort in Alibaug + 1 Night mountain villa in Lonavala",
      "Daily breakfast & 1 beachside candlelit dinner",
      "Speedboat / Ro-Ro car ferry tickets from Mumbai to Alibaug",
      "Private AC car for local transfers and sightseeing throughout",
      "Toll charges on Mumbai-Pune Expressway",
      "All driver allowances and taxes"
    ],
    exclusions: [
      "Water sports activities on beaches (Banana ride, Jet ski available on-site)",
      "Lunch and alcoholic drinks",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Mumbai Gateway of India to Alibaug via Mandwa Speedboat",
        desc: "Meet at Gateway of India. Board express speedboat across Mumbai harbor (45 mins) to Mandwa. Private car transfer to your boutique resort in Alibaug. Afternoon visit to Kolaba Fort in the sea. Sunset walk at Varsoli Beach followed by seafood dinner."
      },
      {
        day: 2,
        title: "Alibaug to Lonavala Hill Station via Scenic Expressway",
        desc: "Breakfast by the pool. Scenic 2-hour drive up the Western Ghats to Lonavala. Check in to mountain view resort. Afternoon visit to Karla & Bhaja rock-cut Buddhist caves, Bushi Dam, and sunset point at Lion's Point. Taste fresh hot chikki."
      },
      {
        day: 3,
        title: "Tiger's Leap, Duke's Nose & Return Drive to Mumbai",
        desc: "Morning visit to Tiger's Leap with 650 m sheer drop into the valley. Drive back along the smooth Mumbai-Pune Expressway. Drop off at your residence or Mumbai Airport by afternoon."
      }
    ]
  },
  {
    id: "pkg-jim-corbett-safari",
    title: "Jim Corbett Tiger Safari & Kosi River Wilderness Lodge",
    subtitle: "Open 4x4 Jeep Safaris, Exotic Birds & Luxury Riverside Stays",
    destination: "Jim Corbett National Park",
    state: "Uttarakhand",
    category: "Wildlife",
    badge: "Wildlife Special",
    price: 13999,
    originalPrice: 17499,
    discount: "20% OFF",
    duration: "3 Days / 2 Nights",
    daysCount: 3,
    nightsCount: 2,
    rating: 4.88,
    reviewsCount: 245,
    startingFrom: "Ex-Delhi / Ex-Dehradun / Ex-Ramnagar (Mumbai flight link)",
    groupType: "Private Jungle Safari",
    difficulty: "Easy",
    bestSeason: "October to June",
    images: [
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Trek into India's oldest tiger reserve nestled at the Himalayan foothills. We handle confirmed government safari permits in prime zones like Bijrani, Jhirna, or Dhela with seasoned wildlife naturalists.",
    highlights: [
      "2 Exclusive 4x4 open-top Gypsy safaris with certified government naturalist",
      "Prime tiger tracking zones with high sighting records",
      "Stay in 4-star riverside jungle resort along the tranquil Kosi river",
      "Visit Corbett Waterfall and heritage home of legendary hunter Jim Corbett",
      "Birdwatching trail identifying over 50+ species including hornbills & kingfishers",
      "Evening wildlife documentary screening with expert Q&A"
    ],
    inclusions: [
      "2 Nights luxury cottage accommodation in Corbett jungle resort",
      "All meals: 2 Breakfasts, 2 Lunches, 2 Dinners (Buffet spread)",
      "2 Jungle Jeep Safaris with official permits, Gypsy & forest guide fee",
      "Private AC vehicle for station/airport pickup and drop",
      "Resort recreational activities (swimming pool, indoor games)",
      "All applicable taxes and park entry fees"
    ],
    exclusions: [
      "Zone elephant safari (if operational)",
      "Professional camera fees imposed by forest department",
      "Train/air tickets from Mumbai"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Jim Corbett & Afternoon Kosi River Walk",
        desc: "Pickup from Ramnagar station or Dehradun/Delhi airport. Check into your luxury forest lodge. Enjoy lunch listening to river sounds. Afternoon visit to Garjiya Devi temple and Kosi river bank. Evening wildlife movie and dinner."
      },
      {
        day: 2,
        title: "Dawn 4x4 Safari & Afternoon Second Zone Exploration",
        desc: "Early morning 4x4 Gypsy safari into Bijrani/Jhirna core zone. Track fresh tiger pugmarks, observe herds of spotted deer, wild boars, and Asian elephants. Return for hearty brunch. Afternoon second safari or nature walk to Corbett Waterfalls."
      },
      {
        day: 3,
        title: "Morning Bird Trail & Departure",
        desc: "Morning birdwatching walk with in-house naturalist. Leisurely breakfast by the river. Check out and transfer to airport/station for your journey back to Mumbai."
      }
    ]
  },
  {
    id: "pkg-mumbai-food-bollywood",
    title: "Mumbai Bollywood Studio & Midnight Street Gastronomy Trail",
    subtitle: "Behind-the-Scenes Film City Tour & Legendary Street Food Experience",
    destination: "Mumbai City",
    state: "Mumbai",
    category: "Culture & Entertainment",
    badge: "Unique Experience",
    price: 5499,
    originalPrice: 6999,
    discount: "21% OFF",
    duration: "2 Days / 1 Night",
    daysCount: 2,
    nightsCount: 1,
    rating: 4.87,
    reviewsCount: 180,
    startingFrom: "Ex-Mumbai",
    groupType: "Small Group / Fun Lovers",
    difficulty: "Easy",
    bestSeason: "Round the Year",
    images: [
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Get up-close with the glamour and flavours that define Mumbai. Walk through live Bollywood TV & film production sets at Dadasaheb Phalke Chitranagari (Film City), learn Bollywood dance moves, and taste Mumbai's legendary culinary wonders.",
    highlights: [
      "Guided VIP tour of Bollywood Film City sets, dubbing studio & costumes",
      "Live shooting glimpse (subject to shoot schedules) & Bollywood dance performance",
      "Curated evening street food walk through Mohammad Ali Road / Girgaon Chowpatty",
      "Taste authentic Vada Pav from Anand, Sardar's butter Pav Bhaji & Bademiya rolls",
      "Visit celebrity star homes in Bandra & Juhu",
      "Midnight Arabian sea breeze at Bandstand with cutting chai"
    ],
    inclusions: [
      "1 Night stay in central Mumbai 4-star hotel",
      "Official Bollywood Film City tour pass & entry permissions",
      "All street food tastings included with mineral water",
      "Private AC transportation throughout",
      "Friendly Mumbai insider food storyteller & guide"
    ],
    exclusions: [
      "Alcohol and fine-dining restaurants outside itinerary",
      "Personal film souvenirs"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bollywood Live Studio Tour & Celebrity Bungalows",
        desc: "Morning pickup. Enter the sprawling Film City in Goregaon. Experience sound stages, courthouse sets, temple sets, and visual effects demonstrations. Afternoon drive past Amitabh Bachchan's 'Jalsa' and Shah Rukh Khan's 'Mannat'. Evening check-in."
      },
      {
        day: 2,
        title: "Chowpatty Sunset & Street Food Safari Trail",
        desc: "Explore Crawford Market and spice bazaars. Late afternoon sunset at Girgaon Chowpatty with Pani Puri, Bhel Puri, and Sev Batata Puri. Head for savoury bites of Keema Pav, Baida Roti, and rich Rabdi Kulfi. Drop off at midnight with a full heart."
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Dr. Rajesh Kulkarni & Family",
    location: "Dadar, Mumbai",
    tour: "Kedarnath & Badrinath Sacred Do Dham Yatra",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    comment: "Being from Mumbai, organizing a high-altitude Himalayan trip for my elderly parents was intimidating. The team took care of every single detail — from Mumbai flight connections, prompt hotel check-ins, helicopter tokens to the warm Garhwali driver who was like family. 10/10 service!",
    date: "October 2026"
  },
  {
    id: "test-2",
    name: "Ananya Mehra & Group",
    location: "Bandra, Mumbai",
    tour: "Rishikesh Thrills & Riverside Camping",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    comment: "The river rafting through the grade 4 rapids was pure adrenaline! Our camp right on the riverbank was so luxurious, with fantastic bonfires and warm hospitality. The VIP Parmarth Niketan Ganga Aarti seats were truly magical.",
    date: "September 2026"
  },
  {
    id: "test-3",
    name: "Vikram & Sneha Joshi",
    location: "Pune (Booked from Mumbai Hub)",
    tour: "Signature South Mumbai Heritage & Elephanta Cruise",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    comment: "We booked the Mumbai heritage tour for our visiting relatives from London. The historical context our guide provided at CSMT and Elephanta was world-class. The sunset along Marine Drive was the perfect finale.",
    date: "November 2026"
  },
  {
    id: "test-4",
    name: "Siddharth Verma",
    location: "Thane, Mumbai",
    tour: "Auli Snow & Chopta Chandrashila Himalayan Trek",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
    comment: "Standing on top of Chandrashila at sunrise looking at Nanda Devi will remain one of the greatest moments of my life. Professional trek leaders, great gear, and zero hassle from start to finish.",
    date: "December 2026"
  }
];

export const FAQS = [
  {
    q: "We are based in Mumbai. How do your Uttarakhand tour departures work?",
    a: "We are headquartered in Mumbai with our dedicated operations base in Dehradun and Rishikesh. For all Uttarakhand tours, we coordinate your direct flights or Rajdhani/Duronto train tickets from Mumbai (Chhatrapati Shivaji Maharaj International Airport / Mumbai Central) to Dehradun (Jolly Grant Airport) or Haridwar. Our executive meets you right at the airport or station with your private sanitized cab."
  },
  {
    q: "Do you arrange Kedarnath Yatra registration and helicopter tickets?",
    a: "Yes! We handle the mandatory Uttarakhand Government Biometric Registration for Kedarnath and Badrinath for all our travelers. For helicopter tickets from Phata, Guptkashi, or Sersi, we coordinate booking assistance through the official IRCTC HeliYatra portal."
  },
  {
    q: "Can we customize an itinerary (e.g. adding extra days or combining destinations)?",
    a: "Absolutely! Over 60% of our guests choose tailor-made journeys. You can use our interactive Custom Trip Builder on this website or chat directly with our travel specialists to modify days, hotel categories (3-star, 4-star, or luxury heritage), or add adventure activities like bungy jumping or wildlife safaris."
  },
  {
    q: "How does the tour inquiry and booking process work?",
    a: "You can submit a free inquiry for any package with zero advance payment. Our Mumbai travel desk reviews your dates and group requirements, customizes your itinerary, and shares the confirmed proposal. You can confirm your booking with flexible payment milestones before departure. We accept UPI, Net Banking, and all major cards with instant GST invoices."
  },
  {
    q: "Are the tours suitable for senior citizens and families with children?",
    a: "Yes, we curate specialized relaxed-pace itineraries for families and senior pilgrims. For high-altitude destinations like Kedarnath, we arrange ponies, palkis, or helicopter transfers, along with hotels equipped with heating and portable oxygen backup."
  },
  {
    q: "Where is your office located in Mumbai if we want to meet in person?",
    a: "Our Mumbai head office is located at Maker Chambers V, Nariman Point, South Mumbai, with our client consultation lounge at Bandra-Kurla Complex (BKC). You can also schedule a free doorstep or video consultation with our travel planners."
  }
];

export const STATS = [
  { label: "Happy Travelers", value: "28,500+" },
  { label: "Tour Departures", value: "3,400+" },
  { label: "Verified Hotels & Camps", value: "120+" },
  { label: "Google & TripAdvisor Rating", value: "4.9 / 5" }
];
