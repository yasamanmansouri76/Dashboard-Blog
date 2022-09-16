import api from "@/server.js";

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getArticles(context, payload) {
      return api
        .get("/articles", {
          params: payload,
        })
        .then((response) => response.data);
    },
    addArticle(context, payload) {
      return api
        .post("/articles", {
          article: payload,
        })
        .then((response) => response);
    },
    deleteArticle(context, payload) {
      return api.delete(`/articles/${payload}`).then((response) => response);
    },
    getArticleDetails(context, payload) {
      return api.get(`/articles/${payload}`).then((response) => response.data);
    },
    editArticle(context, payload) {
      return api
        .put(`/articles/${payload.slug}`, {
          article: payload.article,
        })
        .then((response) => response);
    },
  },
};
