import Vue from "vue";
import Router from "vue-router";
import home from "@/view/home";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/axiosRequest",
      name: "axiosRequest",
      component: () => import("@/view/axiosRequest")
    },
    {
      path: "/betterScroll",
      name: "betterScroll",
      component: () => import("@/view/betterScroll")
    },
    {
      path: "/changeTheme",
      name: "changeTheme",
      component: () => import("@/view/changeTheme")
    }
  ]
});
