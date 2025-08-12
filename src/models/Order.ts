import { OrderStatus } from "@/enums/OrderStatus";
import { PaymentMethod } from "@/enums/PaymentMethod";
import { PaymentStatus } from "@/enums/PaymentStatus";
import { Product } from "@/models/Product";
import { UserAddress } from "@/models/UserAddress";

export type OrderItem = {
  id: string;
  quantity: number;
  unitPrice: number;
  product: Product;
  subTotal: number;
};

export type Order = {
  id: string;
  totalAmount: number;
  items: OrderItem[];
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  status: OrderStatus;
  shippingAddress: UserAddress;
  createdAt: string;
  updatedAt: string;
};

export type OrderCreation = {
  shippingAddressId: string;
  items: { productId: string; quantity: number }[];
};
