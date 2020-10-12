<template>
  <div id="curtt">
    <div class="container">
      
      <div class="row aet">
        <div class="big-box">
          <div class="luckt">
            <img src="../../../assets/img/图片01.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <h1 ><img @click="fat" src="../../../assets/img/加号 (1).png" alt=""></h1>
                <p>宝安科技创新展示馆</p>
                <div class="btm">
                  <img src="../../../assets/img/图片01.jpg" alt="">
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="luckt">
            <img src="../../../assets/img/图片02.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <h1 ><img @click="fat" src="../../../assets/img/加号 (1).png" alt=""></h1>
                <p>深圳智慧党建体验中心</p>
                <div class="btm">
                  <img src="../../../assets/img/图片02.jpg" alt="">
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="luckt">
            <img src="../../../assets/img/图片03.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <h1 ><img @click="fat" src="../../../assets/img/加号 (1).png" alt=""></h1>
                <p>珠海南屏党群展示中心</p>
                <div class="btm">
                  <img src="../../../assets/img/图片03.jpg" alt="">
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="luckt">
            <img src="../../../assets/img/图片01.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <h1 ><img @click="fat" src="../../../assets/img/加号 (1).png" alt=""></h1>
                <p>随便七七吧反正不好七</p>
                <div class="btm">
                  <img src="../../../assets/img/图片01.jpg" alt="">
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="luckt">
            <img src="../../../assets/img/图片02.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <h1 @click="fat">+</h1>
                <p>随便七七吧反正不好七</p>
                <div class="btm">
                  <img src="../../../assets/img/图片02.jpg" alt="">
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="luckt">
            <img src="../../../assets/img/图片03.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <h1 @click="fat">+</h1>
                <p>随便七七吧反正不好七</p>
                <div class="btm">
                  <img src="../../../assets/img/图片03.jpg" alt="">
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
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
    
  },
  methods:{
    fat(){
      $('.btm').show()
      $('body').css({
　　"overflow-x":"hidden",
　　"overflow-y":"hidden"
});
    },
    close(){
      $('.btm').hide()
      $('body').css({
　　"overflow-x":"auto",
　　"overflow-y":"auto"
});
    }
  }
};
</script>

<style scoped>
#curtt{
  margin-bottom: 100px;
}
.container {
  position: relative;
}
.aet {
  overflow: hidden;
  width: 1120px;
}
.big-box {
  /* width: 2800px; */
  display: flex;
  position: relative;
}
.luckt {
  width: 360px;
  /* height: 540px; */
  margin-right: 20px;
  position: relative;
}
.luckt>img {
  height: 100%;
  width: 100%;
}
.hide{
  display: none;
  width: 360px;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0,0,0,.55) url('../../../assets/img/重点案例的红线效果.png') no-repeat center;
  background-size: contain;
}
.hide>a{
  text-decoration: none;
  color: white;
  text-align: center;
}
h1{
  font-weight: 300;
  /* font-size: 150px!important; */
}
a p{
  font-size: 22px;
}
.luckt:hover .hide{
  display: block;
}
.btm{
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.9);
  z-index: 9999;
}
.btm>i{
  font-style: normal;
  position: absolute;
  right: 100px;
  top: 60px;
  font-size: 50px;
  font-weight: 400;
}
.btm img{
  margin: 26px auto;
  max-width: 1322px;
  max-height: 904px;
  width: 100%;
}
</style>
