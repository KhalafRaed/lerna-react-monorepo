import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_COOKIE_NAME } from "../constants";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

const requestHandler = (request: AxiosRequestConfig) => {
  const accessToken = Cookies.get(ACCESS_TOKEN_COOKIE_NAME);

  request.headers.Authorization = "JWT " + accessToken;

  return request;
};

customAxios.interceptors.request.use((request) => requestHandler(request));

export default customAxios;
