<template>
  <div class="changeTheme">
    <h1 class="title">换皮肤</h1>
    <div class="container">
      <h1>换色1--加载不通css</h1>
      <div
        class="item"
        v-for="(item,index) in list"
        :key="index"
        @click="changeThemefun(item.val)"
      >{{item.name}}</div>
    </div>
    <div class="container">
      <h1>换色2--改变root的class,用less</h1>
      <div
        class="item"
        v-for="(item,index) in list"
        :key="index"
        @click="changeThemefun2(item.val)"
      >{{item.name}}</div>
      <div class="demo2"></div>
    </div>
    <div class="container">
      <h1>换色3--用less.js</h1>
      <div
        class="item"
        v-for="(item,index) in list"
        :key="index"
        @click="changeThemefun3(item.val)"
      >{{item.name}}</div>
      <div class="demo3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [{ name: "red", val: "red" }, { name: "green", val: "green" }]
    };
  },
  created() {},
  mounted() {
    let url = "http://cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.min.js";
    axios.get(url).then(res => {
      //console.log("url:", res.data);
    });
  },
  methods: {
    changeThemefun(val) {
      console.log("changeThemefun:", val);
      document
        .querySelector("[name='changeTheme']")
        .setAttribute("href", `./static/css/${val}.css`);
    },
    changeThemefun2(val) {
      console.log("changeThemefun:", val);
      document.querySelector("#app").setAttribute("class", `theme${val}`);
    },
    changeThemefun3(val) {
      console.log("changeThemefun:", val);
      window.less
        .modifyVars({
          // 调用 `less.modifyVars` 方法来改变变量值
          "@bg-color": "#2f54eb"
        })
        .then(() => {
          console.log("修改成功");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.changeTheme {
  .title {
    padding: 5px 0;
    text-align: center;
    height: 40px;
  }
  .item {
    padding: 5px 0;
  }
  .demo2,
  .demo3 {
    width: 50px;
    height: 50px;
  }
}
</style>
