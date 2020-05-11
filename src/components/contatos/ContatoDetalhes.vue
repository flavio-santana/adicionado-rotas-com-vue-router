<template>
    <div>
        <h3 class="font-weight-light">Detalhes Sobre o Contato com id: ( {{ id }} )</h3>
        <p>{{ parametros }}</p>
        <router-link
        :to="`/contatos/${id}/editar`"
        class="btn btn-primary">
        Editar
        </router-link>
    </div>
</template>

<script>
export default {
    //props:['id'],
    props:{
        id:{
            type: Number,
            required: true
        }
    },
    data(){
        return {
            parametros : this.$route.params
        }
    },
    /**
     * Essa guarda somente será executada quando a rota que renderiza 
     * esse component for alterada(parâmetro)
     */
    beforeRouteUpdate(to, from, next){

        console.log('beforeRouteUpdate')

        this.parametros = to.params

        next()

    }
}
</script>