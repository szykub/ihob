import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import pl from './translations/pl';
import en from './translations/en';

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages: {
    pl,
    en,
  },
});

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
