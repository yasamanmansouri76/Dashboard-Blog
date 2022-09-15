import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth.js";
import articles from "./articles";
import tags from "./tags";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    articles,
    tags,
  },
});
