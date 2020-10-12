<template>
  <div id="heshun">
      <photo/>
      <city/>
      <cases/>
      <more/>
      <cast/>
      <curtt/>
      <fistent/>
  </div>
</template>

<script>
import photo from '../heShun/content/photo'
import city from '../heShun/content/city'
import cases from '../heShun/content/cases'
import cast from '../heShun/content/cast'
import more from '../heShun/content/more'
import fistent from '../fistent'
import curtt from '../heShun/content/curtt'
export default {
    components:{cases,photo,city,more,fistent,curtt,cast}
}
</script>

<style>

</style>