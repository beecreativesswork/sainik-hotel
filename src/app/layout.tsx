import type { Metadata } from "next";
import {
  Bebas_Neue,
  DM_Sans,
  Lora,
  Noto_Serif_Devanagari,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/NoiseOverlay";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Sainik Hotel — Authentic Maharashtrian & Dhaba Dining | Chikhali, Pimpri-Chinchwad",
  description: "Sainik Hotel is a legendary local restaurant in Chikhali, Pimpri-Chinchwad (near Thermax Chowk). Serving authentic Maharashtrian thalis, Kolhapuri sukka, North Indian & Chinese dishes. ₹200–400 per person.",
  keywords: [
    "Sainik Hotel Chikhali",
    "Restaurant in Chikhali",
    "Hotel near Thermax Chowk",
    "Restaurants in Pimpri-Chinchwad",
    "Affordable restaurant in Chikhali",
    "Maharashtrian Thali Chikhali",
    "Kolhapuri Sukka Pimpri"
  ],
  authors: [{ name: "Sainik Hotel" }],
  openGraph: {
    title: "Sainik Hotel — Good Food. No Nonsense.",
    description: "Legendary roadside hotel dining in Chikhali, Pimpri-Chinchwad. Maharashtrian Thalis, North Indian, Chinese & Outdoor Seating.",
    url: "https://sainikhotel.com",
    siteName: "Sainik Hotel",
    images: [
      {
        url: "/images/hero_thali.png",
        width: 1200,
        height: 630,
        alt: "Sainik Hotel Thali Platter in Chikhali",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sainik Hotel — Chikhali, Pimpri-Chinchwad",
    description: "Authentic roadside food, generous thalis, and great vibes in Chikhali.",
    images: ["/images/hero_thali.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Sainik Hotel",
  "image": "https://sainikhotel.com/images/hero_thali.png",
  "@id": "https://sainikhotel.com",
  "url": "https://sainikhotel.com",
  "telephone": "08811994491",
  "priceRange": "₹200-400",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "BhagyaLaxmi Thermo Dies & Pattern Pvt. Ltd, Mhetre Wadi, Hanuman Nagar",
    "addressLocality": "Chikhali, Pimpri-Chinchwad",
    "addressRegion": "Maharashtra",
    "postalCode": "411062",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.6791,
    "longitude": 73.8122
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.1",
    "reviewCount": "195"
  },
  "servesCuisine": ["Maharashtrian", "North Indian", "Chinese", "Dhaba"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "11:00",
      "closes": "16:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "19:00",
      "closes": "23:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${bebasNeue.variable} ${dmSans.variable} ${lora.variable} ${notoSerifDevanagari.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-[#FAF7F2] text-[#1D1B18] antialiased selection:bg-[#C8522A] selection:text-[#FAF7F2] relative font-body">
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
