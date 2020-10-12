<template>
  <div id="contactthree">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="slot">
            <h4>成立与<i>2016</i>年</h4>
          </div>
        </div>
        <div class="col-6">
          <img width="100%" src="../../assets/img/图片.jpg" alt="" />
        </div>
        <div class="mar-t">
          <p>
            禾顺文化于2015年组建图像数字化技术工作室，2016年正式融合组建AI影像技术团队，是一家深耕于
            计算机图像领域6年的数字化影像技术研发公司。公司组建以来坚持走中国特色自主创新道路，面向世界科
            技前沿、面向经济主战场、面向国家重大需求，在人工智能技术、物联网数字化视频图像技术、文化创意设
            计、动漫技术、IP经济技术等核心技术上具有业内影响力。服务应用涉及机关事业单位视频图像技术应用，
            大湾区城市规划、产业文化创意规划设计、VR全景交互系统开发、设计可视化、数据可视化、影像数字化
            管理、文化科教、IP经济、影视娱乐等多个领域。并围绕促进AI技术、物联网视频图像技术科技成果转移转
            化、技术资源优化配置、人才培养等提出具有前瞻性、战略性、科学性和可操作性的举措、路径、政策等。
          </p>
          <p class="mapp">
            禾顺坚持以影像技术科技创新驱动经济高质量发展为主线，聚焦经济、社会和科技发展，长期定位于影
            像科技服务商，以影像技术+文化科技创意设计和技术，集新影像文化科技战略联盟、创新研发、人才培育
            和物联网数字化视频图像技术聚合为一体的“影像+科技”创新平台。旗下现有禾顺数字化交互影像管理、
            禾顺影像电子管理系统、禾顺直播、禾顺云技术、禾顺微视、禾顺社区等品牌，为不同行业机构提供基于数
            字图像展示服务的整体解决方案。在新兴的数字视觉应用市场上建立领先优势，是文化创意产业创新的实践
            者和引领者。根据国家科技技术创新与服务战略规划，禾顺以数字化影像技术立足大湾区服务，延伸对长三
            角城市群、京津冀城市群、西部中心等重点区域技术支持，对接好地方“十四五”科技创新规划纲要，全面
            打造新兴智慧城市影像技术，物联网音视频技术服务。为实现“两个一百年”奋斗目标，实现中华民族伟大
            复兴的中国梦而加快影像技术领域科技创新，掌握全球科技竞争先机，为社会培养更多影像技术科技人员，
            为推动国家科技战略发展贡献力量。
          </p>
        </div>
      </div>
    </div>
    <div class="two m-100t"></div>
    <div class="three"></div>
    <div class="four"></div>
    <fistent/>
  </div>
</template>

<script>
import fistent from '../fistent'
export default {
    components:{fistent}
};
</script>

<style scoped>
#contactthree {
  margin-top: 40px;
  position: relative;
}
.col-6 {
  padding: 0px;
}
.slot {
  width: 800px;
  height: 180px;
  background-color: #f7f7f7;
  position: absolute;
  top: 190px;
}
h4 {
  padding-left: 60px;
  font-size: 26px;
  color: #7a7a7a;
  display: inline-block;
  height: 180px;
  line-height: 180px;
  letter-spacing: 2px;
}
i {
  font-style: normal;
  font-size: 100px;
  color: #e62129;
}
.m-100t{
    margin-bottom: 100px;
}
.mar-t {
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 22px;
  /* font-size: #7a7a7a; */
}
.mar-t > p {
  text-indent: 2em;
  margin: 0px;
}
.mar-t .mapp{
    margin-top: 60px;
}
.two{
    height: 493px;
    background: url('../../assets/img/11211.jpg') no-repeat center;
}
.three{
    height: 585px;
    background: url('../../assets/img/645.jpg') no-repeat center;
}
.four{
    height: 1000px;
    width: 100%;
    background: url('../../assets/img/1231.jpg') no-repeat center;
}
</style>
