<template>
  <div class="cabecera">
    <div class="logo icono">
       <img src="../../assets/cola.png" class="logo-img">
       <h1 class="heading-text">Refrescos S.A.</h1>
    </div>  
        
     
    <div>
      <login/>
    </div>
  </div>
  
</template>

<script>
import login from '../login/login.vue';
export default {
  name: 'cabecera',
  data () {
    return {}
  },
    components:{
      login
    }
}
</script>

<style scoped lang="scss">
@import "./styles/header.scss";


</style>
