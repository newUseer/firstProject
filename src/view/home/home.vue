<template>
  <div id="home">
      <nav-bar><div class='nav-center' slot="center">购物街</div></nav-bar>
       <tab-control :titleArr="['流行','新款','精选']"
        class="tabControl"
        v-show="tabControlShow"
       @tabclick='tabclick'
       ref="tabTop01"
       ></tab-control>
    <scroll class="content" 
    ref="scroll" 
    :probe-type='3' 
    @scroll="backTopShow"
    :pullUpLoad='true'
    @pullingUp='pullingup'
    >
       <swiper></swiper>
      <home-recommend></home-recommend>
      <feature @featureImgLoad='featureImgLoad'></feature>
      <tab-control :titleArr="['流行','新款','精选']" 
       @tabclick='tabclick'
       ref="tabTop02"
       ></tab-control>
      <goods-list :goods="isShow" :goodsType='currentType'></goods-list>
    </scroll>
     <back-top class="back-top" @click.native="backTopClick" v-show="falg"></back-top>
      
  </div>
</template>

<script>
const navBar=()=>import('common/navbar/navbar')
const swiper=()=>import('common/swiper/swiper')
const homeRecommend=()=>import('./childenModeo/HomeRecommenV')
const feature=()=>import('./childenModeo/FeatureV')
import tabControl from 'content/tab-control/TabControl'
const goodsList=()=>import('content/goods/goodsList')
const backTop=()=>import('content/backTop/backTop')

import scroll from 'common/scroll/bscroll'

import {getGoods} from 'network/home'
import {itemImgListenter} from '../../until/mixin'
export default {
  components:{
    navBar,
    swiper,
    homeRecommend,
    feature,
    tabControl,
    goodsList,
    scroll,
    backTop
  },
  data(){
    return{
     
      //存储 请求的数据 goodslist展示数据   
      goods:{
        //流行的数据 pop  页数第0页 还没请求
        'pop':{page:0,list:[
        {id:1,title:'啊哈',url:require('image/goods/one/one01.jpg')},
        {id:2,title:'啊哈',url:require('image/goods/one/one02.jpg')},
        {id:3,title:'啊哈',url:require('image/goods/one/one03.jpg')},
        {id:4,title:'啊哈',url:require('image/goods/one/one04.jpg')},
        {id:5,title:'啊哈',url:require('image/goods/one/one05.jpg')},
        {id:6,title:'啊哈',url:require('image/goods/one/one06.jpg')}
        ]},
        //新款数据  news  
        'news':{page:0,list:[
        {id:1,title:'啊哈',url:require('image/goods/two/two01.jpg')},
        {id:2,title:'啊哈',url:require('image/goods/two/two02.jpg')},
        {id:3,title:'啊哈',url:require('image/goods/two/two03.jpg')},
        {id:4,title:'啊哈',url:require('image/goods/two/two04.jpg')},
        {id:5,title:'啊哈',url:require('image/goods/two/two05.jpg')},
        {id:6,title:'啊哈',url:require('image/goods/two/two06.jpg')}
        ]},
        //精选数据
        'sell':{page:0,list:[
        {id:1,title:'啊哈',url:require('image/goods/three/three01.jpg')},
        {id:2,title:'啊哈',url:require('image/goods/three/three02.jpg')},
        {id:3,title:'啊哈',url:require('image/goods/three/three03.jpg')},
        {id:4,title:'啊哈',url:require('image/goods/three/three04.jpg')},
        {id:5,title:'啊哈',url:require('image/goods/three/three05.jpg')},
        {id:6,title:'啊哈',url:require('image/goods/three/three06.jpg')}
        ]}
      } ,
      // 记录当前点击 的那个tabcontrol
      currentType:'pop',
      falg:false,
      tabControlShow:false,
      tabControlTop:0,
      saveY:0,
      Refresh:null
    }
  },
  created(){
  //   //请求 流行的数据
  //  this.getGoods('pop')
  //  this.getGoods('news')
  //  this.getGoods('sell')
  
  },
  //将mounteds 里的函数方法抽离    代码复用
  mixins:[itemImgListenter],
  // mounted(){
  // //   这里调用一下防抖动函数   时间要设的长一点  因为是本地图片加载很快  定时器无法很快清除上一次图片加载的定时器
  //   const refresh= this.debounce(this.$refs.scroll.refresh,10000)
  //   //这里将函数抽离出来  离开组件时  停止监听全局事件
  //   this.Refresh=()=>
  // {
  //   //当 组件创建好时调用 页面bscroll 里的方法重新计算 滚动区域
  //  refresh()
  // }
  //   //到组件goods item 发生图片加载事件时  调用事件总线 组件弹出的事件    进行图片加载刷新
  // this.$bus.$on('goodsItemImgLoad',this.Refresh)
  // // //图片加载完成计算   tabControlTop 的高度
  // // console.log(this.$refs.tabTop02.$el);     -------测试
  
  // //  this.tabControlTop=this.$refs.tabTop01.$el.offsetTop
  // },
  activated(){
    this.$refs.scroll.scrollto(0,this.saveY,0)
    
    // this.$refs.scroll.scrollto(0,this.$store.homeScroll,0)
  },
  deactivated(){
     //拿到滚动 的y轴值
      this.saveY=this.$refs.scroll.bscroll.y
      // this.$store.getters.getScroll(this.$refs.scroll.bscroll.y)
      //取消全局事件的监听
    this.$bus.$off('goodsItemImgLoad',this.Refresh)
  },
  methods:{
    //防抖动函数
    //   debounce 防抖节流 的意思    参数一传入需要防抖的函数   参数二 传入需要等待的时间
    // debounce(fnc,delay){
    //   let time=null
    //   //ags   如果函数有参数则解析
    //  return function(...ags){
    //    //如果time 是个空  则执行  定时器
    //    if(time) clearInterval(time)
    //    time=setInterval(()=>{
    //      //使用 apply方法改变this指向   因为fnc这个函数  指向的是vue实例  进入这里之后调用者变成了home对象  
    //                 这里使用apply 将this（this是当前函数调用者）指向改变
    //      fnc.apply(this,ags)
    //    },delay)
    //  }
    // },
    // getGoods(type){
    //   //请求一次 就加一   用来请求下一页数据
    //   let page=this.goods[type].page+1
    //   //用 请求数据模块
    //   getGoods(type,page).then(res=>{
    //     //将 请求到的数组 元素添加到 相关数据的list中      ...将请求到的数组解析为被个数组元素依次push到数组里
    //     this.goods[type].list.push(...res.data.list)
    //     // 记录当前的页数
    //     this.goods[type].page+=1
    //      请求完后调用  这个  上拉加载更多
            // this.$refs.scroll.finishPullUp()
    //   }

    //   )
    // }
    tabclick(i){
      console.log(i);
      this.$refs.tabTop01.index=i
       this.$refs.tabTop02.index=i
      
      switch (i) {
        case 0:
          this.currentType="pop";
          break;
       case 1:
          this.currentType="news";
          break;
       case 2:
          this.currentType="sell";
          break;
       
      }
    },
    backTopClick(){
      //获取到  scroll 组件 对象   拿到里面的方法（封装进去了 拿属性也可以 scroll属性指向的是scroll对象  再调用scrollto方法）  
      
      // console.log(this.$refs.scroll.bscroll.scrollTo(0,0));
      this.$refs.scroll.scrollto(0,0)
    },
    backTopShow(position){
      // console.log(position);
      this.falg=-position.y>300  
       //这里  获取到滚动的距离  如果大于 tabControl 的top值就  将布尔值改为true
this.tabControlShow=-position.y>this.tabControlTop
      // console.log(this.tabControlTop);
     
    },
    pullingup(){
      console.log('加载');
      //请求数据
      // this.getGoods(this.currentType)
  // 重新计算滚动高度   因为图片加载速度问题 滚动距离有误差
      this.$refs.scroll.refresh()
    },
    featureImgLoad(){
      //图片加载完成计算   tabControlTop 的高度
        // console.log(this.$refs.tabTop02.$el.offsetTop);
  
   this.tabControlTop=this.$refs.tabTop02.$el.offsetTop

    }
  },
  computed:{
    isShow(){
      return this.goods[this.currentType].list
    }

  }

}
</script>
 
<style scoped>
 /* // 加  上scoped  style 只作用与本文件 */
#home{
  position: relative;
  /* margin-bottom:56px ; */
  height: 100vh;
}
   #home .nav-center{
     width: 100%;
     background-color:pink ;
     color: aliceblue;
     position: fixed;
     top: 0;
     right: 0;
     left: 0;
     z-index: 1;
   }
   /* .tabControl{
     position: sticky;
     top: 44px;
   } */
   .tabControl{
     position: relative;
     top: 0px;
    z-index: 1;
   }
   .content{
     /* height: ; */
     overflow: hidden;
     position: absolute;
     top: 44px;
     bottom: 56px;
     left: 0;
     right: 0;
   }
   .back-top{
     position: absolute;
     bottom: 60px;
     right:10px;
     width: 60px;
     height: 60px;
   }
</style>