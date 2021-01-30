function inicializar(){ 

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
        formulario.reset();

        // document.getElementById('terminos').classList.remove('is-invalid');
        // document.getElementById('terminos').classList.add('is-valid');

    }
});

}
window.addEventListener('load', function(event) {
    inicializar();
});

