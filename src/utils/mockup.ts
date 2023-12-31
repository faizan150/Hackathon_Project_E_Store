import P1 from "public/p1.webp";
import Image, { StaticImageData } from "next/image";

import P2 from "public/p2.png";
import P3 from "public/p3.png";
import { Product } from "./types";

// utils/mockup.ts
// mockup.ts

// Other mockup data and utilities


export const products: Product[] = [
  {
    id: 1,
    tagline: "Dress",
    name: "Product-1",
    category: "female",
    price: 20,
    image: P1,
  },
  {
    id: 2,
    tagline: "Dress",
    name: "Product-2",
    category: "female",
    price: 150,
    image: P2,
  },
  {
    id: 3,
    tagline: "Dress",
    name: "Product-3",
    category: "female",
    price: 250,
    image: P3,
  },
  {
    id: 5,
    tagline: "Dress",
    name: "Product-5",
    category: "male",
    price: 550,
    image: P1,
  },
  {
    id: 4,
    tagline: "Dress",
    name: "Product-4",
    category: "male",
    price: 350,
    image: P2,
  },
  {
    id: 6,
    tagline: "Dress",
    name: "Product-6",
    category: "kids",
    price: 650,
    image: P3,
  },
  {
    id: 7,
    tagline: "Dress",
    name: "Product-7",
    category: "kids",
    price: 550,
    image: P1,
  },
];
