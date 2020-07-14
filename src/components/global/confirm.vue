<template>
  <div class="confirm-container" @touchmove.prevent>
    <div class="confirm-main">
      <div class="confirm-title" v-if="title.length > 0">{{ title }}</div>
      <div class="confirm-content">{{ content }}</div>
      <div class="btn-list">
        <div class="btn cancel-btn " @click="cancelFun()">取消</div>
        <div class="btn ok-btn" @click="okFun()">确认</div>
      </div>
    </div>
    <div class="confirm-bg" @click="cancelFun()"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.confirm-container {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999;
  .confirm-main {
    width: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: #fff;
    border-radius: 10px;
    font-size: 24px;
    color: #666666;
    box-sizing: border-box;
    .confirm-title {
      margin-top: 24px;
      text-align: center;
    }
    .confirm-content {
      padding: 50px 20px;
      text-align: center;
    }
    .btn-list {
      border-top: 2px solid #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
        height: 90px;
        line-height: 90px;
        flex: 1;
        text-align: center;
      }
      .cancel-btn {
        border-right: 2px solid #e5e5e5;
      }
    }
  }
  .confirm-bg {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.3;
  }
}
</style>
