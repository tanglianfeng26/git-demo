<template>
  <div id="mains">
      <div class="container">
          <div class="row">
              <div class="text-center w-100">
              <h3 class="h20">我们的服务</h3>
              <p class="p20">Our services</p>
              </div>
              <div class="col-12 ma-r text-center">
                  <div class="m175">
                      <router-link :to="{path:'/city'}"><img src="../assets/img/数字化图像图标.png" alt="x"></router-link>
                      <p class="font">数字化图像</p>
                      <p class="smor">Digital image</p>
                  </div>
                  <div class="m166">
                      <router-link :to="{path:'/urban'}"><img src="../assets/img/文化创意图标.png" alt="x"></router-link>
                      <p class="font">文化创意</p>
                      <p class="smor">Cultural creativity</p>
                  </div>
                  <div class="m166">
                      <router-link :to="{path:'/seign'}"><img src="../assets/img/禾顺学院图标.png" alt="x"></router-link>
                      <p class="font">禾顺学院</p>
                      <p class="smor">Heshun University</p>
                  </div>
                  <div>
                      <router-link :to="{path:'/mat'}"><img src="../assets/img/影像投资图标.png" alt="x"></router-link>
                      <p class="font">影像投资</p>
                      <p class="smor">Investment image</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #mains{
        padding: 100px 0px;
        background-color: #f9f9f9;
    }
    .h20{
        margin-bottom: 20px;
    }
    .p20{
        margin-bottom: 20px;
    }
    .ma-r{
        display: flex;
        margin-top: 80px;
        padding: 0px 90px;
    }
    .ma-r>div>a>img{
        transition: all 0.4s;
        cursor: pointer;
    }
    .ma-r>div>a>img:hover{
        transform: rotate(360deg);
    }
    @media screen and (max-width:767px){
        .m175{
        margin-right: 0px;
    }
    .m166{
        margin-right: 0px;
    }
    }
    .m175{
        margin-right: 175px;
    }
    .m166{
        margin-right: 166px;
    }
    .smor{
        font-size: 14px;
        margin-top: 12px;
    }
    img{
        width: 100px;
        height: 100px;
        margin-bottom: 40px;
    }
    .font{
        font-size: 18px;
    }
</style>