<template>
    <div id="swiper">
       <div id='swiper-img'>
         <a v-for="(item,i) in swiperArr" :key="item.id" v-show="i==index"  href="item.link">
             <img  :src="item.url"/> 
         </a> 
      
       </div> 
         <div id="swiper-li">
            <ul>
                <li v-for="(item,i) in swiperArr" :key="item.id" 
                :class="{active: i==index}"></li> 
             </ul>
        </div>
       
    </div>
</template>

<script>
export default {
    props:{
            swiperArr:{
              type :Array,
            default(){
             return [   {id:0,url:require('image/swiper/swiper01.jpg'),link:'#'},
                {id:1,url: require('image/swiper/swiper02.jpg'),link:'#'},
                {id:2,url:require('image/swiper/swiper03.jpg'), link:'#'},
                ]} 
            }
           
    },
    name:'swiper',
    data () {
        return {
            index:0,
        
        }
    },
    mounted(){
        
            setInterval(() => {
                
                this.index>(this.swiperArr.length)-2?this.index=0:this.index++
            }, 1000);
        
    }
}
</script>

<style>
   #swiper{
       height: 200px;
       width: 100%;
       position: relative;
       /* border: 1px dotted red;  */
       height: 200px;
    }
        #swiper-img img{
           height: 200px;
            width: 100%;
         }
    #swiper-li {
        position: absolute;
        bottom: 0;
        left: 43%;     
    }
    #swiper-li li{
        margin-left:10px ;
        display: inline-block;
        width: 8px;
        height: 8px;

        list-style: none;
        
        border-radius: 50%;
        background-color:white;
    }
   #swiper-li .active{
        background-color:orange;
    }
</style>