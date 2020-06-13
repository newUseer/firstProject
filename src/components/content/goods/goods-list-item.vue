<template>
   <div id="goodsItem" @click="goodsItemClick">
        <img :src="goodsItem.url" @load="goodsItemImgLoad" >
           {{goodsItem.title}}
   </div>
</template>

<script>
export default {
 name:'goods-list-item',
 props:{
     goodsType:String,
     goodsItem:{
         type:Object,
         default(){
             return {}
         }
     },
     path:String
 },
 methods:{
     goodsItemImgLoad(){
        //  console.log(this.$bus);
        //  通过事件总线来  发射事件  供叔叔伯伯组件  调用
         this.$bus.$emit('goodsItemImgLoad')
     },
     goodsItemClick(){
         //点击  跳转到  详情页并且  传入id
         this.$router.push('/detall'+this.goodsItem.id+this.goodsType)
     }
 }
}
</script>

<style>
    #goodsItem{
        width: 48%;
         margin-top: 10px;
         background-color: aliceblue;
         border: 1px none transparent;
    }
    #goodsItem img{
        width: 100%; 
    }
 
</style>