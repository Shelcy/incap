<template>
  <div class="toast ml-auto bg-info fixed-top" role="alert" aria-live="assertive" aria-atomic="true"
      data-delay="1000">
      <div class="toast-header">
        <span>✅</span>
        <strong class="mr-auto ml-1 text-secondary">Curso en el carrito.</strong>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body text-white">
        Se agrego correctamente el curso al carrito.
      </div>
    </div>
</template>

<script>
export default {
name: 'Notificacion'
}
</script>

<style>

</style>