<template>
   <div id="navbar">
       <slot class="left" name="left"></slot>
       <slot class="center" name="center"></slot>
       <slot class="right" name="rigth"></slot>

   </div>
</template>

<script>
export default {

}
</script>

<style>
    #navbar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0px 1px 1px rgba(100, 100, 100, .6);
    }
    #navbar .left,
    #navbar .right{
        width: 60px;
    }
    #navbar .ceneter{
        flex: 1;
    }
</style>