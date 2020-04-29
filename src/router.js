import Vue from 'vue'
import VueRouter from 'vue-router' 

// Importanto components
import Home from './views/Home.vue'
import Contatos from './views/contatos/Contatos.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    //mode:'hash', // com a # na url
    routes: [
      { path : '/', component: Home },
      { path : '/contatos', component: Contatos }, // meusite.com/contatos 
    ]
  })