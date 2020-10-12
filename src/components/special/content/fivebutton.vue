<template>
  <div id="fiveb">
    <div class="container">
      <div class="row">
        <div class="top col-12 text-center">
          <h2 class="h2m">精准化流程，高效一步到位</h2>
          <p class="to-p">Service mode</p>
          <p>专业策展服务，满足客户需求</p>
        </div>
        <div class="margin-b w-100 d-flex justify-content-around">
          <div index="1">
            <img src="../../../assets/img/商务谈判1.png" alt="" />
            <h3>商务谈判</h3>
          </div>
          <div index="2">
            <img src="../../../assets/img/项目策划2.png" alt="" />
            <h3>项目策划</h3>
          </div>
          <div index="3">
            <img src="../../../assets/img/项目设计3.png" alt="" />
            <h3>项目设计</h3>
          </div>
          <div index="4">
            <img src="../../../assets/img/系统集成4.png" alt="" />
            <h3>系统集成</h3>
          </div>
          <div index="5">
            <img src="../../../assets/img/工程实施5.png" alt="" />
            <h3>工程施工</h3>
          </div>
          <div index="6">
            <img src="../../../assets/img/工程维护6.png" alt="" />
            <h3>项目交付</h3>
          </div>
          <div index="7">
            <img src="../../../assets/img/项目交付7.png" alt="" />
            <h3>工程维护</h3>
          </div>
        </div>
        <div class="protfather">
          <div class="prot w-100 text-center active">
            <h2>商务谈判</h2>
            <div class="red-x"></div>
            <p>
              掌握项目基本信息，需求以及报价，构建专业团队进行跟踪，实时对接项目最新情况以及细节。
            </p>
          </div>
          <div class="prot w-100 text-center">
            <h2>项目策划</h2>
            <div class="red-x"></div>
            <p>
              目经理统筹整体，对接市场人员，根据需求联合创意策划设计整体创意方案并提案，最终形成客户满意且确认的策划方案。
            </p>
          </div>
          <div class="prot w-100 text-center">
            <h2>项目设计</h2>
            <div class="red-x"></div>
            <p>
              确定策划方案后，项目经理组织各个技术服务团队的建立专项服务小组，确保项目进程中团队的高度协同，根据前期的创意思路推进设计方案的完美呈现和高效推进。
            </p>
          </div>
          <div class="prot w-100 text-center">
            <h2>系统集成</h2>
            <div class="red-x"></div>
            <p>
              软件，硬件和制作内容的产品化集成，根据使用环境和运行要求进行硬件组装，软件安装，参数调制和内容试运行，确保产品交付无误。
            </p>
          </div>
          <div class="prot w-100 text-center">
            <h2>工程施工</h2>
            <div class="red-x"></div>
            <p>
              根据工程设计要求进行工程施工，按期交付达到安装调试条件的工程环境。
            </p>
          </div>
          <div class="prot w-100 text-center">
            <h2>项目交付</h2>
            <div class="red-x"></div>
            <p>
              项目达到交付标准后，项目经理安排相关人员在现场调试完善，让客户验收，并为工作人员进行专业运营培训，使项目运行无阻。
            </p>
          </div>
          <div class="prot w-100 text-center">
            <h2>工程维护</h2>
            <div class="red-x"></div>
            <p>
              维护项目使用中出现的问题，第一时间安排项目组跟进解决和服务。
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
.margin-b>div>img{
    transition: all 0.3s;
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
