<template>
  <div>
    <p>home</p>
    <mt-button type="primary">primary</mt-button>
    <hr>
    <div class="touch-container">
      <v-touch v-on:swipeleft="onSwipeLeft">Swipe me!</v-touch>
    </div>
    <h1 style="font-size: 16px; text-align: center;">{{$t("message.title")}}</h1>
    <button type="button" class="btn btn-success" @click="changeLocale">中文/EN</button>
  </div>
</template>
<script>
export default {
  methods: {
    onSwipeLeft: function() {
      console.log("onSwipeLeft");
    },
    changeLocale: function() {
      let locale = this.$i18n.locale;
      locale === "zh" ? (this.$i18n.locale = "en") : (this.$i18n.locale = "zh");
    }
  }
};
</script>
<style lang="less" scoped>
.touch-container {
  height: 200px;
}
</style>

