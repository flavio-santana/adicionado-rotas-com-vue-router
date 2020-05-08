<template>
    <div>
        <h3 class="class-font-weight-light">
            Editar contato com id: {{ id }}    
        </h3>
        <button 
            class="btn btn-secondary mt-4 mb-4"
            @click="$router.back()">
            Voltar
        </button>
    </div>
</template>
<script>
export default {
    
    props:['id'],
    
    /**
     * a guarda de rota abaixo é executada, 
     * quando a rota é executada
     * 
     * Ela é invocada antes que o component seja criado
     * 
     */
    beforeRouteEnter(to, from, next){
        console.log('beforeRouteEnter')
        next()
    }
}
</script>