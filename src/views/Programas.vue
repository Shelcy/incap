<template>
  <div class="programasPage d-flex flex-wrap justify-content-around">
    <div>
      <CarritoNotificacion></CarritoNotificacion>
    </div>

    <div class="col-md-12 m-0 p-0">
      <VideoInicio></VideoInicio>
    </div>

    <div>
      <BotonesCursos></BotonesCursos>
    </div>
    
    <!-- TODO Curso para comprar -->
    <div class="col-sm-12 col-lg-9  my-4">
      <IniciarSesion></IniciarSesion>
      <CursosOferta></CursosOferta>
    </div>
    <!-- Fin cursos para comprar -->

    <!-- TODO Carrito -->
    <div class=" col-sm-12 col-lg-3 carritoComprasContenedor my-4">
      <CarritoCompras></CarritoCompras>
    </div>
    <!-- Fin Carrito -->

    <div class="col-md-12 container-fluid m-0 p-0">
      <Footer></Footer>
    </div>

  
  </div>
</template>

<script>
  import CursosOferta from '../components/CursosOferta.vue';
  import CarritoCompras from '../components/CarritoCompras.vue';
  import IniciarSesion from '../components/IniciarSesion.vue';
  import Footer from '../components/Footer.vue';
  import VideoInicio from '../components/VideoInicio.vue';
  import CarritoNotificacion from '../components/CarritoNotificacion.vue';
  import BotonesCursos from '../components/BotonesCursos.vue';
  // import ProgramasOferta from '../components/ProgramasOferta.vue';
  export default {
    name: "programas",
    components: {
      CursosOferta,
      CarritoCompras,
      IniciarSesion,
      Footer,
      VideoInicio,
      CarritoNotificacion,
        BotonesCursos
      // ProgramasOferta

    },

    data() {
      return {
        visible: true,
      }
    }
  };
</script>

<style scoped>
 
</style>