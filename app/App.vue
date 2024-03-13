<template>
  <div id="app">
    <router-view v-if="showHtml"></router-view>
  </div>
</template>
<script>
  import {mapActions } from "vuex";
  import axios from "axios";
  export default{
      name:'App',
      data() {
          return{
              showHtml:false,
          }
      },
      mounted(){
          if(process.env.context==='production' || process.env.context==='development'){
              axios.get('static/ip-config.json').then((res) => {
                  let Api =res.data.api;
                  sessionStorage.ipConfig_auto = JSON.stringify({api:Api});
                  this.showHtml=true;
              }).catch((error)=>{});
          }else {
              this.showHtml=true;
          }
      },
      created(){this.$store.dispatch("baseInfo");}
  }
</script>