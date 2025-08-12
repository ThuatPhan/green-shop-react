import { axiosInstance } from "@/apis/Client";
import { ApiResponse } from "@/models/ApiResponse";
import { UserAddress, UserAddressCreation } from "@/models/UserAddress";

export const getUserAddresses = async () => {
  const response = await axiosInstance.get<ApiResponse<UserAddress[]>>(
    "/api/user-addresses"
  );
  return response.data;
};

export const addUserAddress = async (payload: UserAddressCreation) => {
  const response = await axiosInstance.post<ApiResponse<UserAddress>>(
    "/api/user-addresses",
    payload
  );
  return response.data;
};
