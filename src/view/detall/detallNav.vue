<template>
    <nav-bar class="detallNav">
        <div slot="left" @click="go">&lt;</div>
         <div slot="center" v-for="(item,i) in navArr" :key="item.id" 
         :class="{active:i==index}"
         @click="detallNavClick(i)"
         >
            {{ item }}
        </div>
    </nav-bar>
</template>

<script>
import navBar from 'common/navbar/navbar'
export default {
    name:'detallNav',
    props:{
        navArr:Array,
        default(){
            return[]
        }
    },
    data () {
        return {
            index:0
        }
    },
    components:{
        navBar
    },
    methods:{
         detallNavClick(i){
             return this.index=i
         },
         go(){
            //  this.$router.go(-1)
             this.$router.back()
         }
    }

}
</script>

<style scoped>
    .detallNav{
        justify-content: space-evenly;
    }
    .active{
        color: red;
        border-bottom: 1px solid red;
    }
</style>