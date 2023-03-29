import Vue from 'vue'
import App from './App.vue'
import store from './store';
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false;
Vue.config.devtools = true
new Vue({
  store, VueCarousel,
  render: h => h(App),
}).$mount('#app')
