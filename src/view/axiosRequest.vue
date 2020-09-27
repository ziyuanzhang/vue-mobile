<template>
  <div class="main">
    <div class="top">
      可以取消上次请求<button class="btn" @click="sendFun()">发送请求</button>
    </div>
    <hr />

    <div class="content">
      <div class="item title">
        <span class="row-item id ">id</span>
        <span class="row-item title">title</span>
        <span class="row-item date">date</span>
        <span class="row-item amount">amount</span>
      </div>
      <div class="list">
        <div class="item" v-for="item in list" :key="item.id">
          <span class="row-item id">{{ item.id }}</span>
          <span class="row-item title">{{ item.title }}</span>
          <span class="row-item date">{{ item.date }}</span>
          <span class="row-item amount">{{ item.amount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
let CancelToken = axios.CancelToken;
let cancel;
let url = "http://5b5eb1c48e9f160014b88d1e.mockapi.io/api/records";
export default {
  data() {
    return { list: [] };
  },
  methods: {
    ajaxFun: function({ key }) {
      return axios.get(url, {
        params: { key },
        cancelToken: new CancelToken(function executor(c) {
          cancel = c;
        })
      });
    },
    sendFun: function() {
      // 取消上一次请求
      this.cancelRequest();

      this.ajaxFun({ key: "value" })
        .then(res => {
          // 在这里处理得到的数据
          console.log("res:", res);
          this.list = res.data;
        })
        .catch(err => {
          if (axios.isCancel(err)) {
            console.log("Rquest canceled", err.message); //请求如果被取消，这里是返回取消的message
          } else {
            //handle error
            console.log(err);
          }
        });
    },
    cancelRequest() {
      if (typeof cancel === "function") {
        cancel("这里你可以输出一些信息，可以在catch中拿到");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  padding: 0 10px;
  .top {
    margin: 20px;
    text-align: center;
  }

  .btn {
    margin-left: 10px;
  }
  .content {
    .list {
      height: 400px;
      overflow-y: auto;
    }
    .item {
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      .row-item {
        text-align: center;
      }
      .id {
        width: 10%;
      }
      .title {
        width: 20%;
      }
      .date {
        flex: 1;
      }
      .amount {
        width: 20%;
      }
    }
  }
}
</style>
