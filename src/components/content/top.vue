<template>
  <div id="top">
    <div class="container">
      <div class="row">
        <div class="logo">
          <router-link :to="{ path: '/home' }">
            <img src="../../assets/img/微信图片_20201002195517.png" width="100%" alt=""
          /></router-link>
        </div>
        <div class="topcentent col">
          <ul>
            <li>
              <router-link class="active_shou" :to="{ path: '/home' }"
                >首页</router-link
              >
            </li>
            <li class="data-v-eea30542 pasres">
              我们的服务
              <div class="pastion">
                <div class="uit clqq">
                  禾顺学院
                  <div class="uitone">
                    <router-link :to="{ path: '/seign' }"
                      >文化活动室内设计</router-link
                    >
                    <router-link :to="{ path: '/desige' }"
                      >影视动画</router-link
                    >
                  </div>
                </div>
                <div class="uit clqq">
                  数字化图像
                  <div class="uitone uittwo">
                    <router-link :to="{ path: '/city' }">城市馆</router-link>
                    <router-link :to="{ path: '/heshun' }"
                      >智慧城市</router-link
                    >
                  </div>
                </div>
                <div class="uit clqq">
                  文化创意
                  <div class="uitone">
                    <router-link :to="{ path: '/urban' }"
                      >城市形象设计</router-link
                    >
                    <router-link :to="{ path: '/special' }"
                      >特色小镇，产业园</router-link
                    >
                  </div>
                </div>
                <div class="uit quut">
                  <router-link class="uit uioq" :to="{ path: '/mat' }"
                    >影像投资</router-link
                  >
                </div>
              </div>
            </li>
            <li>
              <router-link class="active_shou" :to="{ path: '/brancase' }"
                >品牌案例</router-link
              >
            </li>
            <li>
              <router-link class="active_shou" :to="{ path: '/contactus' }"
                >关于我们</router-link
              >
            </li>
            <li>
              <router-link class="active_shou" :to="{ path: '/about' }"
                >联系我们</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      if (to.meta.index == 2) {
        $(".pasres").addClass("router-link-active");
      } else {
        $(".pasres").removeClass("router-link-active");
      }
    }
  },
  mounted() {
    $(".uitone")
      .children()
      .click(function() {
        $(".pastion").hide();
      });
    $(".quut")
      .children()
      .click(function() {
        $(".pastion").hide();
      });
    $(".pasres").mouseenter(function() {
      $(".pastion").show();
    });
  },
  methods: {}
};
</script>
<style scoped>
#top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 999;
  background-color: #fff;
}
.ili {
  font-size: 16px;
  padding-left: 6px;
}
li {
  list-style: none;
  float: left;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  position: relative;
  /* color: black; */
}
.logo {
  width: 260px;
  height: 80px;
}
.logo > a {
  line-height: 80px;
  border: 0px;
}
.logo > img {
  padding-top: 14.5px;
}
.topcentent {
  height: 80px;
}
.topcentent > ul {
  display: flex;
  justify-content: flex-end;
  height: 80px;
  line-height: 80px;
}
.topcentent > ul > li {
  height: 80px;
  line-height: 78px;
  margin-left: 50px;
  padding: 0px 4px;
  box-sizing: border-box;
  cursor: pointer;
}
.col {
  padding: 0px;
}
.topcentent > ul > li:hover {
  color: rgb(230, 33, 41);
}
.topcentent > ul > li:hover .active_shou {
  color: rgb(230, 33, 41);
  box-sizing: border-box;
}
a {
  display: inline-block;
  text-decoration: none;
  color: black;
}
.router-link-active {
  color: rgb(230, 33, 41);
  border-bottom: 2px solid rgb(230, 33, 41);
}
.pasres {
  position: relative;
}
.pasres:hover .pastion {
  display: block;
  animation: hideIndex 0.2s;
  -moz-animation: hideIndex 0.2s;
  -webkit-animation: hideIndex 0.2s;
  -o-animation: hideIndex 0.2s;
}
@keyframes hideIndex {
  0% {
    opacity: 0;
    transform: translate(0, 50px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.pastion {
  border-top: 2px solid #fff;
  display: none;
  position: absolute;
  top: 80px;
  left: -10px;
  background-color: #fff;
  padding: 4px;
  text-align: center;
  color: black;
  /* border: 1px solid rgba(0, 0, 0, 0.7); */
  /* border-radius: 4px; */
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.3);
  width: 120px;
}
.pastion .uit {
  font-size: 16px;
  letter-spacing: 1px;
  height: 30px;
  line-height: 30px;
  position: relative;
}
.uitone {
  display: none;
  position: absolute;
  top: 0px;
  left: 100%;
  background-color: #fff;
  /* border: 1px solid #000; */
  /* border-radius: 4px; */
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.3);
  width: 150px;
}
.uittwo {
  width: 80px;
}
.uitone a {
  padding: 0px 4px;
  color: #000;
  border: 0px;
}
.uitone a:hover {
  color: rgb(230, 33, 41);
}
.uit:hover {
  color: rgb(230, 33, 41);
}
.clqq:hover .uitone {
  display: block;
  animation: hidex 0.3s;
  -moz-animation: hidex 0.3s;
  -webkit-animation: hidex 0.3s;
  -o-animation: hidex 0.3s;
}
@keyframes hidex {
  0% {
    opacity: 0;
    transform: translate(50px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.uit .router-link-active {
  border: 0px;
}
.router-link-active:checked .pastion {
  display: none;
}
.uitone .router-link-active {
  color: rgb(230, 33, 41);
}
</style>
