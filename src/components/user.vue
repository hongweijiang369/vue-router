<template>
  <div>
      <h2>我是用户界面</h2>
      <p>我是用户界面内容</p>
      <h2>{{userId}}</h2>
      <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message:'hahahaha'
    }
  },
  computed:{
    userId(){
      // $route是哪个组件处于活跃状态就是哪个组件params是参数
      return this.$route.params.userId
    } 
  }

}
</script>

<style>

</style>