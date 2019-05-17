import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import server from './service';
// import router from './router/index.js'
// import store from "./store";
import './lib/hotcss/hotcss.js'
import './fliter'
//
// Vue.config.devtools = true
// Vue.config.devtools = process.env.NODE_ENV === 'development'


// Vue.config.productionTip = false;

Vue.use(router)

Vue.prototype.$service = server

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
