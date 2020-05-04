<template>
    <h3 class="font-weight-light">Detalhes Sobre o Usuário</h3>
</template>

<script>
export default {
    created(){
        console.log('Parâmetros da rota: ', this.$route.params)
    }
}
</script>