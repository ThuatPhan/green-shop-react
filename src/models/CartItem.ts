import { Product } from "@/models/Product";

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};

export type CartItemCreation = {
  productId: string;
  quantity: number;
};
