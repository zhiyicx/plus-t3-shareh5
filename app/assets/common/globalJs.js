/**
 *
 *
 * 全局注册组件JS
 *
 *
 * **/
import headTop from "@/components/head";
import FeedImage from "@/components/FeedImage";
import videoBox from "@/components/video";

const globa={
    install(Vue){
        Vue.component("headTop",headTop);
        Vue.component("FeedImage",FeedImage);
        Vue.component("videoBox",videoBox);
    }
};
export default globa