// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store'
import api from './api'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Toasted from 'vue-toasted';

Vue.use(ElementUI);
Vue.use(Toasted)
Vue.prototype.$api = api;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
})
