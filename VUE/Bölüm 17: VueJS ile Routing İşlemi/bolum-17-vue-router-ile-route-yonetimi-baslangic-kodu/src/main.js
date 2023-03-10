import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history' //# ozelliğini kapatır. default mode 'hash'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
