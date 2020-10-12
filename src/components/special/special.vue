<template>
  <div id="special">
      <photo/>
      <city/>
      <cases/>
      <more/>
      <fivebutton/>
      <fistent/>
  </div>
</template>

<script>
import photo from '../special/content/photo'
import city from '../special/content/city'
import cases from '../special/content/cases'
import more from '../special/content/more'
import fivebutton from '../special/content/fivebutton'
import fistent from '../fistent'
export default {
    components:{cases,photo,city,more,fistent,fivebutton}
}
</script>

<style>

</style>