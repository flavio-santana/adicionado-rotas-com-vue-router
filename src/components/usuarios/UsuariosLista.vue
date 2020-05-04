<template>
    
    <div>
        <h3 class="font-weight-light">Usuarios</h3>
        <hr>
        <ul class="list-group" v-if="usuarios.length > 0">
            <UsuarioListaIten
                class="lista-group-item"
                v-for="usuario in usuarios"
                :key="usuario.id"
                :usuario="usuario"/>
        </ul>        

        <p v-else>Nenhum usuário cadastrado.</p>

        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>

    </div>
    
</template>
<script>

import UsuarioListaIten from './UsuariosListaIten.vue'

export default {
    components:{
        UsuarioListaIten
    },
    data(){
        return {
            usuarios:[
                {id: 1, nome: 'Isaac Newton', email: 'issac@mail.com'},
                {id: 2, nome: 'Albert Einstein', email: 'albert@mail.com'},
                {id: 3, nome: 'Stephen Hawking', email: 'stephen@mail.com'},
                {id: 4, nome: 'Xpto', email: 'xpto@mail.com'},
            ]
        }
    },
    methods:{
        voltar(event){
            this.$router.back()
        }
    }
}
</script>