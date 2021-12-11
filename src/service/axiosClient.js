import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
});
// instance.defaults.timeout = 2500;

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
