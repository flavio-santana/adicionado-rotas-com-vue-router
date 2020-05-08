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
const extrairParametroId = route =>({
  //Convertento para inteiro
  id: +route.params.id
})

//
const router = new VueRouter({
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
          { 
            // fazendo validação com expressão regular
            path : ':id(\\d+)', 
            component: ContatoDetalhes, 
            name: 'contato', 
            props: extrairParametroId,
            /*
            props: route=> {
              return {
                //Convertento para inteiro
                id: +route.params.id
                //id: parseInt(route.params.id)
              }
            },
            */
            }, // meusite.com/contatos/id 
          { 
            path : ':id(\\d+)/editar',
            //path : ':id(\\d+)/editar/:opcional?', 
            //path : ':id(\\d+)/editar/:zeroOuMais*', 
            //path : ':id(\\d+)/editar/:umOuMais+', 
            components: {
              default: ContatoEditar,
              'contato-detalhes': ContatoDetalhes
            },
            props:  {
              default:extrairParametroId,
              'contato-detalhes':extrairParametroId,
            }
          }, // meusite.com/contatos/id/editar
          { path : '', component: ContatosHome },
          { path : '/contatos*', component: Error404Contatos },  //especifico para contatos
        ] 
      }, // meusite.com/contatos 
       
      { path : '/usuarios', component: Usuarios }, // meusite.com/usuarios 
      { path : '/usuarios/:id(\\d+)', component: UsuarioDetalhes }, // meusite.com/usuarios/id 
      { path : '*', component: Error404 }
    ]
})

// criando guarda de rota global beforeEach   
router.beforeEach ((to, from, next) => {
  console.log('beforeEach')
  next()
})

// criando guarda de rota global afterEach
router.afterEach ((to, from) => {
  console.log('afterEach')  
})


export default router 