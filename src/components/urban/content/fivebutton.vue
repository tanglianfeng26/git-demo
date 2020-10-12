<template>
  <div id="fiveb">
    <div class="container">
      <div class="row">
        <div class="top col-12 text-center">
          <h2 class="h2m">服务模式</h2>
          <p class="to-p">Service mode</p>
          <p>一站式项目流程监管，保障项目成果完美呈现</p>
        </div>
        <div class="margin-b w-100 d-flex justify-content-around text-center">
          <div index="1">
            <div class="one">
            <img src="../../../assets/img/商务谈判.png" alt="" /></div>
            <h3>商务谈判</h3>
          </div>
          <div index="2">
            <div class="one"><img src="../../../assets/img/项目策划.png" alt="" /></div>
            <h3>项目策划</h3>
          </div>
          <div index="3">
            <div class="one"><img src="../../../assets/img/内容制作.png" alt="" /></div>
            
            <h3>内容制作</h3>
          </div>
          <div index="4">
            <div class="one"><img src="../../../assets/img/项目实施.png" alt="" /></div>
            
            <h3>项目实施</h3>
          </div>
          <div index="5">
            <div class="one"><img src="../../../assets/img/项目交付.png" alt="" /></div>
            
            <h3>项目交付</h3>
          </div>
        </div>
        <div class="protfather">
          <div class="prot w-100 text-center active">
            <h2>商务谈判</h2>
            <div class="red-x"></div>
            <p>
              掌握项目基本信息、需求以及报价，构建专业团队进行24小时跟踪服务，实时对接项目最新情况以及细节。
            </p>
          </div>
          <div class="prot w-100 text-center">
            <h2>项目策划</h2>
            <div class="red-x"></div>
            <p>
              根据客户需求详细提出策划主题、方案、脚本、执行流程等，与客户针对方案进行项目多次交流与碰撞，达成一致方向后确定方案。
            </p>
          </div>
          <div class="prot w-100 text-center">
            <h2>内容制作</h2>
            <div class="red-x"></div>
            <p>
              客户确定基本项目框架与方案，项目经理统筹各团队进入内容制作阶段，并让各个部分高效高质量完成，整体协调统一，并及时根据客户意见进行修改完善。
            </p>
          </div>
          <div class="prot w-100 text-center">
            <h2>项目实施</h2>
            <div class="red-x"></div>
            <p>
              内容制作完成后，项目经理带领团队在现场进行项目实施与执行，力求在规定时间内将细节做到最好，达到客户预期效果。
            </p>
          </div>
          <div class="prot w-100 text-center">
            <h2>项目交付</h2>
            <div class="red-x"></div>
            <p>
              在实施过程中根据客户的意见不断完善，直到项目按时交付完成。以效率制胜，以质量说话。
            </p>
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
    var a = $(".margin-b")
      .children()
      .hover(function() {
        var b = $(this).attr("index");
        b = b - 1;
        var c = $(".protfather").children()[b];
        $(c).addClass("active");
        $(c)
          .siblings()
          .removeClass("active");
      });
  }
};
</script>

<style scoped>
#fiveb {
  background: url("../../../assets/img/背景框.jpg") no-repeat top;
  margin-bottom: 100px;
}
.top {
  margin-top: 100px;
  margin-bottom: 80px;
  color: white;
}
.top h2 {
  margin: 0px;
}
.top > p {
  padding: 0px;
  margin: 0px;
}
.top .to-p {
  margin: 20px 0px;
}
.margin-b {
  margin-bottom: 80px;
  color: white;
  cursor: pointer;
}
.margin-b>div>.one>img{
    transition: all 0.3s;
}
.one{
  height: 88px;
  padding-top: 16px;
  border-radius: 50%;
  background-color: rgba(0,0,0,.5);
}
.margin-b>div:hover{
  color: rgb(230,33,41);
}
.margin-b>div:hover img{
    transform: scale(1.1);
}
h3 {
  margin-top: 40px;
  margin-bottom: 0px;
  font-size: 20px;
  text-align: center;
  letter-spacing: 2px;
  transition: all 0.2s;
}
.prot {
  background-color: #fff;
  padding: 80px 88px;
  display: none;
  height: 320px;
}
.prot > h2 {
  margin-bottom: 10px;
  font-weight: 500;
  letter-spacing: 2px;
}
.prot > .red-x {
  display: inline-block;
  width: 70px;
  border: 1px solid red;
}
.prot > p {
  margin-top: 80px;
  font-size: 22px;
  color: #7a7a7a;
}
.active {
  display: block;
  animation: fler 0.7s;
}
@keyframes fler {
  0% {
    opacity: 0;
    transform: translateX(-500px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
.protfather {
  width: 100%;
}
</style>
