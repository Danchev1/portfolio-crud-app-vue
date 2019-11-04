import Vue from "vue";
/* import BootstrapVue from 'bootstrap-vue'; */
import {
  LayoutPlugin,
  CardPlugin,
  JumbotronPlugin,
  NavPlugin,
  ButtonPlugin,
  FormInputPlugin
} from "bootstrap-vue";

import App from "@/App.vue";
import router from "@/router/router";
import "@/assets/scss/main.scss";

Vue.use(LayoutPlugin);
Vue.use(CardPlugin);
Vue.use(JumbotronPlugin);
Vue.use(NavPlugin);
Vue.use(ButtonPlugin);
Vue.use(FormInputPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
