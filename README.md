# vue-mobile

##### 首页

- 添加手势插件

  - main.js 引入
    ```javascript
    import VueTouch from "vue-touch";
    Vue.use(VueTouch, { name: "v-touch" });
    ```
  - 应用页

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
