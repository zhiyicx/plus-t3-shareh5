<template>
    <div id="FeedImage">
        <div v-if="imgTextData.length===1" >
            <span class="keyImgs" v-for="(item,index) in imgTextData" :key="index" @click="ImgUrl=item.url"><img :src="item.url"></span>
        </div>
        <div v-if="imgTextData.length<=4 && imgTextData.length>1" :class="imgTextData.length===2 || imgTextData.length===4?'imgTwo':imgTextData.length===3?'imgSwo':''">
            <span class="keyImgs" v-for="(item,index) in imgTextData" :key="index" @click="ImgUrl=item.url" :style="'background-image: url('+item.url+')'"></span>
        </div>
        <div v-if="imgTextData.length===5">
            <div class="top-five">
                <span @click="ImgUrl=imgTextData[0].url" class="keyImgs first-five" :style="'background-image: url('+imgTextData[0].url+')'"></span>
                <span @click="ImgUrl=imgTextData[1].url" class="keyImgs first-top" :style="'background-image: url('+imgTextData[1].url+')'"></span>
                <span @click="ImgUrl=imgTextData[2].url" class="keyImgs first-btn" :style="'background-image: url('+imgTextData[2].url+')'"></span>
            </div>
            <div class="clear"></div>
            <div class="imgTwo">
                <span @click="ImgUrl=imgTextData[3].url" class="keyImgs" :style="'background-image: url('+imgTextData[3].url+')'"></span>
                <span @click="ImgUrl=imgTextData[4].url" class="keyImgs" :style="'background-image: url('+imgTextData[4].url+')'"></span>
            </div>
        </div>
        <div v-if="imgTextData.length===6">
            <div class="top-five">
                <span @click="ImgUrl=imgTextData[0].url" class="keyImgs first-five" :style="'background-image: url('+imgTextData[0].url+')'"></span>
                <span @click="ImgUrl=imgTextData[1].url" class="keyImgs first-top" :style="'background-image: url('+imgTextData[1].url+')'"></span>
                <span @click="ImgUrl=imgTextData[2].url" class="keyImgs first-btn" :style="'background-image: url('+imgTextData[2].url+')'"></span>
            </div>
            <div class="clear"></div>
            <div class="imgSwo">
                <span @click="ImgUrl=imgTextData[3].url" class="keyImgs" :style="'background-image: url('+imgTextData[3].url+')'"></span>
                <span @click="ImgUrl=imgTextData[4].url" class="keyImgs" :style="'background-image: url('+imgTextData[4].url+')'"></span>
                <span @click="ImgUrl=imgTextData[5].url" class="keyImgs" :style="'background-image: url('+imgTextData[5].url+')'"></span>
            </div>
        </div>
        <div v-if="imgTextData.length===7">
            <div>
                <span @click="ImgUrl=imgTextData[0].url" class="keyImgs first-sev" :style="'background-image: url('+imgTextData[0].url+')'"></span>
                <div class="imgTwo first-btn" style="width: 50%;">
                    <span @click="ImgUrl=imgTextData[1].url" class="keyImgs key-right" :style="'margin-bottom: 2.5%;background-image: url('+imgTextData[1].url+')'"></span>
                    <span @click="ImgUrl=imgTextData[2].url" class="keyImgs key-right" :style="'margin:0 0 2.5% 2.5%;background-image: url('+imgTextData[2].url+')'"></span>
                </div>
                <span @click="ImgUrl=imgTextData[3].url" class="first-btn keyImgs key-right-btn" :style="'background-image: url('+imgTextData[3].url+')'"></span>
            </div>
            <div class="clear"></div>
            <div class="imgSwo">
                <span @click="ImgUrl=imgTextData[4].url" class="keyImgs" :style="'background-image: url('+imgTextData[4].url+')'"></span>
                <span @click="ImgUrl=imgTextData[5].url" class="keyImgs" :style="'background-image: url('+imgTextData[5].url+')'"></span>
                <span @click="ImgUrl=imgTextData[6].url" class="keyImgs" :style="'background-image: url('+imgTextData[6].url+')'"></span>
            </div>
        </div>
        <div v-if="imgTextData.length===8">
            <div class="imgSwo">
                <span @click="ImgUrl=imgTextData[0].url" class="keyImgs" :style="'background-image: url('+imgTextData[0].url+')'"></span>
                <span @click="ImgUrl=imgTextData[1].url" class="keyImgs" :style="'background-image: url('+imgTextData[1].url+')'"></span>
                <span @click="ImgUrl=imgTextData[2].url" class="keyImgs" :style="'background-image: url('+imgTextData[2].url+')'"></span>
            </div>
            <div class="clear"></div>
            <div class="imgTwo">
                <span @click="ImgUrl=imgTextData[3].url" class="keyImgs aert-box" :style="'background-image: url('+imgTextData[3].url+')'"></span>
                <span @click="ImgUrl=imgTextData[4].url" class="keyImgs aert-box" :style="'background-image: url('+imgTextData[4].url+')'"></span>
            </div>
            <div class="clear"></div>
            <div class="imgSwo">
                <span @click="ImgUrl=imgTextData[5].url" class="keyImgs" :style="'background-image: url('+imgTextData[5].url+')'"></span>
                <span @click="ImgUrl=imgTextData[6].url" class="keyImgs" :style="'background-image: url('+imgTextData[6].url+')'"></span>
                <span @click="ImgUrl=imgTextData[7].url" class="keyImgs" :style="'background-image: url('+imgTextData[7].url+')'"></span>
            </div>
        </div>
        <div v-if="imgTextData.length>=9">
            <div class="imgSwo">
                <span @click="ImgUrl=imgTextData[0].url" class="keyImgs" :style="'background-image: url('+imgTextData[0].url+')'"></span>
                <span @click="ImgUrl=imgTextData[1].url" class="keyImgs" :style="'background-image: url('+imgTextData[1].url+')'"></span>
                <span @click="ImgUrl=imgTextData[2].url" class="keyImgs" :style="'background-image: url('+imgTextData[2].url+')'"></span>
            </div>
            <div class="clear"></div>
            <div class="imgSwo">
                <span @click="ImgUrl=imgTextData[3].url" class="keyImgs" :style="'background-image: url('+imgTextData[3].url+')'"></span>
                <span @click="ImgUrl=imgTextData[4].url" class="keyImgs" :style="'background-image: url('+imgTextData[4].url+')'"></span>
                <span @click="ImgUrl=imgTextData[5].url" class="keyImgs" :style="'background-image: url('+imgTextData[5].url+')'"></span>
            </div>
            <div class="clear"></div>
            <div class="imgSwo">
                <span @click="ImgUrl=imgTextData[6].url" class="keyImgs" :style="'background-image: url('+imgTextData[6].url+')'"></span>
                <span @click="ImgUrl=imgTextData[7].url" class="keyImgs" :style="'background-image: url('+imgTextData[7].url+')'"></span>
                <span @click="ImgUrl=imgTextData[8].url" class="keyImgs" :style="'background-image: url('+imgTextData[8].url+')'"></span>
            </div>
        </div>

        <div class="all-bigImg" v-if="ImgShow">
            <img width="100%;" :src="ImgUrl">
            <div @click="ImgShow=!ImgShow" class="delert"><img width="13px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVQ4T6WTyQrCMBCGm4Ovpie3VlupXsR38qyguKIiLjf1yazflFSiRmljYJgs839JJhOVJMnN87yhUmqJz93QxQQPFJ0mnSnWA7LJQ0ATEjfCOkoETFRxcoIYyPYXhNg262MsIPacAgzIQkN2NoghbiE+ScwToCE1/Dw9mlJ7E4I4YDzBfNk5W3sBaEgDP8OiDGKIZeejCf4AaEiW2DrjErbGQsSH96tZARpS1om942Xniy0vvwAVBJLU4gCjNopfAbF7EhG7P6OuRrdC+quUEfu6wlw+UyS/8QpAvvPK9s7f5tB1Wes/AL+xjBncJadwAAAAAElFTkSuQmCC"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "FeedImage",
        data(){return{
            ImgShow:false,
            ImgUrl:"",
            pageWidth:window.innerWidth*0.9,//当前屏幕宽度
            pageHeight:window.innerHeight*0.9,//当前屏幕高度
        }},
        props:["imgTextData"],
        mounted(){
            let _this=this,wi=this.pageWidth+"px";
            let dome=document.getElementsByClassName("keyImgs");
            setTimeout(function () {
                if(_this.imgTextData.length===2 || _this.imgTextData.length===4 || _this.imgTextData.length===5){
                    wi=_this.pageWidth*0.4925+"px";
                }else if(_this.imgTextData.length===3 || _this.imgTextData.length>=9
                    || _this.imgTextData.length===8
                    || _this.imgTextData.length===6 || _this.imgTextData.length===7){
                    wi=_this.pageWidth*0.3233+"px";
                }
                for(let k=0;k<dome.length;k++){
                    dome[k].style.width=wi;
                    if(_this.imgTextData.length===1){
                        dome[k].style.height="auto";
                    }else {
                        dome[k].style.height=wi;
                    }
                }
                //8张图片
                if(_this.imgTextData.length===8){
                    let dome1=document.getElementsByClassName("aert-box");
                    for(let k=0;k<dome1.length;k++){
                        dome1[k].style.width=_this.pageWidth*0.49+"px";
                        dome1[k].style.height=_this.pageWidth*0.49+"px";
                    }
                }
                //5.6张图片
                if(_this.imgTextData.length===5 || _this.imgTextData.length===6){
                    let dome3=document.getElementsByClassName("first-five")[0];
                    let dome4=document.getElementsByClassName("first-top")[0];
                    let dome5=document.getElementsByClassName("first-btn")[0];
                    dome3.style.width=_this.pageWidth*0.60+"px";
                    dome3.style.height=_this.pageWidth*0.60+"px";
                    dome4.style.width=_this.pageWidth*0.385+"px";
                    dome4.style.height=(_this.pageWidth*0.585/2)+"px";
                    dome5.style.width=_this.pageWidth*0.385+"px";
                    dome5.style.height=(_this.pageWidth*0.585/2)+"px";
                }
                //7张图片
                if(_this.imgTextData.length===7){
                    let dome6=document.getElementsByClassName("first-sev")[0];
                    let dome7=document.getElementsByClassName("key-right");
                    let dome8=document.getElementsByClassName("key-right-btn")[0];
                    dome6.style.width=_this.pageWidth*0.485+"px";
                    dome6.style.height=_this.pageWidth*0.485+"px";
                    dome8.style.width=_this.pageWidth*0.5+"px";
                    dome8.style.height=_this.pageWidth*0.5*0.45+"px";
                    for(let k=0;k<dome7.length;k++){
                        dome7[k].style.width=(_this.pageWidth*0.495)*0.49+"px";
                        dome7[k].style.height=(_this.pageWidth*0.495)/2+"px";
                    }
                }
            },200);
        },
        watch:{
            ImgUrl(val){
                if(val!==""){this.ImgShow=true;}
            },
            ImgShow(val){
                if(!val){this.ImgUrl="";}
            }
        }
    }
</script>