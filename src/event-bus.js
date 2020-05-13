import Vue from 'vue'

export default new Vue({
    data:{
        autenticado:false,
        contatos : [

            {id: 1, nome: 'Isaac Newton', email: 'issac@mail.com'},
            {id: 2, nome: 'Albert Einstein', email: 'albert@mail.com'},
            {id: 3, nome: 'Stephen Hawking', email: 'stephen@mail.com'},
        ]
    },
    created(){
        this.$on('autenticar', (autenticado)=>{
            this.autenticado = autenticado
        })
    },
    methods:{
        buscarContato(id){
            
            //
            return Object.assign(this.contatos.find(c => c.id === id)) 
        },
        editarContato(contato){
            
            //
            const indice = this.contatos.findIndex(c => c.id === contato.id)
            
            //
            this.contatos.splice(indice, 1, contato)
        }
    }
})