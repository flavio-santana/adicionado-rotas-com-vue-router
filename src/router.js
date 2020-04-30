import Vue from 'vue'
import VueRouter from 'vue-router' 

// Importanto components
import Home from './views/Home.vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhe from './views/contatos/ContatoDetalhe.vue'

// 
import Usuarios from './components/usuarios/Usuarios.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    //mode:'hash', // com a # na url
    linkExactActiveClass:'active',
    routes: [
      { path : '/', component: Home },
      { path : '/contatos', component: Contatos }, // meusite.com/contatos 
      { path : '/contatos/:id', component: ContatoDetalhe }, // meusite.com/contatos 
      { path : '/usuarios', component: Usuarios }, // meusite.com/contatos 
    ]
  })