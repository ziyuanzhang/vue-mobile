import Toast from "@/components/global/toastJS";

export default function (axios) {
  axios.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      Toast({ message: "请求超时!" });
      return Promise.resolve(err);
    }
  );
  axios.interceptors.response.use(
    data => {
      if (data.status && data.status === 200 && data.data.status === "error") {
        // Toast({ message: data.data.msg });
        return;
      }
      return data;
    },
    err => {
      if (err.response.status === 504 || err.response.status === 404) {
        Toast({ message: "服务器被吃了⊙﹏⊙∥" });
      } else if (err.response.status === 403) {
        Toast({ message: "权限不足,请联系管理员!" });
      } else {
        Toast({ message: "未知错误!" });
      }
      return Promise.resolve(err);
    }
  );
}
