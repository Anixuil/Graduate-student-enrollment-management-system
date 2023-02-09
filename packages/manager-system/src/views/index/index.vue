<template>
    <div class="index-box">
        <Banner></Banner>
    </div>
</template>

<script setup lang="ts">
import Banner from '@/components/index/banner/index.vue'
</script>

<style scoped lang="scss">
.index-box {
    margin: 0 auto;
    min-width: 1000px;
    max-width: 1600px;
    border: 1px solid red;
    background-color: white;
    min-height: calc(100vh - (96px + 84px));
    box-sizing: border-box;
    padding: 0 20px;
}
</style>
