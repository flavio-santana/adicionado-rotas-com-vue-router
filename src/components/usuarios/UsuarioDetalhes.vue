<template>
    <h3 class="font-weight-light">Detalhes Sobre o Usuário</h3>
</template>

<script>
export default {
    //props: ['title','description'],
    data(){
        return {
            
            //title : 'Detalhes Sobre o Usuário',

            //description: 'Aqui você poderá visualizar os detalhes dos usuários com acesso ao site'
        }
    },
    metaInfo: {
      
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Detalhes Sobre o Usuário',
      
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
    created(){
        console.log('Parâmetros da rota: ', this.$route.params)
    }
}
</script>