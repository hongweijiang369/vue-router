<template>
  <div id="app">
    <!--      -->
   <router-link to="/home" tag="button">首页</router-link>
     <!-- 监听方式跳转到首页 -->
   <button @click="homeclick">首页</button>
   <router-link to="/about">关于</router-link>
   
   <router-link v-bind:to="'/user/'+userId">用户界面</router-link>
      <router-link :to="{path:'/profile',query:{name:'hong',age:'15'}} ">档案</router-link>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
    userId:'lisi',

    }
  },
  methods:{
    homeclick(){
      this.$router.push('/home')
    }
  }
}
</script>

<style>

</style>
