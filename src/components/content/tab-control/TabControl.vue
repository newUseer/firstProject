<template>
    <div id="tabControl">
        <div v-for="(item,i) in titleArr" :key="item.id" 
        :class="{active:i==index}"
        @click="itemClick(i)"
        >
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    name:'tabControl',
    props:{
        titleArr:{
            type:Array,
            default:[]
        }
    },
    data () {
        return {
            index:0
        }
    },
    methods: {
      itemClick(i){
          this.index=i
          //将事件发射出去
          this.$emit('tabclick',i)
      }  
    }
}
</script>

<style>
    #tabControl{
        display: flex;
        height: 40px;
        line-height: 40px;
        /* border: 1px solid red; */
        justify-content: space-evenly;
        background-color: #fff;
    }
    .active{
       border-bottom:2px solid red ;
    }
</style>