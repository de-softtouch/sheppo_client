import { axiosClient } from "./axiosClient";

const authService = {
  login: (email, password) => {
    return axiosClient.post(
      "/api/v1/public/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};
export default authService;
