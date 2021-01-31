<template>
    <div class="container">
<!-- TODO Asincrono productos -->
        <div class="collapse" id="collapseAsincrono">
                 <div class=" contenedorTitulo ">
                <h3 class="font-weight-bold letraTitulo">Cursos Asincronos</h3>
             </div>
         
            <div class="row d-flex flex-wrap justify-content-around" >
                <div class="card m-1 col-lg-5 programa p-0" v-for="(curso, index) in cursoAsincrono" :key="index">
                    <div class="card-header text-center tituloCurso">{{curso.nombre}}</div>
                   
                   <div class="textoCurso">

                        <img class="card-img-top imagenCurso d-inline-block" src="@/assets/img/sector3-2.png" alt="Card image cap"> 
                            <div class="card-body ">
                                <p class="card-text text-justify">{{curso.descripcion}}</p>
                                <p class="horarioDia">{{curso.dia}}</p>
                                <!-- <p class="horarioHora" v-bind:value="curso.hora">  6:00 Pm - 8:00 PM</p> -->
                                <p >Codigo: <span class="horarioHora">0A1</span>  </p>  

                                <h4 class="precioCurso">{{curso.valor}}</h4>

                            </div>
                        </div>
                  <button class="card-footer contenedorTitulo btn font-weight-bold botonAnadir">AÑADIR AL CARRITO</button>

                </div>
            </div>
        </div>
<!-- Fin Asincrno productos -->
<!-- TODO Sincrono productos -->
         <div class="collapse" id="collapseSincrono">
             <div class=" contenedorTitulo ">
                <h3 class="font-weight-bold letraTitulo">Cursos Sincronos</h3>
             </div>
         
            <div class="row d-flex flex-wrap justify-content-around" >
                <div class="card m-1 col-lg-5 programa p-0" v-for="(curso, index) in cursoSincrono" :key="index">
                    <div class="card-header text-center tituloCurso">{{curso.nombre}}</div>
                   
                   <div class="textoCurso">

                    <img class="card-img-top imagenCurso d-inline-block" src="@/assets/img/sector3-2.png" alt="Card image cap"> 
                    <div class="card-body ">
                       <p class="card-text text-justify">{{curso.descripcion}}</p>
                                <p class="horarioDia">{{curso.dia}}</p>
                                <!-- <p class="horarioHora" v-bind:value="curso.hora">  6:00 Pm - 8:00 PM</p> -->
                                <p >Codigo: <span class="horarioHora">0A1</span>  </p>  

                                <h4 class="precioCurso">{{curso.valor}}</h4>

                    </div>
                </div>
                  <button class="card-footer contenedorTitulo btn font-weight-bold botonAnadir">AÑADIR AL CARRITO</button>

                </div>
            </div>
        </div>
        <!-- Fin Sincrono productos -->
        
    </div>
</template>

<script>
    export default {
        name: "Cursos",
        data() {
            return {
                visible: true,
                cursoSincrono: [{
                        nombre: "Sincrono1",
                        descripcion: "tururururru",
                       
                    },
                    {
                        nombre: "Sincrono2",
                        descripcion: "tururururru",
                        valor: "$19.500",
                        
                    },
                    {
                        nombre: "Sincrono3",
                        descripcion: "tururururru",
                        valor: "$19.500",
                      
                    },
                    {
                        nombre: "Sincrono4",
                        descripcion: "tururururru",
                        valor: "$19.500",
                        
                    },
                    {
                        nombre: "Sincrono5",
                        descripcion: "tururururru",
                        valor: "$19.500",
                     
                    },
                ],
                cursoAsincrono: [{
                        nombre: "Asincrono1",
                        descripcion: "tururururru",
                        valor: "$19.500",
                        dia:"lunes",
                        hora:'1'
                    },
                    {
                        nombre: "Asincrono2",
                        descripcion: "tururururru",
                        
                         valor: "$500.000",
                        dia:"lunes",
                        hora:'2'
                    },
                    {
                        nombre: "Asincrono3",
                        descripcion: "tururururru",
                        valor: "$19.500"
                    },
                ],
            };
        },
    };
</script>

<style scoped>
/* .programa{
    width: 46%;
    height: auto;
} */

.imagenCurso{
    width:50%;
    height: auto;
}

.textoCurso{
    width:100%;
    display:inline-flex;
}

.contenedorTitulo{
    background-color: rgb(86, 191, 199);
}

.letraTitulo{
    font-size: 4rem;
}
</style>