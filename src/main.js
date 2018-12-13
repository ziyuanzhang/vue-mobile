// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { Button } from "mint-ui";
import VueTouch from "vue-touch";
import VueI18n from "vue-i18n";
import axios from "axios";
//import configAxios from "./common/configAxios";

import VConsole from "vconsole/dist/vconsole.min.js";
Vue.component(Button.name, Button);

Vue.config.productionTip = false;
Vue.use(VueTouch, { name: "v-touch" });
Vue.use(VueI18n);

Vue.prototype.$http = axios;
//configAxios(axios);

const i18n = new VueI18n({
  locale: "zh", // 语言标识
  messages: {
    zh: require("./common/lang/zh"),
    en: require("./common/lang/en")
  }
});

/* eslint-disable no-new */
new VConsole();

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  i18n,
  components: { App },
  template: "<App/>"
});
