<template>
    <li>
        <span>{{ usuario.nome}}</span>
        <button class="btn btn-info btn-sm mt-2 mb-2 float-right">Detalhes</button>
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