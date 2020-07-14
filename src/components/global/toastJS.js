import Vue from "vue";
import ToastComponent from './toast.vue'

const ToastConstructor = Vue.extend(ToastComponent)
let instance;

const Toast = function (msg, duration = 2000) {
    instance = new ToastConstructor({
        data: {
            content: msg,
            duration: duration
        }
    });
    if (instance) {
        document.body.appendChild(instance.$mount().$el);
    }
    return new Promise((resolve, reject) => {
        instance.cancelFun = () => {
            if (instance) {
                document.body.removeChild(instance.$mount().$el);
                resolve('ok');
            }
        }
    })
};

export default Toast
