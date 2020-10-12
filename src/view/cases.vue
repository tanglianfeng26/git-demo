<template>
  <div id="cases">
    <div class="container">
      <div class="row">
        <div class="m40 text-center w-100 col-12">
          <h1 class="m20">经典案例</h1>
          <p class="m20">Classic cases</p>
        </div>
        <div class="c-ddd">
          <div class=""><img src="../assets/img/文化墙.jpg" alt="x" />
          <div class="bg-box">
            <h4 style="padding-bottom: 10px;border-bottom: 2px solid white; color: white;text-align: center">禁止浪费餐饮文化墙设计</h4>
            </div>
          </div>
          <div class="you"><img src="../assets/img/logo.jpg" alt="x" />
          <div class="bg-box">
            <h4 style="padding-bottom: 10px;border-bottom: 2px solid white; color: white;text-align: center">大山房LOGO设计</h4>
            </div>
          </div>
          <div class=""><img src="../assets/img/画册.jpg" alt="x" />
          <div class="bg-box">
            <h4 style="padding-bottom: 10px;border-bottom: 2px solid white; color: white;text-align: center">中国传统文化博曶行勤</h4>
            </div>
          </div>
          <div class=""><img src="../assets/img/品牌设计.jpg" alt="x" />
          <div class="bg-box">
            <h4 style="padding-bottom: 10px;border-bottom: 2px solid white; color: white;text-align: center">品牌设计</h4>
            </div>
          </div>
          <div class="you"><img src="../assets/img/宣传片.jpg" alt="x" />
          <div class="bg-box">
            <h4 style="padding-bottom: 10px;border-bottom: 2px solid white; color: white;text-align: center">为爱添翼方寸之间（微电影）</h4>
            </div>
          </div>
          <div class=""><img src="../assets/img/智慧城市.jpg" alt="x" />
          <div class="bg-box">
            <h4 style="padding-bottom: 10px;border-bottom: 2px solid white; color: white;text-align: center">珠海南屏党群展示中心</h4>
            </div>
          </div>
        </div>
        <div class="userAct">
          <div class="p_b">
            <h3 class="uA">用户的肯定</h3>
            <p class="pow">就是对我们的支持</p>
          </div>
          <div v-if="!active" class="act ttrs">
            <div class="d-flex">
              <div class="iimg">
                <img
                  class="w-100 h-100"
                  src="../assets/img/1584959785.png"
                  alt="x"
                />
              </div>

              <div class="d-flex dd">
                <img src="../assets/img/用户的肯定双引号.png" alt="x" />
                <div class="ddtat">
                  <p>与禾顺文化的合作非常愉快，在领域方面十分尽职而且专业。能和这样的团队<br/>合作公司方面很是放心，希望贵公司可以生意新荣蓬勃发展！</p>
                  <div class="">
                    <p class="mtt">
                      <i class="redd">————</i>唐小姐（产品经理）
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="active" class="bct dtnone">
            <div class="d-flex">
              <div class="iimg">
                <img
                  class="w-100 h-100"
                  src="../assets/img/头像图片.png"
                  alt="x"
                />
              </div>

              <div class="d-flex dd">
                <img src="../assets/img/用户的肯定双引号.png" alt="x" />
                <div class="ddtat">
                  <p>禾顺文化的团队视频制作非常精良，沟通也很顺畅，是一次很满意的合作体验，<br/>希望可以于贵公司保持合作关系！</p>
                  <div class="">
                    <p class="mtt">
                      <i class="redd">————</i>李小姐（客户）
                    </p>
                  </div>
                </div>
              </div>
          </div></div>
          <div class="dtw bbc">
              <div @click="add">
              <img
                class="left"
                src="../assets/img/用户的肯定 切换按钮.png"
                alt="x"
              />
            </div>
            <div class="mg-20 bbc" @click="add">
              <img
                class="right"
                src="../assets/img/用户的肯定 切换按钮r.png"
                alt="x"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active: false
    }
  },
  mounted(){
  },
  methods:{
    add(){
      // var a = document.querySelector('.act').className
      // var b = document.querySelector('.bct').className
      // if(b == 'bct'){
      //   document.querySelector('.bct').className = 'bct ttrs'
      //   document.querySelector('.act').className = 'act'
      // }else{
      //   document.querySelector('.bct').className = 'bct'
      //   document.querySelector('.act').className = 'act ttrs'
      // }
      this.active = !this.active
    }
  }
};
</script>

<style scoped>
#cases {
  margin-top: 100px;
  margin-bottom: 100px;
}
.m20 {
  margin-bottom: 20px;
}
.m40 {
  margin-bottom: 40px;
}
.row .c-ddd {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.c-ddd > div {
  width: 360px;
  height: 280px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.4s;
  position: relative;
}
.c-ddd > div:hover {
  transform: scale(1.1);
}
.c-ddd > div:hover .bg-box{
  display: block;
  background-color: rgba(0,0,0,.5);
}
.c-ddd > div > img {
  width: 100%;
  height: 100%;
}
.bg-box{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 20px;
  transition: all 0.4s;
  display: none;
}
.userAct {
  margin-top: 70px;
  width: 100%;
  position: relative;
}
.uA {
  margin-bottom: 20px;
  letter-spacing: 2px;
  font-weight: 500;
  color: black;
}
.pow {
  color: #595959;
  margin: 0px;
}
.iimg {
  width: 212px;
}
.p_b {
  margin-bottom: 20px;
}
.iimg > img {
  width: 150px;
  height: 150px;
  margin-left: 36px;
  border-radius: 50%;
}
.dd {
  align-items: center;
}
.dd > img {
  margin-left: 40px;
}
.dd > div > p {
  color: #595959;
  font-weight: 400;
  margin-bottom: 10px;
}
.dtw {
  display: flex;
  position: absolute;
  right: 0;
  top: 50%;
}
.dtw > div {
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e62128;
  position: relative;
  cursor: pointer;
}
.dtw > div > img {
  text-align: center;
}
.left {
  position: absolute;
  top: 0px;
  left: 3px;
}
.right {
  position: absolute;
  top: 3px;
  left: 8px;
}
.mg-20 {
  margin-left: 38px;
}
.redd {
  color: #e62128;
  font-weight: 700;
  margin-right: 20px;
}
.mtt {
  padding-top: 10px;
  position: absolute;
  right: 200px;
  text-align: end;
  color: #595959;
  font-weight: 600;
}
.dtnone{
  animation: fite 0.4s;
}
@keyframes fite{
  0%{opacity: 0; transform: translateX(-50px)}
  100%{opacity: 1; transform: translateX(0px)}
}
.ttrs {
  animation: xiuti 0.3s;
}
@keyframes xiuti {
  0% {
    opacity: 0;
    transform: translatex(-50px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

</style>
