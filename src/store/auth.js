import api from "@/server.js";

export default {
  namespaced: true,
  state: {
    userToken: "",
  },
  getters: {
    userToken(state) {
      return state.userToken;
    },
  },
  mutations: {
    setUserToken(state, data) {
      state.userToken = data;
    },
  },
  actions: {
    newUser(context, payload) {
      return api
        .post("/users", {
          user: payload,
        })
        .then((response) => {
          localStorage.setItem(
            "token",
            "Token" + " " + response.data.user.token
          );
          context.commit(
            "setUserToken",
            "Token" + " " + response.data.user.token
          );
        });
    },
  },
};
