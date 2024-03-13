<template>
    <div id="head" v-if="show">
        <div class="head-top">
            <div class="mob-col-left">
                <img src="http://download.sdk.mob.com/web/images/2019/01/11/16/1547195396404/200_200_8.61.png">
            </div>
            <div class="mob-col-center">
                <p class="topP">ThinkSNS+</p>
                <p class="btnP">下载APP，体验更多精彩内容</p>
            </div>
            <div class="mob-col-right">
                <a class="mob-btn"  href="https://a1g9.ulml.mob.com/https://tsplus.zhibocloud.cn/h5/feeds?params=GQLE+PS7+Wt3vUX6q2jwjSAqBP/xLdO0/l5cuB0wS/pD2urJJWh+3I/Zgpm4GSiLW9L1VoWVeyzl1+ZqX13I+MrJ6cdxMtCq+Lo2KK+MMkQ=&amp;data=e30="><span style="width:100%;"><span style="width:50px;">打开</span></span></a>
                <div style="display: inline-block;padding: 0 10px" @click="show=!show">
                    <img width="13px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVQ4T6WTyQrCMBCGm4Ovpie3VlupXsR38qyguKIiLjf1yazflFSiRmljYJgs839JJhOVJMnN87yhUmqJz93QxQQPFJ0mnSnWA7LJQ0ATEjfCOkoETFRxcoIYyPYXhNg262MsIPacAgzIQkN2NoghbiE+ScwToCE1/Dw9mlJ7E4I4YDzBfNk5W3sBaEgDP8OiDGKIZeejCf4AaEiW2DrjErbGQsSH96tZARpS1om942Xniy0vvwAVBJLU4gCjNopfAbF7EhG7P6OuRrdC+quUEfu6wlw+UyS/8QpAvvPK9s7f5tB1Wes/AL+xjBncJadwAAAAAElFTkSuQmCC">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "head",
        data(){
            return{
                show:true,
            }
        }
    }
</script>

<style scoped>
    .head-top{
        position: fixed;
        left: 0;
        box-sizing: border-box;
        font-size: 14px;
        width: 100%;
        padding: 6px 0 6px 4px;
        display: flex;
        top: 0;
        bottom: auto!important;
        z-index: 100!important;
        background-color: rgba(0,0,0,.6)!important;
    }
    .mob-col-left{
        margin-left: 7px;
        width: 50px;
        height: 50px;
    }
    .mob-col-left img{width: 100%}
    .mob-col-center{
        flex: 1;
        overflow: hidden;
        padding: 0 7px;
    }
    .mob-col-center .topP{
        color: #f2f2f2;
        margin: 0;
        font-size: 14px;
        line-height: 18px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        padding-top: 5px;
    }
    .mob-col-center .btnP{
        color: #c4c2c2;
        margin: 0;
        font-size: 14px;
        line-height: 18px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        padding-top: 5px;
    }
    .mob-col-right{
        display: flex;
        align-items: center;
    }
    .mob-col-right a{
        background-color: #4bb3d4;
        color: #f8f9fa;
        display: inline-block;
        text-align: center;
        border-radius: 2px;
        width: 50px;
        padding: 4px 0;
    }
</style>