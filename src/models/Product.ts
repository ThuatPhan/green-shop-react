import { Category } from "@/models/Category";

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  images: string[];
  price: number;
  offerPrice: number;
  inStock: boolean;
  rating: number;
  category: Category;
};

export type ProductCreation = {
  name: string;
  description: string;
  images: string[];
  price: number;
  offerPrice: number;
  categoryId: string;
};
