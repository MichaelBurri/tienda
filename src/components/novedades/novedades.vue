<template>
<div>
  <h1>NOVEDADES</h1>
  <div class="novedades">
    
    <div v-for="novedad in novedades" v-bind:key="novedad.nombre+novedad.createdAt" class="novedad">
      <h3>{{novedad.nombre}}<br></h3>
      <img height="150" width="130" :src=novedad.imagen alt="">
      <br>
      Descripción:{{novedad.descripcion}}<br>
      Precio:{{novedad.precio}}
      Stock:{{novedad.stock}}<hr>
    </div>
  </div>
</div>
  
</template>

<script>
import {db} from '../../db.js'
export default {
  name: 'novedades',
  data () {
    return {
      novedades:[]
    }
  },
  methods:{

  },
  computed:{

  },
  firestore:{
    novedades:db.collection('productos').orderBy('createdAt','desc').limit(3)
  }
}
</script>

<style scoped lang="scss">
@import "./styles/main.scss";
</style>
