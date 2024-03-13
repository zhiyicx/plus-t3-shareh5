import Vue from "vue";
import App from "@/App.vue";
import store from "@/store/index";
import router from "@/router";
import { sync } from "vuex-router-sync";
import { iHttp } from "./http";
import VideoPlayer from 'vue-video-player';
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import hls from 'videojs-contrib-hls'
import "@/assets/css/public.css";
import qjGlobal from "../assets/common/globalJs.js";

Vue.use(qjGlobal);
Vue.use(VideoPlayer);
Vue.use(hls);

sync(store, router);//同步状态
Vue.prototype.$ajax = iHttp;//ajax请求

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
