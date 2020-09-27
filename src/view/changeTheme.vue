<template>
  <div class="changeTheme">
    <h1 class="title">换皮肤</h1>
    <hr />
    <div class="container">
      <h1>1--加载不通css</h1>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in list"
          :key="index"
          @click="changeThemefun(item.val)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="container">
      <h1>2--改变root的class,用less</h1>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in list"
          :key="index"
          @click="changeThemefun2(item.val)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="demo2"></div>
    </div>
    <div class="container">
      <h1>
        <span>3--用less.js</span>
        <input type="color" value="#04be02" @change="colorchange($event)" />
      </h1>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in list"
          :key="index"
          @click="changeThemefun3(item.val)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="demo3"></div>
    </div>
    <div class="container">
      <h1>4--通过css的var变量</h1>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in list"
          :key="index"
          @click="changeThemefun4(item.val)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="demo4"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{ name: "red", val: "red" }, { name: "green", val: "green" }]
    };
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
          "@bg-color": val
        })
        .then(() => {
          console.log("修改成功");
        });
    },
    colorchange(val) {
      console.log("colorchange:", val.target.value);
      window.less
        .modifyVars({
          "@bg-color": val.target.value
        })
        .then(() => {
          console.log("修改成功");
        });
    },
    changeThemefun4(val) {
      document
        .querySelector("[name='changeTheme']")
        .setAttribute("href", `./static/css/${val}.css`);
    }
  }
};
</script>
<style lang="less" scoped>
.changeTheme {
  .title {
    margin: 20px;
    text-align: center;
  }
  .container {
    padding: 10px 10px;
    border-bottom: 1px solid #ccc;
    .title {
      text-align: center;
      height: 40px;
    }
    .list {
      margin-top: 5px;
      display: flex;
      align-items: center;
      .item {
        padding: 5px 5px;
        margin-right: 10px;
      }
    }
    .demo4 {
      background-color: var(--bg-color);
    }
    .demo2,
    .demo3,
    .demo4 {
      width: 50px;
      height: 50px;
      margin-top: 10px;
    }
  }
}
</style>
