<template>
  <div class="programasPage d-flex flex-wrap justify-content-around">
    <div class="toast ml-auto bg-info fixed-top" role="alert" aria-live="assertive" aria-atomic="true"
                    data-delay="1000">
                    <div class="toast-header">
                        <span>✅</span>
                        <strong class="mr-auto ml-1 text-secondary">Curso en el carrito.</strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body text-white">
                        Se agrego correctamente el curso al carrito.
                    </div>
                </div>
    <div class="col-sm-12 col-lg-9 bg-danger my-4">
      <h1>This is an about page</h1>
      <p>
        <button class="btn btn-outline-warning m-2 col-lg-5 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSincrono"
          aria-expanded="false" aria-controls="collapseSincrono">
          <img class="imagen " src="../assets/img/sincrona.jpg">
        </button>
        <button class="btn btn-outline-warning  m-2 col-lg-5 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAsincrono"
          aria-expanded="false" aria-controls="collapseAsincrono">
          <img class="imagen" src="../assets/img/asincrona.png">
          Cursos Asincronos
        </button>
      </p>
      <IniciarSesion></IniciarSesion>

    <CursosOferta></CursosOferta>
    </div>
    <div class=" col-sm-12 col-lg-3 carritoComprasContenedor my-4">
    <CarritoCompras></CarritoCompras>
    </div>
    
    
    
  </div>
</template>

<script>

import CursosOferta from '../components/CursosOferta.vue';
import CarritoCompras from '../components/CarritoCompras.vue';
import IniciarSesion from '../components/IniciarSesion.vue';
// import ProgramasOferta from '../components/ProgramasOferta.vue';
export default {
    name: "programas",
    components:{
      CursosOferta,
      CarritoCompras,
      IniciarSesion
      // ProgramasOferta
       
    },

    data() {   
      return {
        visible: true,
        
      };
    },
  };
</script>

<style scoped>


.imagen{
 
    width:100%;
    opacity: 0.7;
}

:hover.imagen{
    opacity: 1;
    
}
</style>