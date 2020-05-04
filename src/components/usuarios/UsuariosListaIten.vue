<template>
    <li>
        <span>{{ usuario.nome}}</span>
        
        <router-link 
            :to="`/usuarios/${usuario.id}`"
            class="btn btn-info btn-sm mt-2 mb-2 float-right">
            Detalhes
        </router-link>

    </li>
</template>
<script>
export default {
    props:{
        usuario:{
            type: Object,
            required: true
        }
    }
    
}
</script>