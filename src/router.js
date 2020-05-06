import Vue from 'vue'
import VueRouter from 'vue-router' 

// Importanto components
import Home            from './views/Home.vue'
import Contatos        from './views/contatos/Contatos.vue'
import Error404        from './views/Error404.vue'
import ContatoDetalhes from './components/contatos/ContatoDetalhes.vue'
import ContatosHome    from './components/contatos/ContatosHome.vue'
import ContatoEditar   from './components/contatos/ContatoEditar.vue'
import Error404Contatos  from './components/contatos/Error404Contatos.vue'

// Importanto components usuários
import Usuarios        from './components/usuarios/Usuarios.vue'
import UsuarioDetalhes from './components/usuarios/UsuarioDetalhes.vue'

//
Vue.use(VueRouter)

//
export default new VueRouter({
    mode:'history',
    //mode:'hash', // com a # na url
    linkExactActiveClass:'active',
    routes: [
      { path : '/', component: Home, alias : '/home' }, // meusite.com
      { 
        path : '/contatos', 
        component: Contatos,
        alias: '/meus-contatos',
        // Function mode 
        props:(route)=>{
          const busca = route.query.busca 
          return busca ? { busca } : {}
        },
        children:[
          { path : ':id', 
            component: ContatoDetalhes, 
            name: 'contato', 
            props: true
          }, // meusite.com/contatos/id 
          { 
            path : ':id/editar', 
            components: {
              default: ContatoEditar,
              'contato-detalhes': ContatoDetalhes
            },
            props:  {
              default:true,
              'contato-detalhes':true,
            }
          }, // meusite.com/contatos/id/editar
          { path : '', component: ContatosHome },
          { path : '/contatos*', component: Error404Contatos },  //especifico para contatos
        ] 
      }, // meusite.com/contatos 
       
      { path : '/usuarios', component: Usuarios }, // meusite.com/usuarios 
      { path : '/usuarios/:id', component: UsuarioDetalhes }, // meusite.com/usuarios/id 
      { path : '*', component: Error404 }
    ]
  })