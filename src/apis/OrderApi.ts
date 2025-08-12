import { Order } from "@/models/Order";
import { axiosInstance } from "@/apis/Client";
import { OrderCreation } from "@/models/Order";
import { ApiResponse } from "@/models/ApiResponse";
import { PageResponse } from "@/models/PageResponse";

export const createOrder = async (payload: OrderCreation) => {
  const response = await axiosInstance.post<ApiResponse<Order>>(
    "/api/orders",
    payload
  );
  return response.data;
};

export const createCheckoutSession = async (orderId: string) => {
  const response = await axiosInstance.post<ApiResponse<string>>(
    `/api/orders/${orderId}/checkout`
  );
  return response.data;
};

export const getUserOrders = async (page: number, size: number) => {
  const response = await axiosInstance.get<ApiResponse<PageResponse<Order>>>(
    "/api/orders/user",
    {
      params: { page, size },
    }
  );

  return response.data;
};

export const getOrders = async (page: number, size: number) => {
  const response = await axiosInstance.get<ApiResponse<PageResponse<Order>>>(
    "/api/orders",
    {
      params: { page, size },
    }
  );

  return response.data;
};
