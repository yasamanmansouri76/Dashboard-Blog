import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth.js";
import articles from "./articles";
import tags from "./tags";
import alert from "./alert";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    articles,
    tags,
    alert,
  },
});
