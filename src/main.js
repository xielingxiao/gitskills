import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

import './registerServiceWorker'

import creatStore from './store/store'
import createRouter from './router/router'
import './assets/styles/global.styl'
import './assets/icons/svg.js'
import SvgIcon from './components/common/svg-icon'
import './plugins/element.js'
import api from './api'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.component('svg-icon', SvgIcon)

const router = createRouter()
const store = creatStore()

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
