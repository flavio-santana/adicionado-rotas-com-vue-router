<template>
    <h3 class="font-weight-light">Detalhes Sobre o Contato ( {{ id }} )</h3>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
    watch:  {
        '$route'(to, from){
            this.id = to.params.id
        }
    },
    created(){
        console.log('Parâmetros da rota: ', this.$route.params)
    }
}
</script>