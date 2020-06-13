<template>
   <div id="tab-container">
       <slot></slot>
   </div>
</template>

<script>
export default {
    name:'tab-container'
}
</script>

<style>
    #tab-container{
        display: flex;
        justify-content: space-evenly;

        height: 56px;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: white;
        /* border: 1px solid red; */
        z-index: 1;
    }
</style>