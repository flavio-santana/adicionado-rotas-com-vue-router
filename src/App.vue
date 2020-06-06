<template>
  <div id="app">
    
    <div class="jumbotron">
      <h1 class="display-4">Vue Router</h1>
      <hr>
      <p class="lead">Adicionando rotas a Single Page Applications no Vue</p>
    </div>

    <div class="container">

      <router-link 
        :to=" {path: '/' }" 
        class="btn btn-info mb-4 mr-2">
      Home
      </router-link>

      <router-link 
        to="/contatos" 
        class="btn btn-info mb-4 mr-2">
      Contatos
      </router-link>

      <router-link 
        to="/usuarios" 
        class="btn btn-info mb-4 mr-2">
      Usuarios
      </router-link>

      <!--Animando navegação com transition -->
      <transition name="slide" mode="out-in">     
        <router-view></router-view>
      </transition>

      <!-- Nesse local que cada component será injetado 
      <router-view></router-view>
      -->
      
    </div>
    
  </div>
</template>

<style scoped>
  
  .slide-enter, .slide-leave-to{
    transform: translate(-50px);
    opacity: 0;
  }

  .slide-enter-active, .slide-leave-active{
    transition: all 0.3s;
  }

</style>

<script>
  export default {
    name: 'App',
    metaInfo: {
      
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Loja Haskell',
      
        // all titles will be injected into this template
        //titleTemplate: '%s | Loja Haskell',
      
        //
        meta:[
            { 
                vmid: 'description', 
                name: 'description', 
                content: 'Aqui você poderá visualizar os detalhes dos usuários com acesso ao site' 
            },
            { 
                vmid: 'keywords', 
                name: 'keywords', 
                content: 'detalhes do usuário, visualizar detalhes, encontrar usuários' 
            }
        ],
        link: [
            {
                rel: 'canonical', href: 'https://www.my-site.com/my-special-page'
            }
        ]
    },
  }
</script>