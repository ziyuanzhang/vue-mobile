# vue-mobile

##### 首页

- 添加手势插件(VueTouch)

  1. main.js 引入

  ```javascript
  import VueTouch from "vue-touch";
  Vue.use(VueTouch, { name: "v-touch" });
  ```

  2. 应用页

  ```
    <v-touch
        v-on:swipeleft="onSwipeLeft"
        v-on:swiperight="onSwipeRight"
        ></v-touch>

    onSwipeLeft: function() {
      this.swipe = "onSwipeLeft";
    },
    onSwipeRight() {
      this.swipe = "onSwipeRight";
    },
  ```

* 添加中英文切换（i18n）

  1. main.js 引入

  ```
  import VueI18n from "vue-i18n";
  Vue.use(VueI18n);

  const i18n = new VueI18n({
        locale: "zh", // 语言标识
        messages: {
             zh: require("./common/lang/zh"),
             en: require("./common/lang/en")
        }
  });

  new Vue({
      el: "#app",
      router,
      i18n,
      components: { App },
      template: "<App/>"
  });
  ```

  2. 应用页

  ```
   <h1 class="txt">{{ $t("message.title") }}</h1>

   changeLocale: function() {
      let locale = this.$i18n.locale;
      locale === "zh" ? (this.$i18n.locale = "en") : (this.$i18n.locale = "zh");
      console.log(this.$t("message.title"));
    }
    console.log(this.$t("message.title"));
  ```
