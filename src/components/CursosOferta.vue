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

                        <img class="card-img-top imagenCurso d-inline-block align-self-center mx-2 "  v-bind:src="curso.imagen" alt="Card image cap"> 
                            <div class="card-body ">
                                <p class="card-text text-justify">{{curso.descripcion}}</p>
                                <p class="horarioDia">{{curso.dia}}</p>
                                <!-- <p class="horarioHora" v-bind:value="curso.hora">  6:00 Pm - 8:00 PM</p> -->
                                <p >Codigo: <span class="horarioHora">{{curso.hora}}</span></p>  

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

                    <img class="card-img-top imagenCurso d-inline-block align-self-center mx-2" v-bind:src="curso.imagen" alt="Card image cap"> 
                    <div class="card-body ">
                       <p class="card-text text-justify">{{curso.descripcion}}</p>
                                <p class="horarioDia">{{curso.dia}}</p>
                                <!-- <p class="horarioHora" v-bind:value="curso.hora">  6:00 Pm - 8:00 PM</p> -->
                                <p >Codigo: <span class="horarioHora">{{curso.hora}}</span></p>  

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
                        nombre: "Idiomas 2S",
                        descripcion: "Escuela de idiomas nivel 2S",
                        valor: "$59.400",
                        dia:"lunes",
                        hora:'0A1',
                        // imagen:'@/assets/img/industrial.png',
                        imagen:'https://img.freepik.com/vector-gratis/fondo-diseno-ingles_1010-577.jpg?size=338&ext=jpg'
                       
                    },
                    {
                        nombre: "Negocios 1S",
                        descripcion: "Escuela de negocios nivel 1S",
                        valor: "$39.500",
                        dia:"Martes",
                        hora:'1A1',
                        imagen:'https://www.incap.edu.co/images/logo/negocios.png'
                        
                    },
                    {
                        nombre: "Gastronomia 2S",
                        descripcion: "Escuela de gastonomia nivel 2S",
                        valor: "$63.200",
                        dia:"lunes",
                        hora:'0A1',
                        imagen:'https://www.incap.edu.co/images/logo/gastronomia.png'
                      
                    },
                    {
                        nombre: "Tecnologia 4S",
                        descripcion: "Escuela de tecnologia nivel 4S",
                        valor: "$23.800",
                        dia:"Viernes",
                        hora:'4A2',
                        imagen:'https://www.incap.edu.co/images/logo/tecnologia.png'
                        
                    },
                    {
                        nombre: "Salud 1S",
                        descripcion: "Escuela de salud nivel 1S",
                        valor: "$89.300",
                        dia:"Viernes",
                        hora:'4A1',
                        imagen:'https://www.incap.edu.co/images/logo/salud.png'
                     
                    },
                    {
                        nombre: "Salud 3S",
                        descripcion: "Escuela de salud nivel 3S",
                        valor: "$190.500",
                        dia:"Viernes",
                        hora:'4A1',
                        imagen:'https://www.incap.edu.co/images/logo/salud.png'
                     
                    },
                     {
                        nombre: "Industrial 2S",
                        descripcion: "Escuela de industrial nivel 2S",
                        valor: "$19.500",
                        dia:"Viernes",
                        hora:'0A1',
                        imagen:'https://www.incap.edu.co/images/logo/industrial.png'
                     
                    },
                    {
                        nombre: "Educación 1S",
                        descripcion: "Escuela de educación nivel 1S",
                        valor: "$19.500",
                        dia:"Viernes",
                        hora:'4A1',
                        imagen:'https://www.incap.edu.co/images/logo/educacion.png'
                     
                    },
                ],
                cursoAsincrono: [
                     {
                        nombre: "Gastronomia 2A",
                        descripcion: "Escuela de gastonomia nivel 2A",
                        valor: "$63.200",
                        dia:"lunes",
                        hora:'11A1',
                        imagen:'https://www.incap.edu.co/images/logo/gastronomia.png'
                      
                    },
                    {
                        nombre: "Tecnologia 4A",
                        descripcion: "Escuela de tecnologia nivel 4A",
                        valor: "$23.800",
                        dia:"Viernes",
                        hora:'12A2',
                        imagen:'https://www.incap.edu.co/images/logo/tecnologia.png'
                        
                    }
                    ,{
                        nombre: "Idiomas 3A",
                        descripcion: "Escuela de idiomas nivel 3A",
                        valor: "$59.400",
                        dia:"lunes",
                        hora:'9A1',
                        imagen:'https://img.freepik.com/vector-gratis/fondo-diseno-ingles_1010-577.jpg?size=338&ext=jpg'
            

                       
                    },
                    {
                        nombre: "Negocios 1A",
                        descripcion: "Escuela de negocios nivel 1A",
                        valor: "$39.500",
                        dia:"Martes",
                        hora:'10A1',
                        imagen:'https://www.incap.edu.co/images/logo/negocios.png'
                        
                    },
                   
                    {
                        nombre: "Salud 1A",
                        descripcion: "Escuela de salud nivel 1A",
                        valor: "$89.300",
                        dia:"Viernes",
                        hora:'13A1',
                        imagen:'https://www.incap.edu.co/images/logo/salud.png'
                     
                    },
                    {
                        nombre: "Salud 3A",
                        descripcion: "Escuela de salud nivel 3A",
                        valor: "$190.500",
                        dia:"Viernes",
                        hora:'13A1',
                        imagen:'https://www.incap.edu.co/images/logo/salud.png'
                     
                    },
                     {
                        nombre: "Industrial 2A",
                        descripcion: "Escuela de industrial nivel 2A",
                        valor: "$19.500",
                        dia:"Viernes",
                        hora:'14A1',
                        imagen:'https://www.incap.edu.co/images/logo/industrial.png'
                     
                    },
                    { 
                        nombre: "Educación 1A",
                        descripcion: "Escuela de educación nivel 1A",
                        valor: "$19.500",
                        dia:"Viernes",
                        hora:'15A1',
                        imagen:'https://www.incap.edu.co/images/logo/educacion.png'
                     
                    }
                ],
            }
        }
    };
</script>

<style scoped>
/* .programa{
    width: 46%;
    height: auto;
} */

.imagenCurso{
    width:35%;
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