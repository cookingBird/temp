import Vue from 'vue';
import App from './App.vue';
import router from './router';
import utils from "@/utils/glob";

Vue.config.productionTip = false;
Vue.use(utils);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
