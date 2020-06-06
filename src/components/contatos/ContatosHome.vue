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
    metaInfo: {
      
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Lista de contatos',
      
        // all titles will be injected into this template
        titleTemplate: '%s | Loja Haskell',
      
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
    components:{
        ContatosLista
    },
    props: ['busca']
}
</script>