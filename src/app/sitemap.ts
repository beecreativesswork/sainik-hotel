import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/hotelData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      images: [
        `${SITE_URL}/images/hero_thali.jpg`,
        `${SITE_URL}/images/menu_sukka.jpg`,
        `${SITE_URL}/images/menu_chinese.jpg`,
        `${SITE_URL}/images/menu_north_indian.jpg`,
        `${SITE_URL}/images/menu_snacks.jpg`,
        `${SITE_URL}/images/dining_rush.jpg`,
      ],
    },
  ];
}
