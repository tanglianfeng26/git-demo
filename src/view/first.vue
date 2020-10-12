<template>
  <div>
    <!-- <carou-sel/> -->
    <vide/>
    <mains/>
    <cases/>
    <jieshao/>
    <userm/>
  </div>
</template>

<script>
// import CarouSel from './carousel'
import vide from './video'
import mains from './mains'
import cases from './cases'
import jieshao from './jieshao'
import userm from './userM'
export default {
  components:{
    vide,mains,cases,jieshao,userm
  }
}
</script>

<style scoped>
/* div {
  background-color: rgb(240, 150, 150);
  height: 2000px;
} */
</style>
