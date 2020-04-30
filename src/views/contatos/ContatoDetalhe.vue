<template>
    <div>
        <h3 class="font-weight-light">Detalhes sobre o contato</h3>
    
        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>

<script>
export default {
    methods:{
        voltar(event){
            this.$router.back()
        }
    }
}
</script>