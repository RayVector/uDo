import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import 'es6-promise/auto';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n'
//STYLES
import './assets/styles/app.css'
import './assets/styles/themes.css'
import './assets/styles/animations.css'
import './assets/styles/medies.css'
//PWA
import './registerServiceWorker'
//PLUGINS
import i18n from './plugins/i18n'
import './plugins/hummer'
//OTHER
let VueTouch = require('vue-touch');
Vue.config.productionTip = false;
//USE
Vue.use(VueTouch, {name: 'v-touch'});
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);
//INITIAL
new Vue({
  store,
  render: h => h(App),
  i18n
}).$mount('#app');
