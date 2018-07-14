import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import App from './App'
import routerList from './routes'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter(routerList)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
