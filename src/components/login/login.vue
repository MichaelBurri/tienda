<template>
  <div >
    <div class="login">
    
    <div class="login-data">    
      <h2> Login</h2>
      Email:<input v-model="emailLogin" type="text"> <br>
      Contraseña:<input v-model="passLogin" type="password"> <br>
      <button v-on:click="loginEmail">Login</button>
      <hr>
      <button v-if="!autenticado" @click="loginPro('google')">Inicia con Google</button>
    </div>
      
    <div class="login-data"> 
      <h2> Registrarse</h2>
      Email:<input v-model="email" type="email"> <br>
      Contraseña:<input v-model="pass" type="password"> <br>
      <button v-on:click="crearEmail" @click="show">Registrarse</button>
    </div>
      
    
  </div>
  <div v-if="autenticado" class="login-data">
      
      <button @click="logout">Logout</button>
      <h1>Bienvenido</h1>      
      <admin />

    </div>
  </div>
  
</template>

<script lang="js">
import admin from '../admin/admin.vue';
import Firebase from '../../db.js';
  export default  {
    name: 'login',
    props: [],
    components:{
      admin
    },
    mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
    },
    data () {
      return {
        user: {
          loggedIn: false,
          data: {}
        },
        email:'',
        pass:'',
        emailLogin:'',
        passLogin:'',
      }
    },
    methods: {
      loginEmail: function () {
            Firebase.loginEmail(this.emailLogin, this.passLogin);
      },
      crearEmail: function () {
          if (this.email) {
              Firebase.crearEmail(this.email, this.pass);
          }
      },
      loginPro: function (provider) {
          Firebase.login(provider);
      },
      logout: function(){
        Firebase.logout();
      },
      show(){
        console.log(this.email);
        console.log(this.pass);
      }
      
    },
    computed: {
        autenticado(){
          return this.user.loggedIn
        }
    },
}


</script>

<style scoped lang="scss">
@import "./styles/login.scss";
</style>