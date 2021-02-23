<template>
  <div id="app">
    <cabecera/>
    <br>
    <hr>
    <novedades/>
    <productos/>
    <br>
    <hr>
    <pie/>
    <notifications group="foo"/>
  </div>
</template>

<script>
import pie from './components/pie/pie.vue'
import cabecera from './components/cabecera/cabecera.vue'
import novedades from './components/novedades/novedades.vue'
import productos from './components/productos/productos.vue'

export default {
  name: 'App',
  components: {
    pie,    
    cabecera,
    novedades,
    productos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
