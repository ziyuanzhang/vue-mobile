<template>
  <div>
    <button @click="sendFun()">发送请求</button>
  </div>
</template>
<script>
import axios from "axios";
let CancelToken = axios.CancelToken;
let cancel;
let url = "http://5b5eb1c48e9f160014b88d1e.mockapi.io/api/records";
export default {
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
