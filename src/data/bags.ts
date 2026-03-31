import bag1 from "@/assets/bag-1.jpg";
import bag2 from "@/assets/bag-2.jpg";
import bag3 from "@/assets/bag-3.jpg";
import bag4 from "@/assets/bag-4.jpg";
import bag5 from "@/assets/bag-5.jpg";
import bag6 from "@/assets/bag-6.jpg";

export interface Bag {
  id: string;
  brand: string;
  model: string;
  color: string;
  description: string;
  retailValue: number;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  category: string;
  verified: boolean;
  lender: { name: string; avatar: string; memberSince: string };
}

export const bags: Bag[] = [
  {
    id: "1", brand: "Hermès", model: "Birkin 30", color: "Brown",
    description: "The iconic Hermès Birkin in rich Togo leather. A timeless investment piece perfect for any occasion.",
    retailValue: 12000, pricePerDay: 150, pricePerWeek: 850, pricePerMonth: 2800,
    image: bag1, images: [bag1, bag2, bag3], rating: 4.9, reviews: 47,
    category: "Wedding", verified: true,
    lender: { name: "Sophia M.", avatar: "", memberSince: "2023" },
  },
  {
    id: "2", brand: "Valentino", model: "Garavani Clutch", color: "Red",
    description: "Stunning red evening clutch with gold chain detail. Perfect for galas and formal events.",
    retailValue: 3200, pricePerDay: 65, pricePerWeek: 380, pricePerMonth: 1200,
    image: bag2, images: [bag2, bag1, bag4], rating: 4.7, reviews: 32,
    category: "Party", verified: true,
    lender: { name: "Isabella R.", avatar: "", memberSince: "2024" },
  },
  {
    id: "3", brand: "Chanel", model: "Classic Flap", color: "White",
    description: "The quintessential Chanel Classic Flap in pristine white caviar leather with gold hardware.",
    retailValue: 9500, pricePerDay: 120, pricePerWeek: 700, pricePerMonth: 2300,
    image: bag3, images: [bag3, bag5, bag6], rating: 5.0, reviews: 61,
    category: "Wedding", verified: true,
    lender: { name: "Charlotte L.", avatar: "", memberSince: "2022" },
  },
  {
    id: "4", brand: "Dior", model: "Lady Dior", color: "Navy",
    description: "Elegant Lady Dior in deep navy blue with iconic Cannage stitching and gold charms.",
    retailValue: 5800, pricePerDay: 90, pricePerWeek: 520, pricePerMonth: 1700,
    image: bag4, images: [bag4, bag2, bag1], rating: 4.8, reviews: 28,
    category: "Party", verified: true,
    lender: { name: "Amara K.", avatar: "", memberSince: "2023" },
  },
  {
    id: "5", brand: "Bottega Veneta", model: "Arco Tote", color: "Green",
    description: "The Bottega Veneta Arco Tote in vivid emerald green. Signature intrecciato weave.",
    retailValue: 4200, pricePerDay: 75, pricePerWeek: 430, pricePerMonth: 1400,
    image: bag5, images: [bag5, bag3, bag4], rating: 4.6, reviews: 19,
    category: "Vacation", verified: false,
    lender: { name: "Elena V.", avatar: "", memberSince: "2024" },
  },
  {
    id: "6", brand: "Fendi", model: "Peekaboo Mini", color: "Pink",
    description: "Adorable Fendi Peekaboo Mini in soft pink leather. A playful yet sophisticated choice.",
    retailValue: 4800, pricePerDay: 80, pricePerWeek: 460, pricePerMonth: 1500,
    image: bag6, images: [bag6, bag2, bag5], rating: 4.8, reviews: 35,
    category: "Vacation", verified: true,
    lender: { name: "Mia T.", avatar: "", memberSince: "2023" },
  },
];

export const categories = [
  { name: "Wedding", icon: "💍", description: "Elegant pieces for your special day" },
  { name: "Party", icon: "✨", description: "Statement bags for unforgettable nights" },
  { name: "Vacation", icon: "🌴", description: "Luxury companions for your getaway" },
];
