<template>
  <div id="">
    <!-- TODO Inicio Segundo Menu  -->
    <nav class="navbar letra-subMenu navbar-expand-lg justify-content-end p-0  ">
      <div class="collapse navbar-collapse  navbar navbar-dark bg-primary" id="navbarNavDropdown">
        <a class="nav-link contenedorLogo" href="/"><img class="imagenLogo" src="@/assets/img/incap-logo.png"> </a>
      
        <ul class="navbar-nav nav2">
          <li class="nav-item ">
          <router-link to="/" class="navbar-brand" >Home</router-link> 
          </li>
           <li class="nav-item">
           <router-link class="navbar-brand" to="/programas">Programas</router-link> 
          </li>
          <button type="button" id="ingresarUsuario" class="btn btn-outline-light mx-2" data-toggle="modal" data-target=".bd-example-modal-lg">INGRESAR <i id="imagenUsuario" class="fas fa-user-lock"></i></button>
        
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
/* 
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.contenedorLogo{
  width: 12%;
}

.imagenLogo{
  width:100%;
} */

.contenedorLogo{
  width: 8%;
  padding: 0 0;
  margin:  0 2% 0 3%;
  
}

.imagenLogo{
  width:100%;
}

.nav1{
  /* margin-left: 15%; */
}

.nav2{
  margin-left:11%;
}

.letra-menu{
    color:red;
}

</style>
