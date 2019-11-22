import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import 'es6-promise/auto';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n'
import i18n from './plugins/i18n'

import './assets/styles/app.css'
import './assets/styles/medies.css'

import './registerServiceWorker'

import './plugins/hummer'

let VueTouch = require('vue-touch');
Vue.use(VueTouch, {name: 'v-touch'});
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueI18n);

new Vue({
  store,
  render: h => h(App),
  i18n
}).$mount('#app');
