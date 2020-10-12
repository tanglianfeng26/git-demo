<template>
  <div id="min-width">
      <top/>
      <div class="zw"></div>
      <div class="position_y" @click="goTop">
      <img src="../assets/img/up.jpg" alt="x" />
    </div>
      <router-view></router-view>
      <foot/>
  </div>
</template>

<script>
import $ from 'jquery'
import top from './content/top'
import foot from './content/foot'
export default {
    components:{top,foot},
    data(){
      return{}
    },
    mounted: function() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      if($(window).scrollTop() >= 400){
        $('.position_y').fadeIn()
      } else{
        $('.position_y').fadeOut()
      }
    },
    goTop(){
      $('body,html').animate({scrollTop:0},600);
    }
  },
}
</script>

<style scoped>
#min-width{
  min-width: 1280px;
}
  .zw{
    height: 80px;
  }
  .position_y {
  position: fixed;
  top: 80%;
  right: 10%;
  width: 50px;
  height: 50px;
  display: none;
  border-radius: 50%;
  box-shadow: 1px 1px 1px -1px rgba(0,0,0,.2);
  z-index: 9999;
}
.position_y img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: .8;
}
</style>