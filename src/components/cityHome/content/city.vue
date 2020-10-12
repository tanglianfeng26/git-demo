<template>
  <div id="city">
    <div class="container">
      <div class="row">
        <div class="col-6 phoot">
          <img src="../../../assets/img/084.jpg" alt="" />
        </div>
        <div class="col-6 text-center">
          <h1>关于城市馆</h1>
          <p class="ptwo">以展现地域特色为主调，打造城市对外个性“名片”</p>
          <div class="boxcenter"></div>
          <p class="fontcolor">
            城市展览馆，通过宏大的场景、详实的<br>
            资料、艺术的构思、高科技的手段，生动形象的展示城市<br>
            历史文化底蕴、发展历程、建设成就和未来<br>
            其利用信息和通信技术手段感测、<br>
            愿景，构成一个将城市空间特色、历史<br>
            文化特色、经济发展特色高度整合的独特创意空间。
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
