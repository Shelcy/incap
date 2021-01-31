<template>
  <div id="">
    <!-- TODO Inicio Segundo Menu  -->
    <nav class="navbar  navbar-expand-lg justify-content-end p-0  ">
      <div class="collapse navbar-collapse  navbar navbar-dark " id="navbarNavDropdown">
        <a class="nav-link contenedorLogo" href="/"><img class="imagenLogo" src="@/assets/img/incapp.png"> </a>
      
        <ul class="navbar-nav nav2">
          <li class="nav-item ">
          <router-link to="/" class="navbar-brand btn btn-outline-primary mx-2 border-0" >Home</router-link> 
          </li>
           <li class="nav-item">
           <router-link class="navbar-brand btn btn-outline-primary mx-2 border-0 " to="/programas">Programas</router-link> 
          </li>
          <button type="button" id="ingresarUsuario" class=" navbar-brand btn btn-outline-success mx-2 border-0" data-toggle="modal" data-target=".bd-example-modal-lg">Ingresar <i id="imagenUsuario" class="fas fa-user-lock"></i></button>
        
        </ul>
      </div>

    </nav>

  
  </div>



  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar{
  /* background-image: url('./assets/img/pentagono_gris.jpg'); */
  background-attachment: fixed;
  background-size: 100% 100%;
  /* background-color: aliceblue; */
  z-index: 1;
}
.contenedorLogo{
  width: 8%;
  padding: 0 0;
  margin:  0 2% 0 3%;
  
}

.imagenLogo{
  width:100%;
}

.nav2{
  margin-left:11%;
}

.letra-menu{
    color:red;
}

</style>
