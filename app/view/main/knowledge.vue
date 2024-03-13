<template>
    <div id="knowledge">
        <headTop></headTop>
        <div class="knowledge">
            <div class="titleSize knowledgeTi"><img :src="zjIco"/>{{knowledge.title}}</div>
            <div class="con-content" v-html="knowledge.free_content"></div>
        </div>
    </div>
</template>
<script>
    import zjIco from "@/assets/image/zjIco.png";
    export default {
        name: "knowledge",
        data(){return{knowledge:[],zjIco:zjIco}},
        mounted(){
            let id=this.$route.query.id?this.$route.query.id:this.$route.params.id;
            document.title ="章节详情";
            this.$ajax("get", "api/v2/knowledge/chapters/"+id).then(data => {this.knowledge=data;});
        },
    }
</script>