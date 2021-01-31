
function inicializar(){ 
//TODO Traer los elementos de la compra
//TODO llamar los botones
const botonAnadir = document.querySelectorAll('.botonAnadir')
// console.log("botonAnadir", botonAnadir)

//TODO CLICK: 
botonAnadir.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', agregarCursoCarro);
})

const botonComprar = document.querySelector('.botonComprar')
botonComprar.addEventListener('click', comprar)


const cursosComprados = document.querySelector('.cursosComprados')


//TODO Trae el boton
function agregarCursoCarro(event) {
    const button = event.target;

    //TODO Traer todo el div con clase item  con closest
    const programa = button.closest('.programa')
    // console.log('programa', programa)

    const tituloCurso = programa.querySelector('.tituloCurso').textContent
    const precioCurso = programa.querySelector('.precioCurso').textContent
    const imagenCurso = programa.querySelector('.imagenCurso').src
    const horarioDia  = programa.querySelector('.horarioDia').textContent
    const horarioHora = programa.querySelector('.horarioHora').textContent
    // console.log(typeof(horarioDia))
    console.log(typeof(horarioDia), horarioHora)
    
    productoEnCarro(tituloCurso, precioCurso, imagenCurso, horarioDia, horarioHora);
}
var horario = [['', '', '', ''], ['', '', '', ''],['', '', '', ''], ['', '', '', ''],['', '', '', ''], ['', '', '', '']]

function productoEnCarro(tituloCurso, precioCurso, imagenCurso, horarioDia, horarioHora) {
    console.log(tituloCurso, precioCurso, imagenCurso, horarioDia, horarioHora)
    const horariosHora = cursosComprados.getElementsByClassName('horaCursoComprado')    

    horarioHoras = horarioHora.split('A')
    console.log(horarioHoras)

    let dia  = horarioHoras[0]
    let hora = horarioHoras[1]
    console.log(dia, hora)


    
    const titulosCursoComprado = cursosComprados.getElementsByClassName('tituloCursoComprado')
    console.log(horariosHora)  
    


    for (let i = 0; i < horariosHora.length; i++) {
    
        if(horariosHora[i].innerText === horario[dia][hora]  ){
                
            console.log('verifique su horario' , horario)
            return;
    
        }else{
            horario[dia].splice(hora, 1 , horariosHora[i].innerText)
            console.log('No encontro y se agrego',  horario, horariosHora[i].innerText)
        }

       
        
    }

for(let i = 0; i < titulosCursoComprado.length; i++){
    console.log(horario, horario[dia][hora] , horariosHora[i].textContent, horariosHora[i].innerText)

    // if((horariosHora[i].textContent == horario[dia][hora]) && (horario[dia][hora] !== '')){
    //     console.log('Revisa tu horario', horario[dia][hora], horario)
    //     return;
    // }else{
    //     horario.splice(horario[dia][hora]-1, 1, horariosHora[i].innerText ) 
    //     console.log(horario, 'se agrego')
    // }

    
    
      
    if((titulosCursoComprado[i].innerText === tituloCurso)  && (horariosHora[i].innerText == horario[dia][hora])){
        alert('El curso ya se encuentra en el carrito de compras')
        precioCurso = 0
        return;
    }

   


   
}
    


    const contenedorCarro = document.createElement('div')

    const contenidoCarro = `
    <div class="row contenedorCursosCarro">
        <div class="col-md-5">
            <div class=" align-items-center h-100 border-bottom pb-2 pt-3">
                <h6 class=" tituloCursoComprado mb-0">${tituloCurso}</h6>
                <img src=${imagenCurso} class="imagenCarritoCompra">
            </div>
        </div>
        <div class="col-4 ">
            <div class="align-items-center h-100 border-bottom  pt-3">
                <p class=" mb-0 ">${horarioDia}</p>
                <p class=" mb-0 horaCursoComprado">${horarioHora}</p> 
                <p class=" mb-0 precioCursoCarro">${precioCurso}</p>      
            </div>    
        </div> 
        <div class="col-3 ">
            <div class="d-flex p-0 justify-content-around align-items-center h-100 border-bottom ">
                <input class=" p-1 unidadesCurso" type="number" value="1">
                <button class=" p-1 btn btn-danger botonEliminar" type="button">X</button>
            </div>
        </div>
    </div>
   `
    $('.toast').toast('show');
    contenedorCarro.innerHTML = contenidoCarro
    cursosComprados.append(contenedorCarro)

    

    contenedorCarro.querySelector('.botonEliminar').addEventListener('click', eliminarCurso)
    contenedorCarro.querySelector('.unidadesCurso').addEventListener( 'change', contarCurso)


    precioTotalCompra()
}


//TODO Actualizar precio total
function precioTotalCompra(){
    let total = 0;

    const valorCompraTotal = document.querySelector('.valorCompraTotal');
    // console.log(valorCompraTotal)

    const contenedorCursosEnCarro = document.querySelectorAll('.contenedorCursosCarro');
    // console.log(contenedorCursosCarro)

    contenedorCursosEnCarro.forEach(contenedorCursosCarro =>{
       const precioCursosCarro = contenedorCursosCarro.querySelector('.precioCursoCarro')
    //    console.log(precioCursosCarro)

    //Elemento - Precio
    const precioCursoCarro = parseFloat(precioCursosCarro.textContent.replace('$', ''))
    // console.log(precioCursoCarro)

    
    const unidadesCursoContenedor = contenedorCursosCarro.querySelector('.unidadesCurso')
    const unidadesCurso = parseFloat(unidadesCursoContenedor.value)

    total = total + (precioCursoCarro *  unidadesCurso)
    //console.log(total, unidadesCurso)


})
    
valorCompraTotal.innerHTML = total.toFixed(3) + '$'
}


//TODO Borrar producto
function eliminarCurso(event){
    const botonEliminarCurso = event.target
    // console.log(botonEliminarCurso)
    botonEliminarCurso.closest('.contenedorCursosCarro').remove()
    precioTotalCompra();
}

//TODO Sumar producto
function contarCurso(event){
    const cantidadCurso = event.target
    // console.log(cantidadCurso)

    if (cantidadCurso.value <= 0){
        alert("Si quiere eliminar el curso presione el boton 'X' ")
        cantidadCurso.value = 1
    }else if(cantidadCurso.value > 1){
        alert('Solomante puede comprar un curso')
        cantidadCurso.value = 1
    } 
}

function comprar(){

    

    cursosComprados.innerHTML = ''
    precioTotalCompra();
}



//TODO Formulario

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{5,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    contrasena: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,10}$/ // 7 a 10 numeros.
}

const campos = {
    usuario: false,
    nombre: false,
    contrasena: false,
    correo: false,
    telefono: false
}


const validarFormulario = (e) => {
    // console.log(e.target.name);

    switch (e.target.name) {
        case "usuario":
            // console.log("Funciona");
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;

        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;

        case "contrasena":
            validarCampo(expresiones.contrasena, e.target, 'contrasena');
            validarContrasena2();
            break;

        case "contrasena2":
            validarCampo(expresiones.contrasena, e.target, 'contrasena2');
            validarContrasena2();
            break;

        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;

        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
    }
}


const validarCampo = (expresion, input, campo) => {
    //expresion = expresion regular
    //input = espacio
    //campo = id
    if (expresion.test(input.value)) {
        document.getElementById(`${campo}`).classList.remove('is-invalid');
        document.getElementById(`${campo}`).classList.add('is-valid');
        campos[campo] = true;


    } else {
        document.getElementById(`${campo}`).classList.add('is-invalid');
        document.getElementById(`${campo}`).classList.remove('is-valid');
        campos[campo] = false;
    }
}

const validarContrasena2 = () => {
    const inputContrasena = document.getElementById('contrasena');
    const inputContrasena2 = document.getElementById('contrasena2');

    if (inputContrasena.value !== inputContrasena2.value) {
        document.getElementById(`contrasena2`).classList.add('is-invalid');
        document.getElementById(`contrasena2`).classList.remove('is-valid');
        campos['contrasena'] = false;
    } else {
        document.getElementById(`contrasena2`).classList.remove('is-invalid');
        document.getElementById(`contrasena2`).classList.add('is-valid');
        campos['contrasena'] = true;

    }

}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // const terminos = document.getElementById('terminos');
   
    if (campos.usuario && campos.nombre && campos.contrasena && campos.correo && campos.telefono && terminos.checked) {
        console.log(campos.usuario)

        const usuario = document.getElementById('usuario').value
        console.log(usuario)

        const ingresarUsuario = document.getElementById('ingresarUsuario')
        ingresarUsuario.innerHTML = usuario +` <i id="imagenUsuario" class="fas fa-user-graduate"></i>`

        // const imagenUsuario = document.getElementById('imagenUsuario')
      


        formulario.reset();

        // document.getElementById('terminos').classList.remove('is-invalid');
        // document.getElementById('terminos').classList.add('is-valid');

    }
});







}
window.addEventListener('load', function(event) {
    inicializar();
});