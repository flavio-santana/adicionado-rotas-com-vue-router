<template>
    <div v-if="contato">
        <h3 class="font-weight-light">Nome: {{ contato.nome }}</h3>
        <p>E-mail: {{ contato.email }}</p>
        <button 
            class="btn btn-secondary mr-2" 
            @click="$router.back()">
                Voltar
        </button>

        <!--
        <h3 class="font-weight-light">Detalhes Sobre o Contato com id: ( {{ id }} )</h3>    
        <div style="height: 900px"></div>
        <p id="parametros">Parâmetros: {{ parametros }}</p>
        -->

        <router-link
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary">
                Editar
        </router-link>
    </div>
</template>

<script>

//import EventBus from './../../event-bus'
//Outra forma de imprtar
import EventBus from '@/event-bus'

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
            parametros : this.$route.params,
            contato : undefined
        }
    },
    /**
     * Recuperando os dados sem o vue router
     */
    created(){
        this.contato = EventBus.buscarContato(this.id)
    },
    /**
     * essa guarda de rota, é chamada antes da navegação ser confirmada. Ou seja, 
     * a instância desse component ainda não foi criada
     */
    /*
    beforeRouteEnter(to, from, next){
        next(vm => {
            //vm.contato = EventBus.buscarContato(vm.id)
            vm.contato = EventBus.buscarContato(+to.params.id)
        })
    },
    */
    /**
     * Essa guarda somente será executada quando a rota que renderiza 
     * esse component for alterada(parâmetro)
     */
    beforeRouteUpdate(to, from, next){

        console.log('beforeRouteUpdate')

        this.parametros = to.params

        this.contato = EventBus.buscarContato(+to.params.id)

        next()

    }
}
</script>