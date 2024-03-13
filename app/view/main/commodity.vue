<template>
    <div id="commodity">
        <headTop></headTop>
        <div class="topTpVideo">
            <videoBox v-if="videoUrl!==''" :setUp="1" v-show="type===1"  :videoUrl="videoUrl"></videoBox>
            <swiper v-show="type===2" :options="swiperOption" class="swiper-wrap"  ref="mySwiper">
                <swiper-slide v-for="(item,index) in commodity.photos" :key="index">
                    <img :src="item.image.url" alt="" />
                </swiper-slide>
                <!-- 常见的小圆点 -->
                <div class="swiper-pagination" slot="pagination" ></div>
            </swiper>
            <div class="kzBtn" v-if="videoShow">
                <span :class="type===1?'xzkey':''" @click="type=1"><img src="../../assets/image/play.png"/>视频</span>
                <span :class="type===2?'xzkey':''" @click="type=2">图片</span>
            </div>
        </div>
        <div class="commodity" style="padding-bottom: 5%">
            <div class="textBox" style="color:#000000!important;margin: 3.5% 0!important;">{{commodity.title}}</div>
            <div class="commodity-price">
                <div class="commodity-price-left">
                    <p class="price-top">
                        <span style="background:rgba(247,247,247,1);border-radius:6px;padding: 1%;">最新兑换价</span>
                        <span style="font-size: 1.2rem;">￥{{commodity.price}}</span>
                        <span style="font-size: 0.8rem;">+{{commodity.score}}积分</span></p>
                    <p class="price-small">市场价￥{{commodity.market_price}},积分可抵扣￥{{commodity.score/100}},最多抵扣￥{{commodity.score/100}}</p>
                    <div class="btn-red">
                        <div class="quan-xian"></div>
                        <div class="red-xian"></div>
                        <div class="poes-red">
                            <p>当前价￥{{commodity.price+(commodity.score/100)}}</p>
                            <p style="font-size:0.6rem;">{{commodity.score}}积分可抵扣￥{{commodity.score/100}}</p>
                        </div>
                    </div>
                </div>
                <div class="commodity-price-right" v-if="commodity.user">
                    <div>
                        <div class="user-tx"><img :src="commodity.user.avatar.url"></div>
                        <p class="cen-size">{{commodity.user.name}}</p>
                        <div class="btn-guz">关注</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="commodity hsSolid">
            <div class="xian-diepl" style="margin: 20px auto 5px">
                <span>详情</span>
                <span class="margin-l" style="color: #999999;">点评</span>
                <span class="icon-pl"><img :src="icon"/>写点评</span>
            </div>
            <div class="textBox commodityImg">
                <p class="margin-t">{{commodity.top_text}}</p>
                <img v-for="(item,index) in commodity.content_images" :key="index" :src="item.url">
            </div>
        </div>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    require("swiper/dist/css/swiper.css");
    import icon from "@/assets/image/icon.png";
    export default {
        name: "commodity",
        data(){
            return{
                videoShow:false,
                videoUrl:'',
                type:2,
                icon:icon,
                commodity:[],
                swiperOption: {
                    notNextTick: true,
                    //循环
                    loop: true,
                    //设定初始化时slide的索引
                    initialSlide: 0,
                    //自动播放
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                        /* 触摸滑动后是否继续轮播 */
                        disableOnInteraction: true
                    },
                    //滑动速度
                    speed: 800,
                    //滑动方向
                    direction: "horizontal",
                    //小手掌抓取滑动
                    grabCursor: true,
                    //分页器设置
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        type: "fraction",
                    }
                }
            }
        },
        components: {swiper, swiperSlide},
        mounted(){
            let id=this.$route.query.id?this.$route.query.id:this.$route.params.id;
            document.title ="商品详情";
            this.$ajax("get", "api/v2/mall/commodities/"+id).then(data => {
                this.commodity=data;
                for(let k=0;k<this.commodity.photos.length;k++){
                    if(this.commodity.photos[k].video){
                        this.type=1;
                        this.videoShow=true;
                        this.videoUrl=this.commodity.photos[k].video.url;
                    }
                }
                setTimeout(function (){document.getElementsByClassName("swiper-container")[0].style.height=window.innerWidth+"px";},200)
            });
        },
        watch:{}
    }
</script>