import { axiosInstance } from "@/apis/Client";
import { ApiResponse } from "@/models/ApiResponse";
import { PageResponse } from "@/models/PageResponse";
import { CartItem, CartItemCreation } from "@/models/CartItem";

export const getCartItems = async (page: number, size: number) => {
  const response = await axiosInstance.get<ApiResponse<PageResponse<CartItem>>>(
    "/api/carts",
    {
      params: { page, size },
    }
  );

  return response.data;
};

export const addCartItem = async (payload: CartItemCreation) => {
  const response = await axiosInstance.post<ApiResponse<CartItem>>(
    "/api/carts",
    payload
  );
  return response.data;
};

export const updateItemQuantity = async ({
  itemId,
  quantity,
}: {
  itemId: string;
  quantity: number;
}) => {
  const response = await axiosInstance.put<ApiResponse<CartItem>>(
    `/api/carts/items/${itemId}`,
    {
      quantity,
    }
  );

  return response.data;
};

export const removeCartItem = async (itemId: string) => {
  await axiosInstance.delete(`/api/carts/${itemId}`);
};
