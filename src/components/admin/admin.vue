<template>
  <div class="admin">
    <h1>Panel de administración</h1>
    <div class="admin-data">
      Nombre: <input v-model="nombre" type="text">
      Descripcion: <input v-model="descripcion" type="text">
      Stock: <input v-model="stock" type="number">
      Precio: <input v-model="precio" type="number">    
      Imagen: <input type="button" @click=subir value="Subir">
      <input type="file" ref="input1"
        @change="previewImage" accept="=image/*"
      > 
      <div v-if="imageData!=null">
        <img class="preview" :src="img1" height="169" width="257" alt="preview">
      </div>
    </div>
    <br>
    <button v-on:click="alta">Dar alta</button>
  </div>
</template>

<script lang="js">
import {db ,storage} from '../../db.js'
export default {
  name: 'admin',
  props:['nombre', 'descripcion','stock','precio','imagen'],
  mounted(){

  },
  data () {
    return {
      imageData:null,
      img1: null
    }
  },
  methods:{
    alta: function(){
      db.collection('productos').add({
        nombre: this.nombre,
        descripcion: this.descripcion ,
        stock: this.stock,
        precio: this.precio,
        imagen: this.imagen ,
        createdAt: Date.now()
      })
      this.nombre='';
      this.descripcion='';
      this.stock='';
      this.precio='';
    },
    baja: function(docu){
      db.collection('productos').doc(docu.id).delete()
    },
    previewImage: function(event){
      this.uploadValue=0;
      this.imageData=event.target.files[0];
      var reader= new FileReader();

      reader.onload = (e) =>{
        this.img1= e.target.result;
      }
      reader.readAsDataURL(this.imageData)
    },
    subir(){
      const storageRef= storage.ref(this.imageData.name).put(this.imageData);
      console.log(storageRef)
      console.log(this.imageData)

      storageRef.on('state_changed', snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        console.log("termina subida")
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
              console.log(url)
              this.imagen=url;
              this.img1=null;
              this.imageData=null;
              this.$notify({
                group: 'foo',
                title: 'Subida ok',
                type: 'success',
                text:'Imagen subida con éxito'
              });
            });
      }
      
      )



    } 
  },
  computed:{

  },
  firestore:{
    productos:db.collection('productos')
    //productos: db.collection('productos').where('stock','>=','20').orderBy('createdAt','desc').limit(3)
  }
}
</script>
<style scoped>
.admin{
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  padding: 5px;
}
.admin-data{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>