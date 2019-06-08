<template>
  <div>
    <h1>Pagina de nando</h1>
    {{texto}}
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    created(){
      axios.get('http://localhost:3000/datos')
      // axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log("exitosos: ",response.data)
        const objeto = response.data
        console.log('objeto: ',objeto)
        console.log('string : ',JSON.stringify(response.data))
        this.texto = objeto.texto
      })
      .catch(err=>console.log('error'))
    },
    data() {
      return {
        texto:''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>