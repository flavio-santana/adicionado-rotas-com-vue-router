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

      <!-- Nesse local que cada component será injetado -->
      <router-view></router-view>

    </div>
    
  </div>
</template>