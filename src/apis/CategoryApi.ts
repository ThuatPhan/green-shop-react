import { ApiResponse } from "@/models/ApiResponse";
import { axiosInstance } from "@/apis/Client";
import { Category } from "@/models";

export const getCategories = async () => {
  const response = await axiosInstance.get<ApiResponse<Category[]>>(
    "/api/categories"
  );
  return response.data;
};

export const getCategory = async (slug: string) => {
  const response = await axiosInstance.get<ApiResponse<Category>>(
    `/api/categories/${slug}`
  );
  return response.data;
};
