<template>
   <div id='goodsList'>
       <goods-list-item  v-for="item in  goods" :key="item.id" 
       :goodsItem='item'
        :goodsType='goodsType'
       :class="{goods:true}"
         />
   </div>
</template>

<script>
import goodsListItem from'./goods-list-item'
export default {
    name:'goodsList',
    components:{
        goodsListItem
    },
    props:{
     goodsType:String,
        goods:{
         type:Array,
         default(){
             return []
         }
     }
    }
}
</script>

<style>
    #goodsList{
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
        text-align: center;
        background-color: aliceblue;
    }
    .goods :hover{
       box-shadow: 2px 2px 3px 1px rgba(0,0,0, .3);
   }
</style>