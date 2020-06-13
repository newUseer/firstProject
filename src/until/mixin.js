import {debounce} from './until'
export const itemImgListenter={
    mounted(){
        //   这里调用一下防抖动函数   时间要设的长一点  因为是本地图片加载很快  定时器无法很快清除上一次图片加载的定时器
          const refresh= debounce(this.$refs.scroll.refresh,10000)
          //这里将函数抽离出来  离开组件时  停止监听全局事件
          this.Refresh=()=>
        {
          //当 组件创建好时调用 页面bscroll 里的方法重新计算 滚动区域
         refresh()
        }
          //到组件goods item 发生图片加载事件时  调用事件总线 组件弹出的事件    进行图片加载刷新
        this.$bus.$on('goodsItemImgLoad',this.Refresh)
        // //图片加载完成计算   tabControlTop 的高度
        // console.log(this.$refs.tabTop02.$el);     -------测试
        
        //  this.tabControlTop=this.$refs.tabTop01.$el.offsetTop
         console.log('----hhhh');
        }
       
        
}