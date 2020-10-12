<template>
  <div id="curcent">
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
            <img src="../../../assets/img/one.jpg" alt="" />
          </div>
          <div class="luckt">
            <img src="../../../assets/img/two.jpg" alt="" />
          </div>
          <div class="luckt">
            <img src="../../../assets/img/three.jpg" alt="" />
          </div>
          <div class="luckt">
            <img src="../../../assets/img/four.jpg" alt="" />
          </div>
          <div class="luckt">
            <img src="../../../assets/img/yxr05.jpg" alt="" />
          </div>
          <div class="luckt">
            <img src="../../../assets/img/yxr06.jpg" alt="" />
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
        if (a == -1140) {
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
  methods: {
    // right() {
    //   var a = $(".big-box").position().left;
    //   if(a == -380){
    //       return
    //   }
    //   a = a - 380;
    //   $(".big-box").animate({ left: a + "px" }, 500);
    // },
    // left() {
    //   var b = $(".big-box").position().left;
    //   if(b == 0){
    //       return
    //   }
    //   b = b + 380;
    //   $(".big-box").animate({ left: b + "px" }, 500);
    // }
  }
};
</script>

<style scoped>
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
  height: 540px;
  margin-right: 20px;
}
.luckt > img {
  height: 100%;
  width: 100%;
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
</style>
