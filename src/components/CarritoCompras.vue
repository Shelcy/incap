<template>
    <div class="col-sm-12 border border-secondary ">
        <h1 class="text-center">CARRITO</h1>
        <hr>
        <div class="row">
            <div class="col-5">
                
                    <h6>Producto</h6>
                    <hr>
               
            </div>
            
             
            <div class="col-4">
                
                    <h6 class="text-truncate">Descripción</h6>
                    <hr>
             
            </div>
            <div class="col-3">
               
                    <h6>Cantidad</h6>
                    <hr>
                
            </div>
        </div>
        <!-- ? START SHOPPING CART ITEMS -->
        <div class="col-md-12 cursosComprados">
        </div>
    <!-- ? END SHOPPING CART ITEMS -->

    <!-- START TOTAL -->
    <div class="row">
        
            <div class="d-flex align-items-center" >
                <p class="m-0 col-md-2 ">Total</p>
                <p class="ml-4 mb-0 valorCompraTotal">$0</p>
                
                <button class="btn col-md-3 btn-success ml-auto botonComprar" type="button" data-toggle="modal"
                    data-target="#comprarModal">Comprar</button>
            </div>
        
    </div>

    <!-- END TOTAL -->



    

    <!-- START MODAL COMPRA -->
    <div class="modal fade" id="comprarModal" tabindex="-1" aria-labelledby="comprarModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                
                <div class="modal-header">
                    <h5 class="modal-title" id="comprarModalLabel">Gracias por su compra</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    
                </div>
                <div id="carritoFacturar"></div>
                <div class="modal-body">
                    <p>Pronto recibirá su pedido</p>
                    <!-- TODO Productos comprados, fatura -->
                    <div>

                    </div>
                </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- END MODAL COMPRA -->




    </div>
</template>

<script>
    export default {
        name: 'CarritoCompras'
    }
</script>

<style>

.imagenCarritoCompra{
    width:50%;
    height: 50px;
    border-radius: 4%;
}
.inputNumero {
  width: 50px; 
  border: 1px solid rgb(176, 204, 19);
  border-radius: 5px;
  background: #eee;
  
}

.shopping-cart-total {
  min-height: 96px;
  background-color: palevioletred;
} 


</style>