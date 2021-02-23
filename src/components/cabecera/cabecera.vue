<template>
  <div class="cabecera">
    <div class="logo">
       <img src="../../assets/cola.png" height="69" width="69" class="logo-img">
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

<style scoped>
.cabecera{
  display: flex;
  
  align-items: center;
}
.logo-img{
  height:"69";
  width:"69";
}
</style>
