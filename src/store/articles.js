import { api } from "@/services/interceptors";

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
      return api.post("/articles", {
        article: payload,
      });
    },
    deleteArticle(context, payload) {
      return api.delete(`/articles/${payload}`);
    },
    getArticleDetails(context, payload) {
      return api.get(`/articles/${payload}`).then((response) => response.data);
    },
    editArticle(context, payload) {
      return api.put(`/articles/${payload.slug}`, {
        article: payload.article,
      });
    },
  },
};
