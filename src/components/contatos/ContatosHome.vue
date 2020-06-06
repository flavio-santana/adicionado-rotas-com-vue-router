<template>
    <!--
    <div>
        <h3 class="font-height-light">
            Página inicial da lista de contatos
        </h3>
        <p>
            Seção destina para visualização de detalhes e edição dos contatos
        </p>
    </div>
    -->
    <ContatosLista :busca="busca"/>

</template>

<script>

import ContatosLista from './ContatosLista.vue';

export default {
    components:{
        ContatosLista
    },
    props: ['busca']
}
</script>