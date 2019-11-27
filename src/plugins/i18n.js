import Vue from 'vue'
import Vuex from 'vuex';
import VueI18n from 'vue-i18n'

Vue.use(Vuex);
Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context('@/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key)
    }
  });
  return messages
}

export default new VueI18n({
  locale: getLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || navigator.language.substring(0,2),
  messages: loadLocaleMessages()
})

// activeLanguage
function getLocale() {
  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', navigator.language.substring(0,2));
  } else {
    return localStorage.getItem('lang');
  }
}