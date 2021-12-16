import axios from "axios";
import { axiosClient } from "./axiosClient";
import { getHeaders } from "./header";
const entitiesService = {
  fetchNewestProducts: async () => {
    const url = "/api/v1/public/products/newest";
    const data = await axiosClient.get(url);
    return data;
  },
  fetchCategories: async () => {
    const url = "/api/v1/public/categories";
    const data = await axiosClient.get(url);
    return data;
  },
  fetchUserAddresses: async () => {
    const url = "/api/v1/member/addresses";
    const data = await axiosClient.get(url, {
      headers: getHeaders(),
    });
    return data;
  },

  fetchCategories: async () => {
    const url = "/api/v1/public/categories";
    const data = await axiosClient.get(url);
    return data;
  },
};

export default entitiesService;
