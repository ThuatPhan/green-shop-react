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
