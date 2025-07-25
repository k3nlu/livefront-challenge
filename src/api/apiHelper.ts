import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const baseUrl = process.env.EXPO_PUBLIC_API_URL || "";

function generateAxiosInstance(baseUrl: string) {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return axiosInstance;
}

function generateApiHelper(baseUrl: string) {
  const axiosInstance = generateAxiosInstance(baseUrl);

  const getRequest = async <Data = any>(
    path: string,
    config?: AxiosRequestConfig
  ) => {
    const result = await axiosInstance.get<Data, AxiosResponse<Data>>(
      path,
      config
    );
    return result.data;
  };

  return {
    get: getRequest,
  };
}

export const api = generateApiHelper(baseUrl);
