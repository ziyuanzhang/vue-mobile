<template>
  <div class="loading-container" @touchmove.prevent>
    <div class="loading-main">
      <div class="loadimg-content">
        <!-- <div class="loading-iconfont iconfont icon-jiazai"></div> -->
        <img class="loading-icon" src="@/assets/img/loading.png" />
        <div class="loading-txt">{{ content }}</div>
      </div>
      <div class="loading-bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {
      content: ""
    };
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
@-webkit-keyframes changeright {
  0% {
    -webkit-transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  .loading-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 200px;
    height: 180px;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;

    .loadimg-content {
      position: absolute;
      z-index: 1;
      padding: 30px 0;
      box-sizing: border-box;
      width: 100%;
      .loading-icon {
        animation: changeright 3s linear infinite;
        margin-bottom: 10px;
      }
      .loading-txt {
        font-size: 24px;
        color: #ffffff;
      }
    }
    .loading-bg {
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.5;
    }
  }
}
</style>
