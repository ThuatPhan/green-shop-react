export type User = {};

export type LoginPayload = {
  email: string;
  password: string;
};

export type SignupPayload = LoginPayload & {
  confirmPassword: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  bgColor: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: Category;
  images: string[];
  price: number;
  offerPrice: number;
  rating: number;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};

export type UserAddress = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  phone: string;
};

export type OrderItem = {
  id: string;
  product: Product;
  unitPrice: number;
  quantity: number;
  subTotal: number;
};

export enum PaymentMethod {
  COD = "COD",
  CARD = "CARD",
}

export type Order = {
  id: string;
  paymentType: PaymentMethod;
  totalAmount: number;
  items: OrderItem[];
  shippingAddress: UserAddress;
  createdAt: string;
  updatedAt: string;
};
