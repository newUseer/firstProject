<template>
    <div id="homeRecommend">
         <div v-for="item in homeRecommendArr" :key="item.id" class="big">
           <a href="item.link">
               <img :src="item.url" >
           </a>
           <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'homeRecommend',
 data () {
        return {
            index:0,
            homeRecommendArr:[
                {id:0,url:require('image/home-recommend/recommend01.jpg'),link:'#' ,title:'精选'},
                {id:1,url:require('image/home-recommend/recommend02.jpg'),link:'#',title:'精选'},
                {id:2,url:require('image/home-recommend/recommend03.jpg'), link:'#',title:'精选'},

            ]
        }
    }
}
</script>

<style>
    #homeRecommend{
        margin-top: 8px;
        height: 100px;
        /* border: 1px double red; */
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        background-color: aliceblue;
    }
    .big{
        flex: 1; 
        /* border: 1px double red; */
    }
     .big img{
        border-radius: 50%;
        width: 70px;
        height: 70px;
        
    }
</style>