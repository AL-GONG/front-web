import axios, { AxiosRequestConfig } from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
});

API.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config?.headers) {
    throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
  }
  
  const auth = localStorage.getItem("auth");
  if (auth !== null) {
    config.headers["Authorization"] = `Bearer ${JSON.parse(auth).token}`;
  }
  return config;
});

const get = async (url: string, headers = {}) => {
  const response = await API.get(url, { headers });
  return response.data;
};

const post = async (url: string, body: any, headers = {}) => {
  const response = await API.post(url, body, { headers });
  return response.data;
};

export { get, post };
