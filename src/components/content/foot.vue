<template>
  <div id="foot">
    <div class="foot">
      <div class="container">
        <div class="abc row d-flex justify-content-around">
          <div>
            <ul>
              <h3>关于我们</h3>
              <li><router-link :to="{path: '/contactus'}">公司简介</router-link></li>
              <li><router-link :to="{path: '/contactus'}">禾顺理念</router-link></li>
              <li><router-link :to="{path: '/contactus'}">禾顺核心价值观</router-link></li>
              <li><router-link :to="{path: '/contactus'}">荣誉资质</router-link></li>
            </ul>
          </div>
          <div>
            <ul>
              <h3>我们的服务</h3>
              <li><router-link :to="{path:'/seign'}">文化活动室内设计</router-link></li>
              <li><router-link :to="{path:'/desige'}">影视动画</router-link></li>
              <li><router-link :to="{path:'/city'}">城市馆</router-link></li>
              <li><router-link :to="{path:'/heshun'}">智慧城市</router-link></li>
              <li><router-link :to="{path:'/urban'}">城市形象设计</router-link></li>
              <li><router-link :to="{path:'/special'}">特色小镇产业图</router-link></li>
              <li><router-link :to="{path:'/mat'}">影像投资</router-link></li>
            </ul>
          </div>
          <div>
            <ul>
              <h3>产品案例</h3>
              <li><router-link :to="{path:'/brancase'}">文化墙设计</router-link></li>
              <li><router-link :to="{path:'/brancase'}">LOGO设计</router-link></li>
              <li><router-link :to="{path:'/brancase'}">画册设计</router-link></li>
              <li><router-link :to="{path:'/brancase'}">品牌设计</router-link></li>
              <li><router-link :to="{path:'/brancase'}">视频制作设计</router-link></li>
            </ul>
          </div>
          <div class="mar-94">
            <ul>
              <h3>联系我们</h3>
              <li><router-link :to="{path:'/about'}">联系方式</router-link></li>
              <li><router-link :to="{path:'/about'}">在线留言</router-link></li>
            </ul>
          </div>
          <div class="mar text-center">
            <img src="../../assets/img/微信图片_20201002162922.png" alt="" />
            <p>微信二维码</p>
            <p>13826517001</p>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-f">
      <div class="container">
        <div class="row">
          <div class="text-center c-t w-100">
            <p class="c-h">中国.广东省.深圳市.龙华新区.和平路.龙胜商业大厦i区</p>
            <a class="a-footer" href="https://beian.miit.gov.cn/#/Integrated/index"><p>粤ICP备2020098349号 版权归禾顺文化有限公司所有</p></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3{
  padding-bottom: 10px;
}
.c-t>p{
    margin: 0;
    font-weight: 600;
}
.c-t .c-h{
    margin-bottom: 15px;
}
.foot-f {
  background-color: #000;
  padding-top: 40px;
  color: #505050;
  padding-bottom: 40px;
}
a {
  color: #fff;
  transition: all 0.4s;
  text-decoration: none;
}
li {
  list-style: none;
  margin-bottom: 20px;
}
ul {
  padding: 0px;
}
.foot {
  padding-top: 84px;
  background-color: #000;
  color: #fff;
  border-bottom: 2px solid #414141;
  padding-bottom: 20px;
}
.row > div {
  margin-right: 120px;
}
.mar-94 {
  margin-right: 94px;
}
.mar > img {
  width: 84px;
  height: 84px;
  margin-bottom: 14px;
}
.mar > p {
  margin-bottom: 14px;
}
.row > .mar {
  margin-right: 0px;
}
#foot{
    margin-top: 80px;
}
ul>li{
  transition: all 0.4s;
}
ul>li:hover{
  transform: translateX(6px);
}
ul>li:hover a{
  color: rgb(230,33,41)!important;
}
.a-footer{
  color: #505050;
  font-weight: 600;
}
</style>
