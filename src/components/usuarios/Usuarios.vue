<template>
    <UsuariosLista/>
</template>

<script>

import UsuariosLista from './UsuariosLista.vue';

export default {
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Usuários',
      // all titles will be injected into this template
      titleTemplate: '%s | Loja Haskell'
    },
    components:{
        UsuariosLista
    }
}
</script>

