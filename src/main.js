import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VeeValidate from "vee-validate";
import router from "./router";
import globalMixin from "@/mixins/global.js";
import "@/assets/styles/main.scss";

Vue.config.productionTip = false;

Vue.mixin(globalMixin);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
