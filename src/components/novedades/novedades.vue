<template>
  <div class="novedades">
    <h1>NOVEDADES</h1>
    <div v-for="novedad in novedades" v-bind:key="novedad.nombre+novedad.createdAt">
      <h3>{{novedad.nombre}}<br></h3>
      <img height="150" width="130" :src=novedad.imagen alt="">
      <br>
      Descripción:{{novedad.descripcion}}<br>
      Precio:{{novedad.precio}}
      Stock:{{novedad.stock}}<hr>
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

<style scoped></style>
