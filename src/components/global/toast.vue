<template>
  <div class="toast-container" @touchmove.prevent>
    <span class="toast-txt">{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      content: "",
      duration: 0,
      setT: ""
    };
  },
  mounted() {
    this.setT = setTimeout(() => {
      clearTimeout(this.setT);
      this.cancelFun();
    }, this.duration);
  }
};
</script>
<style lang="less" scoped>
.toast-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  .toast-txt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    padding: 5px 15px 8px;
    border-radius: 10px;
    font-size: 14px;
    background: #818181;
    color: #fff;
  }
}
</style>
