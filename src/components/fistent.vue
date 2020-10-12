<template>
  <div id="fistent">
      <div class="container">
          <div class="row">
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
    h2{
        margin-bottom: 20px;
        font-weight: 600;
        letter-spacing: 2px;
    }
    p{
        margin-bottom: 20px;
        letter-spacing: 1px;
        font-weight: 500;
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
  height: 20px;
  width: 100px;
  border-top: 2px solid red;
  display: inline-block;
}
</style>