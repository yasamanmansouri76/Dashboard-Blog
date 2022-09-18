import { api } from "@/services/interceptors";

export default {
  namespaced: true,
  state: {
    userToken: localStorage.getItem("token") || null,
    userInfo: {},
  },
  getters: {
    userToken(state) {
      return state.userToken;
    },
    userInfo(state) {
      return state.userInfo;
    },
    loggedIn(state) {
      return state.token !== null;
    },
  },
  mutations: {
    setUserToken(state, data) {
      state.userToken = data;
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },
  },
  actions: {
    initUser(context) {
      const token = localStorage.getItem("token");
      if (token) {
        context.commit("setUserToken", token);
      }
    },
    newUser(context, payload) {
      return api
        .post("/users", {
          user: payload,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.user.token);
          context.commit("setUserToken", response.data.user.token);
          return response;
        });
    },
    loginUser(context, payload) {
      return api
        .post("/users/login", {
          user: payload,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.user.token);
          context.commit("setUserToken", response.data.user.token);
        });
    },
    getUser(context) {
      return api.get("/user").then((response) => {
        context.commit("setUserInfo", response.data.user);
      });
    },
    logout(context) {
      localStorage.removeItem("token");
      context.commit("setUserToken", null);
      context.commit("setUserInfo", {});
    },
  },
};
