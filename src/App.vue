<template>
  <div id="app" class="theme">
    <v-header></v-header>
    <router-view />
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from "./components/header";
import footer from "./components/footer";
export default {
  name: "App",
  components: {
    "v-header": header,
    "v-footer": footer
  }
};
</script>

<style lang="less">
@import url("./assets/theme.less");
.theme {
  .theme(); //默认的样式
}
.themered {
  .theme(red, red);
}
.themegreen {
  .theme(green, red);
}

#app {
  box-sizing: border-box;
}
</style>
