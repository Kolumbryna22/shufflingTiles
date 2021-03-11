import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app');
