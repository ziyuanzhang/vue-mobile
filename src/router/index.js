import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import axiosRequest from "@/components/axiosRequest";

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
    }
  ]
});
