import Vue from "vue";
import confirmComponent from './confirm.vue'

const ConfirmConstructor = Vue.extend(confirmComponent)
let instance;

const confirm = function (title, content) {
    instance = new ConfirmConstructor({
        data: {
            title: title,
            content: content
        }
    })
    document.body.appendChild(instance.$mount().$el);
    return new Promise((resolve, reject) => {
        instance.cancelFun = () => {
            if (instance) {
                document.body.removeChild(instance.$mount().$el);
                // reject(new Error('cancel'));
            }
        };
        instance.okFun = () => {
            if (instance) {
                document.body.removeChild(instance.$mount().$el);
                resolve('ok');
            }
        }
    })
}

export default confirm;
