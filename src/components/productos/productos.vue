<template>
  <div>
    <h1>PRODUCTOS</h1>
    <div class="productos">
    
    <div v-for="producto in productos" v-bind:key="producto.nombre+producto.createdAt" class="producto">
      <h3>{{producto.nombre}}</h3><br>
      <img height="150" width="130" :src=producto.imagen alt="">
      <p>{{producto.descripcion}}<br></p> 
      Precio:{{producto.precio}}<br>
      Stock:{{producto.stock}} 
      
      <br>
    </div>
  </div>
  
     
  </div>
</template>

<script lang="js">
import {db} from '../../db.js'
export default {
  name: 'productos',
  props:[],
  mounted(){

  },
  data () {
    return {
      productos:[]
    }
  },
  methods:{

  },
  computed:{

  },
  firestore:{
    productos:db.collection('productos').orderBy('nombre','asc')
  }
}
</script>
<style scoped lang="scss">
@import "./styles/main.scss";
</style>
