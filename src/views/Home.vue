<template>
  <div class="">
    <div class="morchis">
    </div>

    <IniciarSesion></IniciarSesion>
  </div>

</template>

<script>
  // @ is an alias to /src
  import IniciarSesion from '../components/IniciarSesion.vue'

  export default {
    name: 'Home',
    components: {
      IniciarSesion,
    }
  }
</script>
<style scoped>
  .morchis {
    width: 100%;
    height: 300px;
    background-color: yellow;
  }
</style>