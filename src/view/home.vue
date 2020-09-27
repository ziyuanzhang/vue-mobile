<template>
  <div>
    <p class="txt">home--jenkins</p>
    <hr />
    <div class="touch-container">
      <v-touch
        class="touch"
        v-on:swipeleft="onSwipeLeft"
        v-on:swiperight="onSwipeRight"
        >Swipe me!</v-touch
      >
    </div>
    <div class="tips">左右滑动：{{ swipe }}</div>
    <hr />
    <div class="LanguageSwitch">
      <h1 class="txt">{{ $t("message.title") }}</h1>
      <button class="btn btn-success" @click="changeLocale">中文/EN</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swipe: "没有滑动"
    };
  },
  methods: {
    onSwipeLeft: function() {
      this.swipe = "onSwipeLeft";
    },
    onSwipeRight() {
      this.swipe = "onSwipeRight";
    },
    changeLocale: function() {
      let locale = this.$i18n.locale;
      locale === "zh" ? (this.$i18n.locale = "en") : (this.$i18n.locale = "zh");
      console.log(this.$t("message.title"));
    }
  }
};
</script>
<style lang="less" scoped>
.txt {
  margin: 20px;
  text-align: center;
}
.touch-container {
  height: 100px;
  background-color: #ccc;
  .touch {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.tips {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.LanguageSwitch {
  text-align: center;
  .btn {
    margin-top: 10px;
  }
  .txt {
    font-size: 16px;
    text-align: center;
  }
}
</style>
