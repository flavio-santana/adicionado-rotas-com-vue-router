<template>
    <div v-if="contato">
        <h3 class="class-font-weight-light">
            Nome: {{ contato.nome }}    
        </h3>

        <form @submit.prevent="salvar">

            <div class="form-group">
                <label>Nome</label>
                <input 
                    type="text"
                    class="form-control"
                    placeholder="Insira o nome"
                    v-model="contato.nome">
            </div>

            <div class="form-group">
                <label>E-mail</label>
                <input 
                    type="text"
                    class="form-control"
                    placeholder="Insira o e-mail"
                    v-model="contato.email">
            </div>

            <button 
                type="button"
                class="btn btn-secondary mt-4 mb-4 mr-2"
                @click="$router.back()">
                    Voltar
            </button>

             <button 
                type="submit"
                class="btn btn-success">
                    Salvar
            </button>

        </form>   
    </div>
</template>
<script>

//
import EventBus from './../../event-bus'

export default {
    
    props:['id'],
    data(){
        return {
            contato : undefined,
            estaCancelando : true
        }
    },
    beforeRouteEnter(to, from, next){
        next(vm => {
            //vm.contato = EventBus.buscarContato(vm.id)
            vm.contato = EventBus.buscarContato(+to.params.id)
        })
    },
    /**
     * a guarda de rota abaixo é executada, 
     * quando a rota é executada
     * 
     * Ela é invocada antes que o component seja criado
     * 
     */
    /*
    beforeRouteEnter(to, from, next){
        console.log('beforeRouteEnter')
        next()
    },
    */
    /**
     * Utilizada para previnir que um determinado usuário 
     * saia de uma determinada rota 
     */
    beforeRouteLeave(to, from, next){

        //console.log('beforeRouteLeave')
        //const confirmar = window.confirm('Deseja realmente sair?')       
        //next(confirmar)

        this.estaCancelando
            ? next(window.confirm('Deseja realmente sair?'))
            : next()
    },
    methods:{
        salvar(event){
            //
            EventBus.editarContato(this.contato)

            //
            this.estaCancelando = false

            //
            this.$router.push('/contatos')
        }
    }
}
</script>