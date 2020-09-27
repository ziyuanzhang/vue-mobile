<template>
  <div class="header-container">
    <nav class="nav">
      <router-link class="btn" to="/">首页</router-link>
      <router-link class="btn" to="axiosRequest">请求</router-link>
      <router-link class="btn" to="betterScroll">左右联动</router-link>
      <router-link class="btn" to="changeTheme">换主题</router-link>
    </nav>
  </div>
</template>
<style lang="less" scoped>
.header-container {
  border: 1px solid #000;
  h1 {
    text-align: center;
    margin-bottom: 10px;
  }
  .nav {
    display: flex;
    flex-wrap: wrap;
    .btn {
      margin: 10px;
      border-bottom: 1px solid #000;
    }
  }
}
</style>
