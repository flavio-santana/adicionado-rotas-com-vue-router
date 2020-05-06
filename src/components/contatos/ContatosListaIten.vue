<template>
    <li>
        <span>{{ contato.nome}}</span>
        
        <router-link 
            :to="{path: `/contatos/${contato.id}` }"
            class="btn btn-info btn-sm mt-2 mb-2 float-right">
            Detalhes
        </router-link>
        
        <!--
        <button
            class="btn btn-info btn-sm mt-2 mb-2 float-right"
            @click="verDatalhes">
            Detalhes
        </button>
        -->    

    </li>
</template>
<script>
export default {
    props:{
        contato:{
            type: Object,
            required: true
        }
    },
    methods:{
        verDatalhes(event){
            //this.$router.push(`/contatos/${this.contato.id}`)
            this.$router.push({name: 'contato', params: {id: this.contato.id } })
        }
    }
    
}
</script>