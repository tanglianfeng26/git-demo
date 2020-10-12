<template>
    <div>
        <div id="carouselExampleCaptions" class="carousel high slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/img/banner.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>禾顺文化</h1>
        <p>禾顺用数字定义你的视界</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/img/banner.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>禾顺文化</h1>
        <p>禾顺用数字定义你的视界</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/img/banner.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>禾顺文化</h1>
        <p>禾顺用数字定义你的视界</p>
      </div>
    </div>
  </div>
  <div class="mask"></div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="smol" aria-hidden="true">
        <img src="../assets/img/banner-left.png" alt="">
    </span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="smor" aria-hidden="true">
        <img src="../assets/img/banner-right.png" alt="">
    </span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1{
    font-size: 70px;
}
.high{
    max-height: 720px;
}
.carousel-item{
    height: 100%;
}
.carousel-item>img{
    height: 100%;
}
.carousel-caption{
    bottom: 30%;
}
.carousel-caption>p{
    margin-top: 20px;
    padding: 6px 80px;
    font-size: 30px;
    background-color: rgba(0,0,0,.6);
    border: 2px solid white;
    display: inline-block;
}
.smol{
    position: absolute;
    left: 60px;
}
.smol>img{
    max-height: 60px;
}
.smor>img{
    max-height: 60px;
}
.smor{
    position: absolute;
    right: 60px;
}
.mask{
    position:absolute;
    top     : 0;
    left    : 0;
    bottom  : 0;
    right   : 0;
    background:rgba(0,0,0,.15);
}

.carousel-indicators {
  position: absolute;
  bottom: 0px;
  left: 50%;
  z-index: 15;
  width: 60%;
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}

.carousel-indicators li {
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  text-indent: -999px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid white;
  margin: 0px 7.5px;
}
.carousel-indicators .active {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  margin: 0px 7.5px;
  background-color: white;
  border: 1px solid white; /*没有这边框，切换的时候指针不会变白 */
}
</style>
