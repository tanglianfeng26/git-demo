<template>
  <div id="threebox">
    <div class="container">
      <div class="row">
        <div class="hello w-100 d-flex justify-content-between text-center">
          <div class="box-one">
            <div class="one">
              <img src="../../../assets/img/产品中心.png" alt="" />
              <p>
                前期对接客户，整理、挖掘客
                户深层需求，提供产品建设方案咨询；制定内容框架，搭建产品整体架构
              </p>
            </div>
            <div class="text-center mqqt">
                <h4>产品中心</h4>
            </div>
          </div>
          <div class="box-one">
              <div class="one">
            <img src="../../../assets/img/开发中心.png" alt="" />
            <p>
              根据产品框架及客户需求进行视觉风格设定、界面设计、UI
              交互设计；输出产品可视化创意及表现形式
            </p></div>
            <div class="text-center mqqt">
                <h4>设计中心</h4>
            </div>
          </div>
          <div class="box-one">
              <div class="one">
            <img src="../../../assets/img/设计中心.png" alt="" />
            <p>
              方案可行性评估，从技术角度评估项目需求是否能落地并组
              织项目专案团队执行，以及客户服务的技术支持
            </p></div>
            <div class="text-center mqqt">
                <h4>开发中心</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="jding"></div>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#threebox {
  position: relative;
  margin-top: 40px;
  margin-bottom: 100px;
}
.box-one > .one {
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.15);
  border: 1px solid #a4a4a4;
  width: 313px;
  border-radius: 8px;
  background-color: #fff;
}
.box-one > .one > img {
  margin-top: 40px;
}
.box-one > .one > p {
  font-size: 20px;
  padding: 0px 0.7em;
  margin-bottom: 80px;
}
.mqqt{
    margin-top: 60px;
    margin-bottom: 130px;
    color: white;
}
.jding{
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 359px;
    background: url('../../../assets/img/背景图.jpg') no-repeat;
    z-index: -1;
}
</style>
