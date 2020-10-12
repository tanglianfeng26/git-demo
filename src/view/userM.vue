<template>
  <div id="userm">
      <div class="container">
          <div class="row">
              <div class="text-center w-100 obj col-12">
              <h2>禾顺服务流程</h2>
              <p>Service process</p>
              <div class="boxcenter"></div>
              </div>
              <div class="ttp d-flex">
                  <div>
                      <img src="../assets/img/服务流程图标1.png" alt="">
                      <p>准备工作</p>
                  </div>
                  <div><img src="../assets/img/服务流程图标2.png" alt="">
                      <p>客户准备资料</p></div>
                  <div><img src="../assets/img/服务流程图标3.png" alt="">
                      <p>公司设计</p></div>
                  <div><img src="../assets/img/服务流程图标4.png" alt="">
                      <p>设计完成</p></div>
                  <div><img src="../assets/img/服务流程图标5.png" alt="">
                      <p>成品交付</p></div>
              </div>
              <div class="text-center w-100 obj col-12 opoe">
              <h2>合作伙伴</h2>
              <p>cooperative partner</p>
              <div class="boxcenter"></div>
              </div>
              <div class="d_img d-flex justify-content-md-around">
                  <img src="../assets/img/腾讯logo.png" alt="">
                  <img src="../assets/img/阿里巴巴logo.png" alt="">
                  <img src="../assets/img/招商银行logo.png" alt="">
                  <img src="../assets/img/百度logo.png" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .obj h2{
        margin-bottom: 20px;
        font-weight: 600;
        letter-spacing: 2px;
    }
    .obj>p{
        margin-bottom: 10px;
        letter-spacing: 1px;
        font-weight: 500;
    }
    .ttp{
        margin-top: 80px;
        margin-bottom: 100px;
    }
    .ttp>div{
        width: 180px;
        height: 220px;
        border: 2px solid #000;
        border-radius: 8%;
        margin: 0px 30px;
        text-align: center;
    }
    .ttp>div:hover{
        color: rgb(230, 33, 41);
    }
    .ttp>div>img:hover{
        transform: scale(1.1);
    }
    .ttp>div>img{
        margin: 20px 0px;
        transition: all 0.4s;
    }
    .ttp>div>p{
        padding-top: 10px;
        font-size: 22px;
        transition: all 0.4s;
    }
    .opoe{
        margin-bottom: 80px;
    }
    .d_img{
        width: 1400px;
    }
    .d_img>img{
        height: 70px;
        width: 250px;
    }
    .boxcenter {
  height: 0px;
  width: 100px;
  border-top: 2px solid red;
  display: inline-block;
}
</style>