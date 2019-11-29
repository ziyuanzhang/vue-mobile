import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import axiosRequest from "@/components/axiosRequest";
import betterScroll from "@/components/betterScroll";
import changeTheme from "@/components/changeTheme";

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
      component: axiosRequest
    },
    {
      path: "/betterScroll",
      name: "betterScroll",
      component: betterScroll
    },
    {
      path: "/changeTheme",
      name: "changeTheme",
      component: changeTheme
    }
  ]
});
