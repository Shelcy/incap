<template>
  <div class="">
   <div class="col-md-12 m-0 p-0">
      <VideoInicio></VideoInicio>
    </div>
   <div class="col-md-12 container-fluid m-0 p-0">
      <Footer></Footer>
    </div>

    <!-- <IniciarSesion></IniciarSesion> -->
    
  </div>

</template>

<script>
import Footer from '../components/Footer.vue'
import VideoInicio from '../components/VideoInicio.vue'
  // @ is an alias to /src
  // import IniciarSesion from '../components/IniciarSesion.vue'
  

  export default {
    name: 'Home',
    components:{  
        Footer,
        VideoInicio
      // IniciarSesion,
    },
  
  }
</script>

<style scoped>

 
</style>