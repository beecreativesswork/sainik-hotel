import type { Metadata } from "next";
import Script from "next/script";
import { Hind, Space_Mono, Yatra_One } from "next/font/google";
import "./globals.css";
import { MENU_ITEMS, SAINIK_HOTEL_DATA, SITE_URL, type MenuItem } from "@/data/hotelData";

const yatraOne = Yatra_One({
  subsets: ["devanagari", "latin"],
  weight: "400",
  variable: "--font-yatra-one",
  display: "swap",
});
const hind = Hind({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const canonicalUrl = SITE_URL;
const heroImageUrl = `${SITE_URL}/images/reference/mutton-thali.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sainik Hotel — सैनिक हॉटेल | Kolhapuri Thali, Fired Up",
  description: "Sainik Hotel — fiery Kolhapuri mutton and fish thalis with tambda & pandhra rassa. Since 2019.",
  keywords: [
    "Sainik Hotel Chikhali",
    "Restaurant in Chikhali Pune",
    "Maharashtrian restaurant in Chikhali",
    "Non-vegetarian restaurant Chikhali",
    "Kolhapuri chicken sukka Chikhali",
    "Restaurant in Pimpri-Chinchwad",
  ],
  authors: [{ name: "Sainik Hotel" }],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Sainik Hotel — सैनिक हॉटेल | Kolhapuri Thali, Fired Up",
    description: "Sainik Hotel — fiery Kolhapuri mutton and fish thalis with tambda & pandhra rassa. Since 2019.",
    url: canonicalUrl,
    siteName: "Sainik Hotel",
    images: [
      {
        url: "/images/reference/mutton-thali.jpg",
        width: 1024,
        height: 1024,
        type: "image/jpeg",
        alt: "Sainik Hotel Thali Platter in Chikhali",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sainik Hotel — सैनिक हॉटेल | Kolhapuri Thali, Fired Up",
    description: "Sainik Hotel — fiery Kolhapuri mutton and fish thalis with tambda & pandhra rassa. Since 2019.",
    images: ["/images/reference/mutton-thali.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const menuSectionNames: Record<MenuItem["category"], string> = {
  thalis: "Thalis & Special Feasts",
  maharashtrian: "Maharashtrian Specialities",
  north_indian: "North Indian Curries & Breads",
  chinese: "Chinese Wok & Starters",
  snacks: "Snacks & Refreshments",
  beverages: "Beverages & Coolers",
};

const menuSections = Array.from(new Set(MENU_ITEMS.map((item) => item.category))).map(
  (category) => ({
    "@type": "MenuSection",
    name: menuSectionNames[category],
    hasMenuItem: MENU_ITEMS.filter((item) => item.category === category).map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      ...(item.image ? { image: `${SITE_URL}${item.image}` } : {}),
    })),
  }),
);

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: canonicalUrl,
      name: SAINIK_HOTEL_DATA.brand,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#restaurant` },
    },
    {
      "@type": "Restaurant",
      "@id": `${SITE_URL}/#restaurant`,
      name: SAINIK_HOTEL_DATA.brand,
      url: canonicalUrl,
      image: [heroImageUrl],
      telephone: SAINIK_HOTEL_DATA.contact.phoneTel.replace(/^tel:/, ""),
      priceRange: SAINIK_HOTEL_DATA.metrics.priceRange,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${SAINIK_HOTEL_DATA.address.line1}, ${SAINIK_HOTEL_DATA.address.line2}`,
        addressLocality: `${SAINIK_HOTEL_DATA.address.area}, ${SAINIK_HOTEL_DATA.address.city}`,
        addressRegion: SAINIK_HOTEL_DATA.address.state,
        postalCode: SAINIK_HOTEL_DATA.address.pincode,
        addressCountry: "IN",
      },
      servesCuisine: ["Maharashtrian", "North Indian", "Chinese"],
      hasMap: SAINIK_HOTEL_DATA.address.googleMapsUrl,
      sameAs: [SAINIK_HOTEL_DATA.contact.instagramUrl],
      hasMenu: { "@id": `${SITE_URL}/#menu` },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: SAINIK_HOTEL_DATA.schedule.lunch.start,
          closes: SAINIK_HOTEL_DATA.schedule.lunch.end,
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: SAINIK_HOTEL_DATA.schedule.dinner.start,
          closes: SAINIK_HOTEL_DATA.schedule.dinner.end,
        },
      ],
    },
    {
      "@type": "Menu",
      "@id": `${SITE_URL}/#menu`,
      name: `${SAINIK_HOTEL_DATA.brand} Menu`,
      url: `${canonicalUrl}/#menu`,
      hasMenuSection: menuSections,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: canonicalUrl,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${yatraOne.variable} ${hind.variable} ${spaceMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema).replace(/</g, "\\u003c"),
          }}
        />
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){ window.dataLayer.push(arguments); };
                window.gtag('js', new Date());
                window.gtag('config', ${JSON.stringify(GA_MEASUREMENT_ID)});
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
