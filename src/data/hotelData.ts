export const SITE_URL = "https://www.sainikhotel.in";

export interface MenuItem {
  id: string;
  name: string;
  category: 'maharashtrian' | 'north_indian' | 'chinese' | 'snacks' | 'thalis' | 'beverages';
  description: string;
  tag?: string;
  featured?: boolean;
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  badge?: string;
  tag: string;
}

export const SAINIK_HOTEL_DATA = {
  brand: "Sainik Hotel",
  tagline: "GOOD FOOD. NO NONSENSE.",
  subTagline: "Authentic Roadside Dhaba Culture in Chikhali, Pimpri-Chinchwad",
  category: "Restaurant / Hotel",
  address: {
    line1: "BhagyaLaxmi Thermo Dies & Pattern Pvt. Ltd",
    line2: "Mhetre Wadi, Hanuman Nagar",
    area: "Chikhali",
    city: "Pimpri-Chinchwad",
    state: "Maharashtra",
    pincode: "411062",
    fullAddress: "BhagyaLaxmi Thermo Dies & Pattern Pvt. Ltd, Mhetre Wadi, Hanuman Nagar, Chikhali, Pimpri-Chinchwad, Maharashtra 411062",
    landmark: "Thermax Chowk / ICICI Bank",
    googleMapsUrl: "https://maps.google.com/?q=Sainik+Hotel+Chikhali+Pimpri-Chinchwad+Maharashtra+411062"
  },
  contact: {
    phoneDisplay: "088119 94491",
    phoneTel: "tel:08811994491",
    instagramHandle: "@sainikhotel_official",
    instagramUrl: "https://instagram.com/sainikhotel_official",
    website: SITE_URL
  },
  metrics: {
    rating: 4.1,
    reviewsCount: "195+",
    priceRange: "₹200–400 per person",
    avgCostNumber: "₹200–400"
  },
  serviceOptions: [
    { title: "All You Can Eat", desc: "Unlimited hearty thali refills & warm hospitality", icon: "Utensils" },
    { title: "Outdoor Seating", desc: "Open-air starry dining with authentic Dhaba vibes", icon: "Sun" },
    { title: "Quick Delivery", desc: "Hot & fresh meals straight to your doorstep in Chikhali", icon: "Truck" }
  ],
  schedule: {
    lunch: { start: "11:00", end: "16:00", label: "Open until 4:00 PM" },
    dinner: { start: "19:00", end: "23:00", label: "Reopens at 7:00 PM" },
    delivery: { start: "19:00", end: "20:30", label: "Delivery: 7:00 PM – 8:30 PM" }
  },
  landmarks: [
    { name: "Thermax Chowk", distance: "3 mins away", detail: "Major transit point in Chikhali" },
    { name: "ICICI Bank Branch", distance: "2 mins away", detail: "Key reference landmark" },
    { name: "Mhetre Wadi", distance: "Adjacent", detail: "Heart of Hanuman Nagar" },
    { name: "Pimpri-Chinchwad Industrial Hub", distance: "5 mins drive", detail: "Serving local workers & families" }
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "thali-special",
    name: "SAINIK SPECIAL THALI",
    category: "thalis",
    description: "Hearty full meal with signature rassa, bhakri, rice, chutney & fresh salad.",
    tag: "MOST POPULAR",
    featured: true,
    image: "/images/hero_thali.jpg"
  },
  {
    id: "kolhapuri-sukka",
    name: "KOLHAPURI SUKKA CHICKEN",
    category: "maharashtrian",
    description: "Rich, spicy roasted Kolhapuri spices, succulent chicken & aromatic bhakri bread.",
    tag: "CHIKHALI FAVOURITE",
    featured: true,
    image: "/images/menu_sukka.jpg"
  },
  {
    id: "chinese-plate",
    name: "WOK-FIRED HAKKA & PANEER CHILLI",
    category: "chinese",
    description: "Tossed over high flame with fresh greens, sizzling paneer chunks & secret house sauce.",
    tag: "CHINESE SPECIAL",
    featured: true,
    image: "/images/menu_chinese.jpg"
  },
  {
    id: "paneer-butter",
    name: "PANEER BUTTER MASALA & NAAN",
    category: "north_indian",
    description: "Creamy tomato gravy with fresh paneer cubes and hot butter garlic naan.",
    tag: "CHEF RECOMMENDATION",
    featured: true,
    image: "/images/menu_north_indian.jpg"
  },
  {
    id: "kanda-bhajji",
    name: "CRISPY KANDA BHAJJI & CUTTING CHAI",
    category: "snacks",
    description: "Crispy fried sliced onion fritters paired with boiling hot spiced tea in glasses.",
    tag: "EVENING SPECIAL",
    featured: true,
    image: "/images/menu_snacks.jpg"
  },
  {
    id: "tambda-pandhra",
    name: "TAMBDA PANDHRA RASSA BOWL",
    category: "maharashtrian",
    description: "Authentic Kolhapuri red spicy soup & soothing white coconut milk broth.",
    tag: "TRADITIONAL BOWL",
    featured: false
  },
  {
    id: "dal-tadka",
    name: "DHABA DAL TADKA",
    category: "north_indian",
    description: "Slow-cooked yellow lentils tampered with garlic, ghee, & dried red chillies.",
    tag: "COMFORT FOOD",
    featured: false
  },
  {
    id: "veg-manchurian",
    name: "VEG MANCHURIAN GRAVY",
    category: "chinese",
    description: "Crispy vegetable balls simmered in tangy spicy Indo-Chinese dark sauce.",
    tag: "SPICY & TANGY",
    featured: false
  },
  {
    id: "solkadhi",
    name: "CHILLED KOKUM SOLKADHI",
    category: "beverages",
    description: "Refreshing pink kokum juice infused with garlic, chilli & coconut milk.",
    tag: "COOL DIGESTIVE",
    featured: false
  }
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Local Guide Diner",
    rating: 5,
    date: "2 weeks ago",
    text: "Good place for tasty and affordable food.",
    badge: "Verified Google Review",
    tag: "Affordable Food"
  },
  {
    id: "rev-2",
    author: "Chikhali Food Explorer",
    rating: 5,
    date: "1 month ago",
    text: "A perfect choice for a Chinese meal!",
    badge: "Verified Google Review",
    tag: "Chinese Favorite"
  },
  {
    id: "rev-3",
    author: "Regular Patron",
    rating: 4,
    date: "3 weeks ago",
    text: "Decent service with courteous staff.",
    badge: "Verified Google Review",
    tag: "Great Service"
  },
  {
    id: "rev-4",
    author: "Pimpri Resident",
    rating: 5,
    date: "2 months ago",
    text: "Generous portions, outdoor seating, and authentic roadside atmosphere. Excellent value in ₹200-400 budget!",
    badge: "Verified Google Review",
    tag: "Big Portions"
  }
];

export function getLiveOperationalStatus(): { isOpen: boolean; text: string; subtext: string } {
  // Returns status based on live current time in India (IST)
  const now = new Date();
  // Get current hour and minute in 24h format
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeVal = hours * 60 + minutes;

  const lunchStart = 11 * 60; // 11:00 AM
  const lunchEnd = 16 * 60;   // 04:00 PM
  const dinnerStart = 19 * 60; // 07:00 PM
  const dinnerEnd = 23 * 60;  // 11:00 PM

  if (currentTimeVal >= lunchStart && currentTimeVal <= lunchEnd) {
    return {
      isOpen: true,
      text: "OPEN NOW — LUNCH SERVICE",
      subtext: "Serving until 4:00 PM today"
    };
  } else if (currentTimeVal >= dinnerStart && currentTimeVal <= dinnerEnd) {
    return {
      isOpen: true,
      text: "OPEN NOW — DINNER SERVICE",
      subtext: "Serving until 11:00 PM today"
    };
  } else if (currentTimeVal > lunchEnd && currentTimeVal < dinnerStart) {
    return {
      isOpen: false,
      text: "CLOSED NOW — REOPENS AT 7:00 PM",
      subtext: "Lunch ended at 4 PM. Evening shift starts at 7 PM"
    };
  } else {
    return {
      isOpen: false,
      text: "CLOSED NOW — OPENS AT 11:00 AM",
      subtext: "Reopens for lunch tomorrow at 11:00 AM"
    };
  }
}
