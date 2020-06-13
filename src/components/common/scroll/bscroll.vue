<template>
   <div id="bscroll" ref="wipper">
       <!-- //首先安装对应的better-scroll 组件 -->
       <!-- 这里需要一个容器将内容装起来 相当一 template -->
       <div class="content">
           <slot></slot>
       </div>

   </div>
   
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'bscroll',
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data () {
        return {
            bscroll:null
        }
    },
    mounted(){
        this.bscroll=new Bscroll(this.$refs.wipper,{
            //这里使用 better-scroll 滚动  一些点击事件监听不到   需要设置这个
            click:true,
            //probeType   设置滚动事件   0，1不监听 2手指滚动监听 3只要滚动就监听 （数值0.1.2.3）
            probeType:this.probeType,
            //puliupLoad   上拉加载事件    布尔值  true开启
            pullUpLoad:this.pullUpLoad
        })
        // //监听滚动事件
        // this.bscroll.on('scroll',(position)=>{
        //     // console.log(position);
        //     //将事件发射出去  让组件拿到值
        //     this.$emit('scroll',position)
            
        // })
        //上面原形   现在重构  提高一点点性能
        if(this.probeType==2||this.probeType==3){
             //监听滚动事件
        this.bscroll.on('scroll',(position)=>{
            // console.log(position);
            //将事件发射出去  让组件拿到值
            this.$emit('scroll',position)
            
        })
        }
        // //监听上拉加载事件
        // this.bscroll.on('pullingUp',()=>{
            
        // //  调用这个 说明页面刷新了一次 下次还可以调用刷新  不然就刷新一次
        //     // this.bscroll.finishPullup()
        //     this.$emit('pullingUp')

        // })
        if(this.pullUpLoad){
              //监听上拉加载事件
        this.bscroll.on('pullingUp',()=>{
            
        //  调用这个 说明页面刷新了一次 下次还可以调用刷新  不然就刷新一次
            // this.bscroll.finishPullup()
            this.$emit('pullingUp')

        })
        }
    },
    methods:{
        scrollto(x,y,time=500){
        //    this.bscroll.scrollTo(x,y,time)
        //重构  判断组件调用 方法时 bscroll有没有创建出来
        this.bscroll&&this.bscroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            //加载完成 调用以便下次调用
            this.bscroll&&this.bscroll.finishPullUp()
        },
        refresh(){
            console.log('----');
            
           this.bscroll&&this.bscroll.refresh()
           
        }
       
    }
}
</script>

<style>

</style>