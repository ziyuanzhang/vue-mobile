# vue-mobile

#### 首页

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
  ```

#### 请求页

    添加了 axios 的取消功能

#### 请求页

    1. 用 BScroll 插件实现滚动；
    2. 根据右滚动的高度，计算左侧需要滚动的高度（注意溶差）

#### 换主题页 (4 种)

1. 通过加载不通 css
2. 通过改变 root 的 class 名字
3. 通过 less.js 的实现

   - index.html 页引入

     ```
     <script src="../less.js/2.5.3/less.min.js"></script>

     .demo3 {
         background: @bg-color;
         }
     ```

   - 应用页
     ```
         changeThemefun3(val) {
         console.log("changeThemefun:", val);
         window.less
             .modifyVars({
             // 调用 `less.modifyVars` 方法来改变变量值
             "@bg-color": val
             })
             .then(() => {
             console.log("修改成功");
             });
         },
     ```

4. 通过 css 的自定义变量

```css
:root {
  --bg-color: #ccc;
}

.demo4 {
  background-color: var(--bg-color);
}
```
