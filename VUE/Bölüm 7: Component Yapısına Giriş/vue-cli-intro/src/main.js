import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

//Global component tanımlaması(register)
//Vue.component("lamp-component", Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
