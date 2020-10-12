<template>
  <div id="urban">
      <photo/>
      <city/>
      <cases/>
      <more/>
      <fivebutton/>
      <fistent/>
  </div>
</template>

<script>
import photo from '../urban/content/photo'
import city from '../urban/content/city'
import cases from '../urban/content/cases'
import more from '../urban/content/more'
import fivebutton from '../urban/content/fivebutton'
import fistent from '../fistent'
export default {
    components:{cases,photo,city,more,fistent,fivebutton}
}
</script>

<style>

</style>