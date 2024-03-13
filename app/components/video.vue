<template>
    <div class="container">
        <div class="player" :style="setUp?'position: absolute;width: 100%;top: 50%;left:0;':''">
            <div class="zg-Box" v-if="zgShow" @click="pause()"></div>
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="playsinline"
                          :options="playerOptions"
                          @play="playVideo()"
                          @canplay="onPlayerCanplay($event)">
            </video-player>
        </div>
    </div>
</template>
<script>
    import { videoPlayer } from 'vue-video-player';
    export default {
        props: {
            videoUrl: String,//视频地址
            setUp:String,
        },
        data () {
            return {
                zgShow:false,
                playerOptions: {
                    autoplay: false, // 如果true,浏览器准备好时开始播放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: 'video/mp4',//直播地址application/x-mpegURL/video/mp4
                        src: this.videoUrl// 你的m3u8地址（必填）
                    }],
                    poster: "", // 你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',// 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar:false
                }
            }
        },
        mounted(){
            if(this.setUp){
                document.getElementsByClassName("container")[0].style.backgroundColor="#000000";
                document.getElementsByClassName("container")[0].style.height=window.innerWidth+"px";
                document.getElementsByClassName("player")[0].style.marginTop="-"+window.innerWidth*0.562/2+"px";
            }
        },
        methods:{
            onPlayerCanplay (player) {
                let ua = navigator.userAgent.toLocaleLowerCase();
                // x5内核
                if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
                    document.getElementsByTagName('video')[0].setAttribute('x5-video-player-type',"h5-page");
                } else {
                    document.getElementsByTagName('video')[0].setAttribute('webkit-playsinline',true);
                    document.getElementsByTagName('video')[0].setAttribute('playsinline',true);
                }
            },
            playVideo(){this.zgShow=true},
            pause(){this.$refs.videoPlayer.player.pause();this.zgShow=false}
        },
        watch: {
            //更改视频源
            videoUrl(val){
                if (val !== '') {
                    this.$refs.videoPlayer.player.src(val);
                }
            },
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            },
            playsinline () {
                let ua = navigator.userAgent.toLocaleLowerCase();
                // x5内核
                if(ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null){
                    return false
                } else {
                    return true
                }
            }
        },
        components: {videoPlayer},
    }
</script>
<style>
    .container {background-color: #efefef;min-height: 100%;position: relative;width: 100%;}
    .zg-Box{position: absolute;left: 0;top: 0;bottom: 15%;z-index: 999;right: 0;}
</style>