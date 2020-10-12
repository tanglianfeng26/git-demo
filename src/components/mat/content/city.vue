<template>
  <div id="city">
    <div class="container">
      <div class="row">
        <div class="col-6 phoot">
          <img src="../../../assets/img/5211.jpg" alt="" />
        </div>
        <div class="col-6 text-center">
          <h1>关于数据可视化</h1>
          <p class="ptwo">提亚大屏科技，展现“数据之美”</p>
          <div class="boxcenter"></div>
          <p class="fontcolor">
            将大量数据进行可视化设计、交互设计<br>
            展示，实现各类云数据和专业数据的实时图形可视化、场<br>
            景化,清晰有效地传达与沟通信息，在美观与<br>
            功能之间达到平衡，帮助人们深入理解<br>
            洞察复杂的数据集。
          </p>
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
