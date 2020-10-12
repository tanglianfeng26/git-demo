<template>
  <div id="more">
    <div class="container">
      <div class="row">
        <div class="d-flex w-100 justify-content-between">
          <div class="photo">
            <img src="../../../assets/img/111.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <p>示云科技——大数据可视化系统</p>
                <h1 ><img @click="fat" src="../../../assets/img/播放按钮.png" alt=""></h1>
                
                <div class="btm">
                  <video width="1400px" style="margin-top:100px" controls src="https://2020101.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E5%83%8F%E6%8A%95%E8%B5%84/%E7%A4%BA%E4%BA%91%E7%A7%91%E6%8A%80%E2%80%94%E2%80%94%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E7%B3%BB%E7%BB%9F%20-%20%E6%96%B0%E7%89%87%E5%9C%BA1.mp4"></video>
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="photo">
            <img src="../../../assets/img/112.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <p>用天文馆来看图表数据？<br/>可视化的傲娇打开方式！</p>
                <h1 ><img @click="fat" src="../../../assets/img/播放按钮.png" alt=""></h1>
                
                <div class="btm">
                  <video width="1400px" style="margin-top:100px" controls src="https://2020101.oss-cn-beijing.aliyuncs.com/%E5%BD%B1%E5%83%8F%E6%8A%95%E8%B5%84/%E7%94%A8%E5%A4%A9%E6%96%87%E9%A6%86%E6%9D%A5%E7%9C%8B%E5%9B%BE%E8%A1%A8%E6%95%B0%E6%8D%AE%EF%BC%9F%E5%8F%AF%E8%A7%86%E5%8C%96%E7%9A%84%E5%82%B2%E5%A8%87%E6%89%93%E5%BC%80%E6%96%B9%E5%BC%8F%20-%20%E6%96%B0%E7%89%87%E5%9C%BA.mp4"></video>
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="photo">
            <img src="../../../assets/img/113.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <p>未来的大数据</p>
                <h1 ><img @click="fat" src="../../../assets/img/加号 (1).png" alt=""></h1>
                
                <div class="btm">
                  <img src="../../../assets/img/113.jpg" alt="">
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
      $( 'video' ).trigger( 'pause' );
      $('body').css({
　　"overflow-x":"auto",
　　"overflow-y":"auto"
});
    }
  }
};
</script>

<style scoped>
#more {
  margin-bottom: 100px;
}
.photo {
  width: 370px;
  position: relative;
}
.photo > img {
  width: 370px;
  background-color: rgba(0, 0, 0, 0.15);
  
}
.photo:hover{
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}
.hide{
  display: none;
  width: 370px;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0,0,0,.55) url('../../../assets/img/红色线.png') no-repeat center;
  background-size: contain;
}
.hide a{
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1{
  font-weight: 300;
  font-size: 150px!important;
}
a p{
  font-size: 22px;
}
.photo:hover .hide{
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
