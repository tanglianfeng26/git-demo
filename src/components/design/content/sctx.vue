<template>
  <div id="sctx">
    <div class="container">
      <div class="row conbg">
        <div class="mask"></div>
        <div class="text-center col-12 cittq">
          <h1 class="m-0">CG特效</h1>
          <p>CG special effects</p>
          <div class="boxcenter"></div>
        </div>
        <div class="col-6 d-flex">
          <div class="cener">
            <img src="../../../assets/img/图标1.png" alt="x" />
          </div>
          <div class="">
            <h4>三维特效</h4>
            <p>
              绝大多数有立体透视变化的角色和场景都由三维特效创造。
              三维特效几乎是整个特效里面技术最难，但也最能解决问题
              的一环。比如说影片中各种逼真的怪物、2012中淹没全城的
              洪水、摩天大楼轰然倒塌等。
            </p>
          </div>
        </div>
        <div class="col-6 d-flex">
          <div class="cener">
            <img src="../../../assets/img/图标2.png" alt="x" />
          </div>
          <div class="">
            <h4>合成特效</h4>
            <p>
              合成特效最常见的体现为古装片中的大侠施展轻功在天空飞
              来飞去。具体实施方法：演员打斗和天空分开拍摄，其中演
              员打斗部分由演员吊着钢丝在蓝幕或绿幕背景中拍摄，然后
              在电脑中利用后期软件将蓝幕和钢丝去掉，光留下演员部分
              再贴到实拍天空前面。
            </p>
          </div>
        </div>
        <div class="col-6 d-flex mb80">
          <div class="cener">
            <img src="../../../assets/img/图标3.png" alt="x" />
          </div>
          <div class="">
            <h4>数字绘景</h4>
            <p>
              数字绘景和概念设计可以理解为绘画。
              数字绘景：比如说某影片中出现远古城市的全景，涉及到数
              千幢古民居或宫殿花草树木小桥流水等等，如果要求三维软
              件做出来，成本将非常大，通常需要多人合作才能完成，但
              有了数字绘影师，他一个人就可以把这些全部画成一张图。
            </p>
          </div>
        </div>
        <div class="col-6 d-flex mb80">
          <div class="cener">
            <img src="../../../assets/img/图标4.png" alt="x" />
          </div>
          <div class="">
            <h4>概念设计</h4>
            <p>
              概念设计通常用于前期制作参考。比如说影片中要出现一个
              怪物，但怪物长什么样子？导演用语言说出来，概念设计师
              根据导演要求以图片的形式画出来，确定形象后，再交给三
              维特效做出栩栩如生的各种怪物。
            </p>
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
#sctx{
    margin-bottom: 100px;
}
.conbg {
  width: 100%;
  background: url("../../../assets/img/底纹.jpg") repeat-y center;
  color: white;
  position: relative;
}
.cittq {
  margin-top: 80px;
  margin-bottom: 40px;
}
.cittq > p {
  margin: 20px 0px 4px;
}
p {
  margin-bottom: 0px;
}
.cener {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
}
h4 {
  margin-bottom: 20px;
}
.col-6 {
  padding: 0px 20px;
}
.mb80 {
  margin-bottom: 80px;
  margin-top: 40px;
}
.cener > img {
  transition: all 0.8s;
}
.cener > img:hover {
  transform: rotate(360deg);
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.boxcenter {
  height: 0px;
  width: 70px;
  border-top: 2px solid red;
  display: inline-block;
}
</style>
