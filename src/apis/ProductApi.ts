import { axiosInstance } from "@/apis/Client";
import { ApiResponse } from "@/models/ApiResponse";
import { PageResponse } from "@/models/PageResponse";
import { Product, ProductCreation } from "@/models/Product";

export const addProduct = async (payload: ProductCreation) => {
  const response = await axiosInstance.post<ApiResponse<Product>>(
    "/api/products",
    payload
  );
  return response.data;
};

export const updateProductInstock = async ({
  productId,
  inStock,
}: {
  productId: string;
  inStock: boolean;
}) => {
  const response = await axiosInstance.put<ApiResponse<Product>>(
    `/api/products/${productId}`,
    {
      inStock,
    }
  );

  return response.data;
};

export const getProducts = async (
  page: number,
  size: number,
  query?: string
) => {
  const response = await axiosInstance.get<ApiResponse<PageResponse<Product>>>(
    "/api/products",
    {
      params: { q: query, page, size },
    }
  );

  return response.data;
};

export const getProduct = async (slug: string) => {
  const response = await axiosInstance.get<ApiResponse<Product>>(
    `/api/products/${slug}`
  );

  return response.data;
};

export const getRelatedProducts = async (
  productId: string,
  page: number,
  size: number
) => {
  const response = await axiosInstance.get<ApiResponse<PageResponse<Product>>>(
    `/api/products/related/${productId}`,
    {
      params: { page, size },
    }
  );

  return response.data;
};

export const getProductsByCategory = async (
  categoryId: string,
  page: number,
  size: number
) => {
  const response = await axiosInstance.get<ApiResponse<PageResponse<Product>>>(
    `/api/products/category/${categoryId}`,
    {
      params: { page, size },
    }
  );

  return response.data;
};
