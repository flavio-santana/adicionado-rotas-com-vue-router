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
import Login from './views/login/Login.vue'

//
import EventBus from './event-bus'

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
      { path : '/login', component: Login }, // meusite.com
      { 
        path : '/contatos', 
        component: Contatos,
        alias: '/meus-contatos',
        //name: 'contatos',
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
            /**
             * Campo personalizado
             */
            meta : {requerAutenticacao : true},
            //path : ':id(\\d+)/editar/:opcional?', 
            //path : ':id(\\d+)/editar/:zeroOuMais*', 
            //path : ':id(\\d+)/editar/:umOuMais+',
            /**
             * a guarda abaixo, somente será acessada 
             * quando a rota editar for executada. 
             */ 
            beforeEnter(to, from, next){
              
              console.log('beforeEnter')
              
              next(true) // navegação continua

              //next(false) // navegação é bloqueada

              //next('/contatos') // redirecionando a navegação 

              //next({name:'contatos'}) // redirecionando a navegação

              //next({path:'contatos'}) // redirecionando a navegação 
              
              // if(to.query.autenticado === 'true'){
              //   return next() 
              // }
              // next('/contatos')

            }, 
            components: {
              default: ContatoEditar,
              'contato-detalhes': ContatoDetalhes
            },
            props:  {
              default:extrairParametroId,
              'contato-detalhes':extrairParametroId,
            }
          }, // meusite.com/contatos/id/editar
          { path : '', component: ContatosHome, name: 'contatos' },
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
  
  console.log('Requer autenticação', to.meta.requerAutenticacao)

  const estaAutenticado = EventBus.autenticado
  
  //console.log(to.matched)

  if(to.matched.some(rota => rota.meta.requerAutenticacao)){

    if(!estaAutenticado){
      next({
        path: '/login',
        query: {redirecionar: to.fullPath}
      })
      return
    }

  }

  next()
})


/**
 * Guarda global
 * Executada entes da rota ser executada (confirmada)
 */
router.beforeResolve((to, from, next) => {

  console.log('beforeResolve')

  next();
})

// criando guarda de rota global afterEach
router.afterEach ((to, from) => {
  console.log('afterEach')  
})


export default router 