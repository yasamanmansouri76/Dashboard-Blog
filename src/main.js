import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VeeValidate from "vee-validate";
import router from "./router";
import store from "./store";
import globalMixin from "@/mixins/global.js";
import alertManager from "@/mixins/alert-manager.js";
import "@/assets/styles/main.scss";
import { setup } from "./services/interceptors.js";

Vue.mixin(globalMixin);
Vue.mixin(alertManager);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
});

const token = localStorage.getItem("token");
if (token) {
  store.commit("auth/setUserToken", token);
}

setup();

router.beforeEach((to, from, next) => {
  const token = store.getters["auth/userToken"];
  const needAuthentication = to.matched.some(
    (record) => record.meta.requiresAuth
  );
  if (needAuthentication && !token) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
