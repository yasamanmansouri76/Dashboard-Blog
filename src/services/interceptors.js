import axios from "axios";
import store from "@/store";

export const api = axios.create({
  baseURL: `https://api.realworld.io/api/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const setup = () => {
  api.interceptors.request.use((config) => {
    const token = store.getters["auth/userToken"];
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (err) => {
      if (err.response && err.response.status >= 400) {
        const errors = err.response.data.errors;
        for (const e in errors) {
          store.dispatch("alert/showAlert", {
            title: "Error",
            message: e + " " + errors[e][0],
            type: "danger",
          });
        }
      } else if (err.response && err.response.status === 500) {
        store.dispatch("alert/showAlert", {
          title: "Error",
          message: "Server problems happened!",
          type: "danger",
        });
      } else {
        return Promise.reject(err);
      }
    }
  );
};
