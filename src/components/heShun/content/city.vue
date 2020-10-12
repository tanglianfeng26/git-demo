<template>
  <div id="city">
    <div class="container">
      <div class="row">
        <div class="col-6 text-center">
          <h1>关于智慧城市</h1>
          <p class="ptwo">展特色文化，创智慧视界</p>
          <div class="boxcenter"></div>
          <p class="fontcolor">
            智慧城市是指利用各种信息技术或创新概念,<br>
            将城市的系统和服务打通、集成，以提升资源运用的效率，<br>
            优化城市管理和服务，以及改善市民生活质量。<br>
            其利用信息和通信技术手段感测、<br>
            分析、整合城市运行核心系统的关键信息，对民生等需求<br>
            做出智能的响应，为人类创造更美好的城市生活。
          </p>
        </div>
        <div class="col-6 phoot">
          <img src="../../../assets/img/city.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#city {
  margin-bottom: 100px;
}
.phoot > img {
  width: 100%;
}
h1{
    margin-top: 78px;
    margin-bottom: 32px;
}
.ptwo{
    font-size: 16px;
    margin-bottom: 30px;
    color: #464545;
}
.boxcenter{
    height: 20px;
    width: 100px;
    border-top: 2px solid red;
    display: inline-block;
}
.fontcolor{
    color: #817f7f;
    font-size: 20px;
}
</style>
