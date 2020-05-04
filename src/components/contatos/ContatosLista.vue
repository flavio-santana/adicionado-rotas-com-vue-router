<template>
    
    <div>
        <h3 class="font-weight-light">Contatos</h3>
        <hr>
        
        <ul class="list-group" v-if="contatos.length > 0">
            <ContatoListaIten
                class="lista-group-item"
                v-for="contato in contatos"
                :key="contato.id"
                :contato="contato"/>
        </ul>        

        <p v-else>Nenhum contato cadastrado.</p>

        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>

    </div>
    
</template>
<script>

import ContatoListaIten from './ContatosListaIten.vue'

export default {
    components:{
        ContatoListaIten
    },
    data(){
        return {
            contatos:[
                {id: 1, nome: 'Isaac Newton', email: 'issac@mail.com'},
                {id: 2, nome: 'Albert Einstein', email: 'albert@mail.com'},
                {id: 3, nome: 'Stephen Hawking', email: 'stephen@mail.com'},
            ]
        }
    },
    methods:{
        voltar(event){
            //this.$router.push('/')
            //this.$router.push({path: '/'})
            //this.$router.go(2)
            //this.$router.go(-3)
            //this.$router.forward()
            this.$router.back()
        }
    }
}
</script>