import Vue from 'vue'
import App from './App.vue'
import store from './store';
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false;
Vue.config.devtools = true;

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});
new Vue({
  store,
  VueCarousel,
  render: h => h(App),
}).$mount('#app')
