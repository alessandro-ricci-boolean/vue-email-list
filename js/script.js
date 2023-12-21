const { createApp } = Vue;

createApp({
    data(){
        return{
            listaEmail: [

            ]
        }
    },
    methods:{

    },
    created(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response)=>{
            this.listaEmail.push(response.data.response)
        })
    }
}).mount("#app");