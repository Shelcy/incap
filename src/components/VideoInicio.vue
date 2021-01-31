<template>
  <div>
       <div class="video">
        <video class="w-100" src="../assets/img/VídeoInstitucionalINCAP3.mp4" autoplay muted loop></video>
    </div>
  </div>
</template>

<script>
export default {
    name:'video'
}
</script>

<style>

.video{
  width: 100%;
  height: 759px;
  margin-top:-10% ;
  /* top:0%; */
  background-color: rgb(0, 0, 0);
  /* position: absolute; */
  /* z-index: -1; */
}

video{
  opacity: 0.7;
}
</style>