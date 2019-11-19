import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import 'es6-promise/auto';
import Vuex from 'vuex';

import './assets/styles/app.css'
import './assets/styles/medies.css'
import './registerServiceWorker'

import './plugins/hummer'

let VueTouch = require('vue-touch');
Vue.use(VueTouch, {name: 'v-touch'});
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.use(Vuex);


new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
