import Vue from 'vue'
import VueRouter from 'vue-router' 
import App from './App.vue'

// Importanto components
import Home from './views/Home.vue'
import Contatos from './views/contatos/Contatos.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path : '/', component: Home },
    { path : '/contatos', component: Contatos }, // meusite.com/contatos 
  ]
})

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
