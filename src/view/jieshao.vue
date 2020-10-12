<template>
  <div id="js">
      <div class="mastin"></div>
      <div class="container mtt">
          <div class="row d-f">
              <div class="m-80">
              <h2 class="m-20 col-6">禾顺文化简介</h2>
              <p class="m-big col-8">Heshun culture</p>
              <p class="col-9">禾顺文化于2015年组建图像数字化技术工作室，2016年正式融合组建AI摄像技术团队，是一家深耕于计算机图像邻域6年的数字化影像技术研发公司。公司组建以来坚持走中国特色自主创新道路，面向世界科技前沿、面向经济主战场、面向国家重大需求、在人工智能技术、物联网数字化视频图像技术、文化创意设计、动漫技术、IP经济技术等核心技术上具有业内影响力。服务应用涉及机关事业单位视频图像技术应用，大湾区城市规划、产业文化创意规划设计、VR全景交互系统开发、设计可视化、数据可视化、影像数字化管理、文化科教、IP经济、影视娱乐等多个领域。并围绕促进AI技术、物联网视频图像技术科技成果转移转化、技术资源优化配置、人才培养等提出具有前瞻性、战略性、科学性和可操作性的举措、路径、政策等。</p></div>
              <div class="d-flex iot">
                  <div class="">
                      <h1><i>4</i>年</h1>
                      <p>行业经验</p>
                  </div>
                  <div>
                      <h1><i>100</i>家</h1>
                      <p>会员客户</p>
                  </div>
                  <div>
                      <h1><i>200</i>例</h1>
                      <p>项目案例</p>
                  </div>
                  <div>
                      <h1><i>98</i>%</h1>
                      <p>客户好评率</p>
                  </div>
              </div>
              <div class="d-bl" @click="tobo">
                  <span>更多</span><img src="../assets/img/公司简介的更多箭头.png" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
        tobo(){
            this.$router.push('/contactus')
        }
    }
}
</script>

<style scoped>
#js{
    background: url('../assets/img/公司简介图片.jpg') no-repeat center;
    position: relative;
    color: rgb(255, 255, 255);
    margin-bottom: 100px;
}
.mastin{
    position:absolute;
    top     : 0;
    left    : 0;
    bottom  : 0;
    right   : 0;
    background:rgba(0,0,0,.5);
}
.mtt{
    padding-top: 100px;
}
    .col-6,.col-8{
        padding: 0px;
        margin: 0px;
    }
    .m-20{
        margin-bottom: 20px;
    }
    .m-big{
        margin-bottom: 80px;
    }
    .col-9{
        padding: 0px;
        margin: 0px;
        font-weight: 500;
        letter-spacing: 3px;
    }
    .iot>div{
        text-align: center;
        margin-right: 130px;
        position: relative;
    }
    .iot>div>h1{
        margin-bottom: 44px;
        font-size: 22px;
    }
    .iot>div>p{
        font-weight: 500;
        font-size: 20px;
    }
    .m-80{
        margin-bottom: 80px;
    }
    .d-f{
        display: block;
    }
    .d-bl{
        display: inline-block;
        position: relative;
        border: 2px solid #fff;
        padding: 1px 5px;
        margin-bottom: 100px;
        margin-top: 58px;
        cursor: pointer;
        transition: all 0.2s;
    }
    .d-bl>span{
        display: inline-block;
        line-height: 38px;
        height: 38px;
    }
    .d-bl>img{
        height: 30px;
        margin-bottom: 6px;
    }
    i{
        font-style: normal;
        font-size: 75px;
        padding-right: 4px;
        letter-spacing: 2px;
    }
    .d-bl:hover{
        background-color: rgba(0,0,0,.5);
        color: rgb(230, 33, 41);
    }
</style>