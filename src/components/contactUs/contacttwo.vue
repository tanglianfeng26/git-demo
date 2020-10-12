<template>
  <div id="contacttwo">
    <div class="bj">
      <div class="container">
        <div
          class="objto row d-flex justify-content-lg-center text-center heig"
        >
          <div class="one col-3 active"><h3>公司简介</h3></div>
          <div class="two col-3"><h3>禾顺理念</h3></div>
          <div class="three col-3"><h3>禾顺核心价值观</h3></div>
          <div class="four col-3"><h3>荣誉奖项</h3></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
      $(window).scroll(function() {
      if ($(window).scrollTop() >= 723) {
        $(".bj").addClass("fd");
      } else {
        $(".bj").removeClass("fd");
      }
      var cc = $(window).scrollTop()
      if(cc < 1500){
          $('.one').addClass('active')
          $('.one').siblings().removeClass('active')
      }else if(cc < 2100){
          $('.two').addClass('active')
          $('.two').siblings().removeClass('active')
      }else if(cc < 2680){
          $('.three').addClass('active')
          $('.three').siblings().removeClass('active')
      }else if(cc < 3220){
          $('.four').addClass('active')
          $('.four').siblings().removeClass('active')
      }
    });
    $(".objto")
      .children()
      .click(function() {
        $(this).addClass("active");
        $(this)
          .siblings()
          .removeClass("active");
        var a = $(this).index();
        if(a == 0){
            $('body,html').animate({scrollTop:723},500)
        }else if(a == 1){
            $('body,html').animate({scrollTop:1881},500)
        }else if(a == 2){
            $('body,html').animate({scrollTop:2480},500)
        }else if(a == 3){
            $('body,html').animate({scrollTop:3060},500)
        }
      });
  },
};
</script>

<style scoped>
#contacttwo{
    height: 100px;
    width: 100%;
}
.bj {
  background-color: #f7f7f7;
}
.fd {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 888;
}
.active {
  color: #e62129;
  border-bottom: 1px solid #e62129;
}
h3 {
  font-weight: 520;
  height: 99px;
  line-height: 99px;
  margin: 0px;
}
.heig {
  height: 100px;
  align-items: center;
}
.col-3 {
  display: inline-block;
  cursor: pointer;
}
</style>
