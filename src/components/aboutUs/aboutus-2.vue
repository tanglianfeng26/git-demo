<template>
  <div id="about2">
      <div class="container">
          <div class="row">
              <div class="totel col-6">
                  <img src="../../assets/img/电话.png" alt="">
                  <p class="tel">电话</p>
                  <p class="phone">13826517001</p>
              </div>
              <div class="totel col-6 lrl">
                   <img src="../../assets/img/邮箱.png" alt="">
                  <p class="tel">邮箱</p>
                  <p class="phone">sz880ok@163.com</p>
              </div>
              <div class="totel two col-6">
                  <img src="../../assets/img/传真.png" alt="">
                  <p class="tel">传真</p>
                  <p class="phone">0755-89370192</p>
              </div>
              <div class="totel two col-6 lrl">
                  <img src="../../assets/img/地址.png" alt="">
                  <p class="tel">地址</p>
                  <p class="phone soet">深圳市龙华新区大浪街道和平路西路龙胜商业大厦6楼I区03室</p>
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
    .totel{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 210px;
        border: 1px solid #666;
        box-sizing: border-box;
    }
    .totel>img{
        width: 60px;
        height: 60px;
        margin-top: 30px;
        transition: all 0.5s;
        cursor: pointer;
    }
    .totel>img:hover{
        transform: scale(1.1) rotate(360deg);
    }
    .totel>p{
        font-size: 19px;
    }
    .tel{
        margin: 20px 0px;
    }
    .phone{
        margin-bottom: 30px;
    }
    .two{
        height: 220px;
        border-top: 0px;
    }
    .two>img{
        margin-top: 26px;
    }
    .totel .soet{
        width: 260px;
        font-size: 16px;
    }
    .lrl{
        border-left: 0px;
    }
</style>