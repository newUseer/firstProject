<template>
  <div id="detall">
   <!-- 哈哈哈哈哈哈哈哈 -->
      <detall-nav :navArr="['商品','参数','评论','推荐']"></detall-nav>
      <scroll ref="scroll">
        <detall-swiper :arr='isShow'></detall-swiper>
      <goods-list :goods='isShow' ></goods-list>
      </scroll>
      
  </div>
</template>

<script>
import detallNav from './detallNav'
import detallSwiper from './detallSwiper'
import goodsList from 'content/goods/goodsList'

import scroll from 'common/scroll/bscroll'
import {itemImgListenter} from '../../until/mixin'

export default {
    name:'detall',
    components:{
      detallNav,
      detallSwiper,
      goodsList,
      scroll
    },
    data () {
      return {
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
        ]},
        type:'',
        Refresh:null
      } 
      }
    },
    computed:{
      isShow(){
        console.log(this.$route.params.type);
        this.type=this.$route.params.type
         return this.type&&this.goods[this.type].list
      }
      
    },
    mixins:[itemImgListenter],
    destroyed(){
    this.$bus.$off('goodsItemImgLoad',this.Refresh)

    }

}
</script>

<style scoped>
#detall{
  width: 100%;
  height: 100%;
  }
</style>>
  
