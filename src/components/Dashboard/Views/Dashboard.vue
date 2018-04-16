<template>
  <div class="row">

    <div class="col-lg-12 col-md-12">
      <SubBoard></SubBoard>
      <Appo>

      </Appo>
    </div>
  </div>
</template>

<script>
  import Appo from './Clinic/Appo.vue'
  import SubBoard from './Clinic/SubBoard.vue'
  export default {
    components: {
      Appo,
      SubBoard
    }
  }
</script>

<style>

</style>
