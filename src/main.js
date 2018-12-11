// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { Button } from "mint-ui";
import VueTouch from "vue-touch";

import VConsole from "vconsole/dist/vconsole.min.js";
Vue.component(Button.name, Button);

Vue.config.productionTip = false;
Vue.use(VueTouch, { name: "v-touch" });
let vConsole = new VConsole();

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
