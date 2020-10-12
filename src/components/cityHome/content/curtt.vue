<template>
  <div id="curtt">
    <div class="container">
      <button class="left text-center">
        <img
          height="100%"
          src="../../../assets/img/banner左边切换按钮.png"
          alt=""
        />
      </button>
      <button class="right text-center">
        <img
          height="100%"
          src="../../../assets/img/banner右边切换按钮.png"
          alt=""
        />
      </button>
      <div class="row aet">
        <div class="big-box">
          <div class="luckt">
            <img src="../../../assets/img/001.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <h1 ><img @click="fat" src="../../../assets/img/加号 (1).png" alt=""></h1>
                <p>南沙档案资讯规划展示中心</p>
                <div class="btm">
                  <img src="../../../assets/img/001.jpg" alt="">
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="luckt">
            <img src="../../../assets/img/002.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <h1 ><img @click="fat" src="../../../assets/img/加号 (1).png" alt=""></h1>
                <p>宝安十三五规划展厅</p>
                <div class="btm">
                  <img src="../../../assets/img/002.jpg" alt="">
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="luckt">
            <img src="../../../assets/img/003.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <h1 ><img @click="fat" src="../../../assets/img/加号 (1).png" alt=""></h1>
                <p>南沙明珠湾开发展览中心</p>
                <div class="btm">
                  <img src="../../../assets/img/003.jpg" alt="">
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="luckt">
            <img src="../../../assets/img/更多案例只有4个图片.png" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <h1 ><img @click="fat" src="../../../assets/img/加号 (1).png" alt=""></h1>
                <p>深圳宝安区城市规划馆</p>
                <div class="btm">
                  <img src="../../../assets/img/更多案例只有4个图片.png" alt="">
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
    var time = 0;
    $(".left").click(function() {
      if (time == 0) {
        var b = $(".big-box").position().left;
        if (b == 0) {
          return;
        }
        b = b + 380;
        $(".big-box").animate({ left: b + "px" }, 500);
        time = 1;
        var index = setInterval(function() {
          time--;
          if (time == 0) {
            clearInterval(index);
          }
        }, 500);
      } else {
      }
    });
    $(".right").click(function() {
      if (time == 0) {
        var a = $(".big-box").position().left;
        if (a == -380) {
          return;
        }
        a = a - 380;
        $(".big-box").animate({ left: a + "px" }, 500);
        time = 1;
        var index = setInterval(function() {
          time--;
          if (time == 0) {
            clearInterval(index);
          }
        }, 500);
      } else {
      }
    });
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
  width: 2800px;
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
.hide a{
  text-decoration: none;
  color: white;
  text-align: center;
}
h1{
  font-weight: 300;
  font-size: 150px!important;
}
a p{
  font-size: 22px;
}
.luckt:hover .hide{
  display: block;
}
.left {
  position: absolute;
  top: 50%;
  left: -80px;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background-color: #000;
  border: 0px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
}
.right {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: -60px;
  width: 60px;
  height: 60px;
  background-color: #000;
  border: 0px;
  transform: translateY(-50%);
  padding: 8px;
  transition: all 0.2s;
  outline: none;
}
.left:hover{
  background-color: red;
}
.right:hover{
  background-color: red;
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
  margin: 80px auto;
  max-width: 1200px;
  max-height: 800px;
  width: 100%;
}
</style>
