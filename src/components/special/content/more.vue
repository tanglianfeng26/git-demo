<template>
  <div id="more">
    <div class="container">
      <div class="row">
        <div class="d-flex w-100 justify-content-between">
          <div class="photo">
            <img src="../../../assets/img/456.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <p>仓颉小镇宣传片</p>
                <h1 ><img @click="fat" src="../../../assets/img/播放按钮.png" alt=""></h1>
                
                <div class="btm">
                  <video width="1400px" style="margin-top:100px" controls src="https://2020101.oss-cn-beijing.aliyuncs.com/%E7%89%B9%E8%89%B2%E5%B0%8F%E9%95%87%E4%BA%A7%E4%B8%9A%E5%9B%AD/%E4%BB%93%E9%A2%89%E5%B0%8F%E9%95%87%E5%AE%A3%E4%BC%A0%E7%89%87.mp4"></video>
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="photo">
            <img src="../../../assets/img/467.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <p>大数据产业园宣传片</p>
                <h1 ><img @click="fat" src="../../../assets/img/播放按钮.png" alt=""></h1>
                
                <div class="btm">
                  <video width="1400px" style="margin-top:100px" controls src="https://2020101.oss-cn-beijing.aliyuncs.com/%E7%89%B9%E8%89%B2%E5%B0%8F%E9%95%87%E4%BA%A7%E4%B8%9A%E5%9B%AD/%E5%A4%A7%E6%95%B0%E6%8D%AE%E4%BA%A7%E4%B8%9A%E5%9B%AD%E5%AE%A3%E4%BC%A0%E7%89%87.mp4"></video>
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="photo">
            <img src="../../../assets/img/678.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <p>珠海格力三溪小镇展厅</p>
                <h1 ><img @click="fat" src="../../../assets/img/加号 (1).png" alt=""></h1>
                
                <div class="btm">
                  <img src="../../../assets/img/678.jpg" alt="">
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
