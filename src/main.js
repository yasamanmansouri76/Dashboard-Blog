import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VeeValidate from "vee-validate";
import router from "./router";
import store from "./store";
import globalMixin from "@/mixins/global.js";
import "@/assets/styles/main.scss";

Vue.mixin(globalMixin);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
