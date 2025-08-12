import axios from "axios";
import { envConfig } from "@/configs/AppConfig";

export const uploadToCloudinary = async (image: File) => {
  const formData = new FormData();
  formData.append("upload_preset", envConfig.CLOUDINARY_PRESET);
  formData.append("file", image);

  const response = await axios.post<{ secure_url: string }>(
    `https://api.cloudinary.com/v1_1/${envConfig.CLOUDINARY_CLOUD_NAME}/image/upload`,
    formData
  );
  return response.data;
};
