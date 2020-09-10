import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import vueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

Vue.use(vueRouter)
Vue.use(VueAxios, axios)

// const router = new vueRouter({ mode: 'history' });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");