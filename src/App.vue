<template>
  <div id="app">
    <keep-alive>
        <router-view/>
    </keep-alive>
 
    <tab-main></tab-main>
  </div>
</template>
<script>
//使用懒加载

const tabMain=()=>import('common/tab-bar/tab-main')
export default {
  name: "app",
  components: {
    tabMain
  },
  data() {
    return {};
  }
};
</script>
 
<style>
@import 'assets/style/base.css';
</style>
