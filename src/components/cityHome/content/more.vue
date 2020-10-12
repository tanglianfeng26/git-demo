<template>
  <div id="more">
    <div class="container">
      <div class="row">
        <div class="d-flex w-100 justify-content-between">
          <div class="photo">
            <img src="../../../assets/img/p1.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <p>杭州不只是杭州</p>
                <h1>
                  <img
                    @click="fat"
                    src="../../../assets/img/播放按钮.png"
                    alt=""
                  />
                </h1>

                <div class="btm">
                  <video
                    width="1400px"
                    style="margin-top:100px"
                    controls
                    src="https://2020101.oss-cn-beijing.aliyuncs.com/chengshiguan/%E6%9D%AD%E5%B7%9E%E4%B8%8D%E5%8F%AA%E6%98%AF%E6%9D%AD%E5%B7%9E_1.mp4"
                  ></video>
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="photo">
            <img src="../../../assets/img/p2.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <p>空间漫游<br />宁波市城市展览馆宣传片</p>
                <h1>
                  <img
                    @click="fat"
                    src="../../../assets/img/播放按钮.png"
                    alt=""
                  />
                </h1>

                <div class="btm">
                  <video
                    width="1400px"
                    style="margin-top:100px"
                    controls
                    src="https://2020101.oss-cn-beijing.aliyuncs.com/chengshiguan/%E7%A9%BA%E9%97%B4%E6%BC%AB%E6%B8%B8%E2%80%94%E2%80%94%E5%AE%81%E6%B3%A2%E5%B8%82%E5%9F%8E%E5%B8%82%E5%B1%95%E8%A7%88%E9%A6%86%E5%AE%A3%E4%BC%A0%E7%89%87.mp4"
                  ></video>
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="photo">
            <img src="../../../assets/img/p3.jpg" alt="" />
            <div class="hide">
              <a href="javascript:;">
                <p>壮丽恢弘城市航拍《飞跃城市》</p>
                <h1>
                  <img
                    @click="fat"
                    src="../../../assets/img/播放按钮.png"
                    alt=""
                  />
                </h1>

                <div class="btm">
                  <video
                    width="1400px"
                    style="margin-top:100px"
                    controls
                    src="https://2020101.oss-cn-beijing.aliyuncs.com/chengshiguan/%E5%A3%AE%E4%B8%BD%E6%81%A2%E5%BC%98%E5%9F%8E%E5%B8%82%E8%88%AA%E6%8B%8D%E3%80%8A%E9%A3%9E%E8%B7%83%E5%9F%8E%E5%B8%82%E3%80%8B.mp4"
                  ></video>
                  <i @click="close" class="el-icon-error"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fat() {
      $(".btm").show();
      $("body").css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
      });
    },
    close() {
      $(".btm").hide();
      $("video").trigger("pause");
      $("body").css({
        "overflow-x": "auto",
        "overflow-y": "auto"
      });
    }
  }
};
</script>

<style scoped>
#more {
  margin-bottom: 100px;
}
.photo {
  width: 370px;
  position: relative;
}
.photo > img {
  width: 370px;
  background-color: rgba(0, 0, 0, 0.15);
}
.photo:hover {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}
.hide {
  display: none;
  width: 370px;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.55) url("../../../assets/img/红色线.png")
    no-repeat center;
  background-size: contain;
}
.hide a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1 {
  font-weight: 300;
  font-size: 150px !important;
}
a p {
  font-size: 22px;
}
.photo:hover .hide {
  display: block;
}
.btm {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
}
.btm > i {
  font-style: normal;
  position: absolute;
  right: 100px;
  top: 60px;
  font-size: 50px;
  font-weight: 400;
}
.btm img {
  margin: 26px auto;
  max-width: 1322px;
  max-height: 904px;
  width: 100%;
}
</style>
