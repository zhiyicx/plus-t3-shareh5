<template>
    <div id="imgText">
        <!--发布者-->
        <div class="circle-box topUser" v-if="imgTextData.user">
            <div class="circle-img"><img :src="imgTextData.user.avatar.url"></div>
            {{imgTextData.user.name}}
        </div>
        <div class="imgText" style="padding-bottom: 3%;">
            <headTop></headTop>
            <div class="titleSize" v-if="imgTextData.length!==0 && imgTextData.theme!==null">{{imgTextData.theme.title}}</div>
            <div :class="imgTextData.theme!==null?'textBox':'textBox margin-t'"
                 :style="imgTextData.theme!==null && imgTextData.feed_content!==null?'margin-bottom: 2.5%':''">{{imgTextData.feed_content}}</div>
            <div :class="imgTextData.theme!==null?'Img-box':'Img-box margin-t'" v-if="imgTextData.images">
                <FeedImage :imgTextData="imgTextData.images"></FeedImage>
            </div>
            <div :class="imgTextData.theme!==null?'Img-box':'Img-box margin-t'" v-if="imgTextData.video">
                <videoBox  :videoUrl="imgTextData.video.resource.url"></videoBox>
            </div>
            <div class="clear"></div>
            <!--圈子-->
            <div class="circle-box" v-if="imgTextData.topics && imgTextData.topics.length!==0">
                <div class="circle-img"><img style="border-radius: 5px;" :src="imgTextData.topics[0].logo.url"></div>
                {{imgTextData.topics[0].name}}
                <span class="Label-btn">打赏</span>
                <span class="Label-btn">加入</span>
                <div class="time-right">{{timeZh(imgTextData.created_at)}}</div>
            </div>
        </div>
        <!--广告-->
        <div class="ad-boz hsSolid" v-if="adData!==''">
            <a v-for="(item,index) in adData" class="mob-btn" :key="index"  :href="item.data.link"><img :src="item.data.image"/></a>
        </div>
        <!--评论-->
        <div class="imgText hsSolid" v-if="commentList.comments.length!==0">
            <div class="comment-box margin-t">
                <div class="circle-box" v-for="(item,index) in commentList.comments" :key="index">
                    <div class="circle-img"><img :src="item.user.avatar?item.user.avatar.url:userImg"></div>
                    <div class="right-user">
                        <div>{{item.user.name}}<span class="time-right">{{timeZh(item.created_at)}}</span></div>
                        <p class="text-comment">{{item.body}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="imgText hsSolid noText" v-if="show && commentList.comments.length===0">
            暂无评论
        </div>
    </div>
</template>
<script>
    import userImg from "@/assets/image/userImg.jpg";
    export default {
        name: "imgText",
        data(){
            return{
                userImg:userImg,
                show:false,
                adData:"",
                imgTextData:[],
                commentList:{comments:[]}
            }
        },
        mounted(){
            let id=this.$route.query.id?this.$route.query.id:this.$route.params.id;
            document.title ="动态详情";
            this.$ajax("get", "api/v2/feeds/"+id).then(data => {this.imgTextData=data;}).catch(() => {});
            this.$ajax("get", "api/v2/feeds/"+id+"/comments").then(data => {this.commentList=data;this.show=true;}).catch(() => {});
            this.$ajax("get", "api/v2/advertisingspace ").then(data => {
                for (let k = 0; k < data.length; k++) {
                    if (data[k].space === "feed:single") {
                        this.$ajax("get", "api/v2/advertisingspace/"+data[k].id+"/advertising ").then(obj => {
                            this.adData=obj;
                        }).catch(() => {});
                        return;
                    }
                }
            });
        },
        methods:{
            timeZh(time){
                let startDateM = (new Date(time)).getTime();
                let fbTime = new Date(startDateM) ;
                let noTime= new Date() ;
                let day=parseInt((noTime.getTime() - startDateM) / (1000 * 60 * 60 * 24));
                if(day>=1){
                    return "发布于"+day+"天前"
                }else{
                    if(noTime.getDate()-fbTime.getDate()==1 || noTime.getDate()-fbTime.getDate()<0){
                        if((24-fbTime.getHours())+noTime.getHours()>12){
                            return "12小时前"
                        }else if((24-fbTime.getHours())+noTime.getHours()>6){
                            return "6小时前"
                        }else{
                            return (24-fbTime.getHours())+noTime.getHours()+"小时前"
                        }
                    }else{
                        if(noTime.getHours()-fbTime.getHours()>12){
                            return "12小时前"
                        }else if(noTime.getHours()-fbTime.getHours()>6){
                            return "6小时前"
                        }else if(noTime.getHours()-fbTime.getHours()==0){
                            if(noTime.getMinutes()-fbTime.getMinutes()>1){
                                return noTime.getMinutes()-fbTime.getMinutes()+"分钟前"
                            }else{
                                return "刚刚"
                            }
                        }else if(noTime.getHours()-fbTime.getHours()==1){
                            if((60-fbTime.getMinutes())+noTime.getMinutes()>60){
                                return "1小时前"
                            }else{
                                return (60-fbTime.getMinutes())+noTime.getMinutes()+"分钟前"
                            }
                        }else{
                            return noTime.getHours()-fbTime.getHours()+"小时前"
                        }
                    }
                }
            }
        },
        watch:{}
    }
</script>
