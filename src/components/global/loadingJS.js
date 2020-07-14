import Vue from "vue";
import loadingComponent from './loading.vue'

const LoadConstructor = Vue.extend(loadingComponent)
let instance;

let loading = {
    show: (msg = "加载中...") => {
        if (!instance) {
            instance = new LoadConstructor({
                data: {
                    content: msg
                }
            });
            document.body.appendChild(instance.$mount().$el);
        }
    },
    hide: () => {
        if (instance) {
            document.body.removeChild(instance.$mount().$el);
            instance = null;
        }
    }
}

export default loading
