<template>
<div id="tab-main">
   <tab-container>
      <tab-item path="/home" >
        <img src="~image/tab-bar/home.png" slot="top" />
        <img src="~image/tab-bar/home-active.png" slot="top-active" />
        <span slot="bottom">首页</span>
      </tab-item>
      <tab-item path="/fenlei" activeClass='red'>
        <img src="~image/tab-bar/fenlei.png" slot="top" />
        <img src="~image/tab-bar/fenlei-active.png" slot="top-active" />
        <span slot="bottom">分类</span>
      </tab-item>
      <tab-item path="/cart" activeClass='red'>
        <img src="~image/tab-bar/cart.png" slot="top" />
        <img src="~image/tab-bar/cart-active.png" slot="top-active" />
        <span slot="bottom">购物车</span>
      </tab-item>
      <tab-item path="/profile" activeClass='red'>
        <img src="~image/tab-bar/user.png" slot="top" />
        <img src="~image/tab-bar/user-active.png" slot="top-active" />
        <span slot="bottom">我的</span>
      </tab-item>
    </tab-container>
    </div>
</template>

  

<script>
const tabContainer = () => import("common/tab-bar/tab-container");
const tabItem = () => import("common/tab-bar/tab-item");
export default {
 components:{
    tabContainer,
    tabItem
 }
 }
</script>

<style>

</style>