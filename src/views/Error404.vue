<template>
    <div class="alert alert-danger">
        <h3 class="text-center">
            Error 404 - Page not found
        </h3>
        <p>Página não encontrada</p>
        <button 
            class="btn btn-secondary mb-4 mt-4"
            @click="$router.back()">
            Voltar
        </button>
    </div>
</template>