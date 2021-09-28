import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import VueI18n from 'vue-i18n'
//
Vue.use(VueI18n)

// Ready translated locale messages
const messages = {
    en: {
      message: {
        hello: 'hello',
        contact_us: 'contact us',
        name: "name",
        phone: "phone",
        countries: "countries",
        text: "text",
        send: "send",
        dummy_footer: "dummy footer",
        home: "home",
        log_in: "log in",
        home_title: "home page title",
        home_content: "this is the home page content",
        password: "password",
        close:"close",
        english: "english",
        turkish: "turkish"
      }
    },
    tr: {
      message: {
        hello: 'selam',
        contact_us: 'Bizimle İletişime Geçin',
        name: "isim",
        phone: "cep telefonu",
        countries: "ülkeler",
        text: "mesaj",
        send: "gönder",
        dummy_footer: "uydurma footer",
        home: "Ana Sayfa",
        log_in: "giriş yap",
        home_title: "ana sayfa başlığı",
        home_content: "ana sayfa içeriği",
        password: "şifre",
        close:"kapat",
        english: "ingilizce",
        turkish: "türkçe"
      }
    }
  }
  
  // Create VueI18n instance with options
  const i18n = new VueI18n({
    locale: 'tr', // set locale
    messages, // set locale messages
  })
  

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
