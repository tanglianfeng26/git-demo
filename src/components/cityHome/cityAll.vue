<template>
  <div id="city-all">
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
import photo from '../cityHome/content/photo'
import city from '../cityHome/content/city'
import cases from '../cityHome/content/cases'
import more from '../cityHome/content/more'
import fistent from '../fistent'
import curtt from '../cityHome/content/curtt'
import cast from '../cityHome/content/cast'
export default {
    components:{cases,photo,city,more,fistent,curtt,cast}
}
</script>

<style>

</style>