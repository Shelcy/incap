<template>
    <div>
        <div class="home">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
<div class="modal-header">
        <!-- <h5 class="  modal-title">Registro</h5> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
                        <div class="modal-body ">
                            <div class="container text-dark font-weight-bold">
                                <div class="row my-3">
                                    <div class=" row p-2 ">
                                        <figure class="figure col-md-10 offset-md-1 imgLogo1">
                                            <img src="@/assets/img/incapp.png" alt="Logo incap" class="imgLogo"
                                                title="Logo incap"> 
                                        </figure>
                                    </div>
                                    <div class="col-lg-5 d-none d-lg-block imgGrande1">
                                        <figure class="figure ">
                                            <img src="@/assets/img/pexels-ketut-subiyanto-4349784.jpg"
                                                alt="Maestra y alumna" title="Imagen de maestra y alumna"
                                                class="imgGrande">
                                            <figcaption class="figure-caption text-center font-weight-bold text-dark">
                                                <i class="fa fa-camera"></i> Foto de Ketut Subiyanto en Pexels
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-lg-7">

                                        <form action="" id="formulario">
                                            <div class="row p-2">
                                                <div class="form-group col-md-6  col-sm-12">
                                                    <label for="usuario"> Usuario </label>
                                                    <input type="text" name="usuario" id="usuario"
                                                        placeholder="Ingrese usuario" title="Usuario"
                                                        class="form-control" required>
                                                    <div class="valid-feedback">Correcto</div>
                                                    <div class="invalid-feedback">El usuario debe ser de 5 a 16 digitos
                                                        y solo puede contener
                                                        números, letras y guiones. No se aceptan espacios ni caracteres
                                                        especiales.</div>
                                                </div>

                                                <div class="form-group col-md-6  col-sm-12" id="grupoNombre">
                                                    <label for="nombre">Nombre</label>
                                                    <input type="text" name="nombre" id="nombre"
                                                        placeholder="Ingrese nombre" title="Nombre" class="form-control"
                                                        required>
                                                    <div class="valid-feedback">Correcto</div>
                                                    <div class="invalid-feedback">El nombre debe ser de 5 a 40 digitos y
                                                        solo puede contener
                                                        letras y espacios.</div>
                                                </div>

                                            </div>

                                            <div class="row p-2">
                                                <div class="form-group col-md-6  col-sm-12">
                                                    <label for="contrasena">Ingrese una Contraseña</label>
                                                    <input type="password" name="contrasena" id="contrasena"
                                                        placeholder="Contraseña" title="Contraseña" class="form-control"
                                                        required>
                                                    <div class="valid-feedback">Contraseña segura</div>
                                                    <div class="invalid-feedback">Ingrese una contraseña valida.</div>
                                                </div>

                                                <div class="form-group col-md-6  col-sm-12">
                                                    <label for="confirmarContrasena">Confirmar Contraseña</label>
                                                    <input type="password" name="contrasena2" id="contrasena2"
                                                        placeholder="Confirme su contraseña" title="Confirme contraseña"
                                                        class="form-control" required>
                                                    <div class="valid-feedback">Las contraseñas coinciden correctamente
                                                    </div>
                                                    <div class="invalid-feedback">Las contraseñas no coinciden,
                                                        verifique nuevamente.</div>
                                                </div>
                                            </div>


                                            <div class="row p-2">
                                                <div class="form-group col-md-6  col-sm-12">
                                                    <label for="correo">Correo</label>
                                                    <input type="email" name="correo" id="correo"
                                                        placeholder="ejemplo@ejemplo.ejemplo" title="Correo"
                                                        class="form-control" required>
                                                    <div class="valid-feedback">Correcto.</div>
                                                    <div class="invalid-feedback">Recuerde que el correo debe llevar una
                                                        @ y una terminación de
                                                        dominio ejemplo: .com, .co, .edu. </div>
                                                </div>

                                                <div class="form-group col-md-6  col-sm-12">
                                                    <label for="telefono">Número télefono</label>
                                                    <input type="text" name="telefono" id="telefono"
                                                        placeholder="300-000-000" title="Número" class="form-control"
                                                        required>
                                                    <div class="valid-feedback">Correcto</div>
                                                    <div class="invalid-feedback">El número de teléfono debe tener 8 o
                                                        10 digitos</div>
                                                </div>
                                            </div>
                                            <div class="row p-2">
                                                <div class="group  ml-5">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" name="terminos"
                                                            id="terminos" required>
                                                        <label class="form-check-label" for="terminos">Acepto términos y
                                                            condiciones</label>
                                                        <!-- <div class="invalid-feedback">Debe de Aceptar los términos y condiciones.</div> -->
                                                    </div>
                                                </div>
                                            </div>


                                    <div class="row">
                                        <button type="button"
                                            class="btn btn-danger col-md-4 offset-md-2  col-sm-6 offset-sm-3 my-1"
                                            data-dismiss="modal">
                                            Cancelar </button>
                                        
                                       

                                        <button title="Enviar"
                                            class="btn btn-success col-md-4 offset-md-1  col-sm-6 offset-sm-3 my-1"
                                            type="submit"> Entrar </button> 
                                        <!-- <div class="valid-feedback" id="formularioLleno">enviadooooooooooooooo</div>
                                             <div class="invalid-feedback" id="formularioNoLleno">La contraseña no coincide</div> -->

                                    </div>
                                        </form>


                                    </div>
                                   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IniciarSesion'
    }
</script>

<style scoped>
    /* .imgGrande1{
    height: 500px;
} */
    .imgGrande {
        width: 100%;
        height: 100%;
        margin-top: 4%;
    }

    .imgLogo {
        width: 30%;
        height: 100%;
        margin: 2% 15%;
        /* background-color: aqua; */
    }

    .imgLogo1 {
        height: 150px;
    }


    .container {
        width: 90%;
        height: auto;
        /* background-color: rgba(163, 163, 163, 0.445); */
        background-color: rgba(255, 255, 255, 0.76);
        margin: auto;
    }

    .modal-content {

        background-image: url("../assets/img/fondo-verde-brilloso.jpg");
        /* background-color: rgba(23, 207, 23, 0.692); */
        background-size: 100% 100%;
        background-attachment: fixed;

    }

    form {
        box-sizing: border-box;
    }
</style>