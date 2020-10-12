<template>
  <div id="brand">
    <div class="beijing"></div>
    <curter/>
  </div>
</template>

<script>
import curter from '../brandCase/curter/curter'
export default {
  components:{curter}
}
</script>

<style scoped>
  .beijing{
    height: 720px;
    background: url('../../assets/img/banner33.jpg') no-repeat center;
  }
</style>