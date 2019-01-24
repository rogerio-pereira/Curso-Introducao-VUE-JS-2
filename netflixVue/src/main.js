import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//import App from './App.vue'
import Home from './paginas/Home.vue'
const Contato = {template: '<p>Pagina de Contato</p>'}
const SemPagina = {template: '<p>Esta página não existe!</p>'}

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/contato', component: Contato }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')
