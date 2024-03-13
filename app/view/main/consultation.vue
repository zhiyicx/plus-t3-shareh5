<template>
    <div id="consultation">
        <headTop></headTop>
        <div class="titleSize" style="padding-bottom: 0;">{{consultation.title}}</div>
        <div class="consultation-user">
            <span class="consultation-type">{{consultation.category.name}}</span>
            <span class="small-size">{{consultation.author.name}}<span class="margin-l"></span>发布于{{consultation.created_at}}</span>
        </div>
        <div class="consultation-zy">{{consultation.summary}}</div>
        <div class="con-content" v-html="consultation.content"></div>
    </div>
</template>
<script>
    export default {
        name: "consultation",
        data(){return{consultation:[]}},
        mounted(){
            let id=this.$route.query.id?this.$route.query.id:this.$route.params.id;
            document.title ="资讯详情";
            this.$ajax("get", "api/v2/infos/"+id+"?with=category,author").then(data => {this.consultation=data;});
        },
    }
</script>
