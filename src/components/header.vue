<template>
  <div class="header-container">
    <h1>header</h1>
    <nav class="nav">
      <router-link class="btn" to="/">home</router-link>
      <router-link class="btn" to="axiosRequest">axiosRequest</router-link>
      <router-link class="btn" to="betterScroll">betterScroll</router-link>
      <router-link class="btn" to="changeTheme">changeTheme</router-link>
    </nav>
  </div>
</template>
<style lang="less" scoped>
.header-container {
  border: 1px solid #000;

  .nav {
    display: flex;
    flex-wrap: wrap;
    .btn {
      margin-right: 10px;
      border-bottom: 1px solid #000;
    }
  }
}
</style>
