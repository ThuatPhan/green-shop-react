import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product } from "@/models/index";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

type CartState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (productToAdd) => {
        const cartItems = get().items;
        const existingItem = cartItems.find(
          (item) => item.product.id === productToAdd.id
        );
        if (existingItem) {
          const updatedItems = cartItems.map((item) =>
            item.product.id === productToAdd.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({ items: updatedItems });
        } else {
          const newCartItem: CartItem = {
            id: uuidv4(),
            product: productToAdd,
            quantity: 1,
          };
          set({ items: [...cartItems, newCartItem] });
        }

        toast.success(
          `Product ${existingItem ? "updated" : "added"} to your cart`
        );
      },

      removeFromCart: (cartItemId) => {
        set({
          items: get().items.filter((item) => item.id !== cartItemId),
        });
      },

      updateQuantity: (cartItemId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(cartItemId);
        } else {
          set({
            items: get().items.map((item) =>
              item.id === cartItemId ? { ...item, quantity } : item
            ),
          });
        }
      },

      clearCart: () => {
        set({ items: [] });
      },

      totalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      totalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.product.offerPrice * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
