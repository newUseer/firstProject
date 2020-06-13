<template>
    <div id="feature">
            <a href="#">
                <img src="~image/home-recommend/recommend_bg.jpg" @load="featureImgLoad">
            </a>
    </div>
</template>

<script>
export default {
    name:'feature',
    methods: {
       featureImgLoad(){
           this.$emit('featureImgLoad')
       } 
    }
}
</script>

<style>
#feature{
    height: 274px;
    width: 100%;
}
    #feature img{
           width: 100%;
           height: 100%;
    }
</style>