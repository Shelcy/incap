<template>
  <div class="col-md-12 titulo bg-dark">
      <h1 class="titulo-programas p-4 font-weight-bold">Nuestros Programas</h1>
      <img class="m-2 " v-for="(programa, index) in programas" :key="index" v-bind:src="programa.imagen" />


      <div class="d-flex justify-content-around my-3">


        <button class="btn btn-outline-prymary border-0 m-2 col-md-4 p-0 h-100" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseSincrono" aria-expanded="false" aria-controls="collapseSincrono">
          <h3 class="letra-primera font-weight-bold">
            Cursos <span class="subTitulo">Sincronos</span>
          </h3> <img class="imagen mt-4 w-100 "
            src="@/assets/img/sincrona.jpg">
        </button>


        <button class="btn btn-outline border-0  m-2 col-md-4 p-0 h-100" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseAsincrono" aria-expanded="false" aria-controls="collapseAsincrono">
          <h3 class="letra-primera font-weight-bold">
            Cursos <span class="subTitulo">Asincronos</span>
          </h3> <img class="imagen mt-4 w-100 "
            src="@/assets/img/asincrona.jpg">

        </button>
      </div>
    </div>
    

</template>

<script>
export default {
    name: 'BotonesCursos',
 data() {
      return {
        programas: [{
            nombre: 'Idiomas',
            imagen: 'https://www.incap.edu.co/images/logo/idiomas-blanco.png'
          },
          {
            nombre: 'Negocios',
            imagen: 'https://www.incap.edu.co/images/logo/negocios-blanco-p.png'
          },
          {
            nombre: 'Industrial',
            imagen: 'https://www.incap.edu.co/images/logo/industrial-blanco-p.png'
          },
          {
            nombre: 'Tecnologia',
            imagen: 'https://www.incap.edu.co/images/logo/tecnologia-blanco-p.png'
          },

          {
            nombre: 'Gastronomia',
            imagen: 'https://www.incap.edu.co/images/logo/gastronomia-blanco-p.png'
          },

          {
            nombre: 'Salud',
            imagen: 'https://www.incap.edu.co/images/logo/salud-blanco-p.png'
          },

          {
            nombre: 'Educación',
            imagen: 'https://www.incap.edu.co/images/logo/aipi-blanco-p.png'
          },

          {
            nombre: 'Diseño',
            imagen: 'https://www.incap.edu.co/images/logo/diseno-blanco-p.png'
          },
        ]

      };
    },
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

  .subTitulo {
    font-family: 'Satisfy', cursive;
    color: antiquewhite;


  }

  .letra-primera {
    margin-bottom: -5%;
    color: rgb(86, 191, 199);

  }

  .imagen {
    opacity: 0.7;
    height: 200px;

  }


  :hover.imagen {
    opacity: 1;

  }

  .titulo {
    /* background-color: rgb(42, 185, 49); */
    margin-top: -7%;
  }



  .titulo-programas {
    font-size: 6rem;
    color: rgb(86, 191, 199);
  }
</style>

