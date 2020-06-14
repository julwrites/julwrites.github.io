import Vue from 'vue';
import VueDarkMode from '@growthbunker/vuedarkmode'
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueDarkMode);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
