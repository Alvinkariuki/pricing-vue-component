import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './main.css'
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter)


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
