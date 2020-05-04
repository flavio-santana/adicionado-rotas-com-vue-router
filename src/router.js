import Vue from 'vue'
import VueRouter from 'vue-router' 

// Importanto components
import Home            from './views/Home.vue'
import Contatos        from './views/contatos/Contatos.vue'
import ContatoDetalhes from './components/contatos/ContatoDetalhes.vue'
import ContatosHome     from './components/contatos/ContatosHome.vue'

// 
import Usuarios        from './components/usuarios/Usuarios.vue'
import UsuarioDetalhes from './components/usuarios/UsuarioDetalhes.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    //mode:'hash', // com a # na url
    linkExactActiveClass:'active',
    routes: [
      { path : '/', component: Home },
      { 
        path : '/contatos', 
        component: Contatos,
        children:[
          { path : ':id', component: ContatoDetalhes }, 
          { path : '', component: ContatosHome }, 
        ] 
      }, // meusite.com/contatos 
       
      { path : '/usuarios', component: Usuarios }, // meusite.com/contatos 
      { path : '/usuarios/:id', component: UsuarioDetalhes }, // meusite.com/contatos 
    ]
  })