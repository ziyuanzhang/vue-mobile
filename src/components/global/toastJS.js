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
};

export default Toast
