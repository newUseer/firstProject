<template>

    <swiper :swiperArr='arr'></swiper>
</template>

<script>
import swiper from 'common/swiper/swiper'
export default {
    name:'detallSwiper',
    props:{
        arr:Array   
    },
    components:{
        swiper
    }
}
</script>

<style scoped>
  
</style>