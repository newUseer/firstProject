<template>
   <div id="tab-item" @click="getpath">
       <div class='tab-image' v-if="!isFalg">  <slot name="top"></slot>    </div>
        <div class='tab-image' v-else>      <slot name="top-active"></slot> </div>
       <div :style="isShow" class='font'><slot name="bottom"></slot></div>
   </div>         
</template>

<script>
export default {
    props:{
        path:String,
         activeClass:{
                type:String,
                default:'red'
            }
    },
    data(){
        return{
            falg:true,
           
            
        }
    },
    methods:{
        getpath(){
            // console.log(this.path);
            // console.log(this.$router.push(this.path));
            // console.log(this);
            
            this.$router.replace(this.path);
        }
    },
    computed: {
        isFalg(){
            return this.falg=this.$route.path.includes(this.path);
        },
        isShow(){
            return  this.falg?{color: this.activeClass}:{}
        }
    }
}
</script>

<style>
#tab-item{
    
    text-align: center;
   
}
    .tab-image img{
        
        width: 24px;
        height: 24px;
    }
    .font{
        text-align: center;
    }
    
</style>