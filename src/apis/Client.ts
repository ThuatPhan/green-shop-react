import axios from "axios";
import { envConfig } from "@/configs/AppConfig";

let getTokenSilently: null | (() => Promise<string>) = null;

export const axiosInstance = axios.create({
  baseURL: envConfig.BASE_API_URL,
});

export const setAccessTokenFunction = (
  getAccessTokenFn: () => Promise<string>
) => {
  getTokenSilently = getAccessTokenFn;
};

axiosInstance.interceptors.request.use(async (config) => {
  if (getTokenSilently) {
    try {
      const token = await getTokenSilently();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error getting access token: ", error);
    }
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const response = error?.response;
    if (response) {
      // Retrieve error code and message from server response
      const { code, message } = response.data;
      return Promise.reject({ code, message });
    }
    return Promise.reject(error);
  }
);
