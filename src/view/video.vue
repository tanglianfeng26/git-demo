<template>
  <div class="mp4-one">
    <div class="mp4-box">
      <video
      controls
      poster="../assets/img/微信图片_20201002001218.jpg"
        id="mp444"
        src="https://2020101.oss-cn-beijing.aliyuncs.com/tupian/%E9%A6%96%E9%A1%B5banner%20%E8%A7%86%E9%A2%91.mp4"
      ></video>
      <div class="bj">
          <img class="bjimg" src="../assets/img/播放按钮.png" alt="xxx">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
        var Media = document.getElementById("mp444");
        Media.controls=false
        $('.bjimg').click(function(){
            Media.play();
            Media.controls=true
            $('.bj').remove()
        })
    }
};
</script>

<style scoped>
.mp4-one {
  width: 100%;
}
.mp4-box {
  width: 100%;
  position: relative;
}
#mp444 {
  width: 100%;
  height: 720px;
  object-fit:cover;
}
.mp4-box:hover .bj{
    display: block;   
}
.bj{
    display: none;
    position: absolute;
    top: 0;
    bottom: 8px;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
}
.bj>img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
