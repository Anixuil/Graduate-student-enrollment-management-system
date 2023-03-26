<template>
    <div class="index-box" ref="wrapper">
        <Banner>
            <div class="btn" @click="gotoMenu">
                <span>信息登记</span>
            </div>
        </Banner>
        <Container></Container>
    </div>
</template>

<script setup lang="ts">
import Banner from '@/components/index/banner/index.vue'
import Container from '@/components/index/container/index.vue'
import gsap from 'gsap'
const wrapper = ref()
const gotoMenu = () => {
    nextTick(() => {
        gsap.to(wrapper.value, {
            scrollTop: wrapper.value.offsetHeight,
            duration: 1,
            ease: 'expo.out'
        })
    })
}
</script>

<style scoped lang="scss">
.index-box {
    margin: 0 auto;
    min-width: 1000px;
    max-width: 1600px;
    background-color: white;
    height: calc(100vh - 96px);
    overflow-y: auto;
    box-sizing: border-box;
    border: 40px solid white;

    &::-webkit-scrollbar {
        width: 0;
    }

    .btn {
        width: 300px;
        text-align: center;
        box-sizing: border-box;
        padding: 15px 20px;
        background-color: rgb(63 73 113);
        color: white;
        border-radius: 10px;
        transition: all 0.3s ease;
        cursor: pointer;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -140%);
        user-select: none;

        &:hover {
            background-color: rgb(44 52 83);
        }

        &:active {
            background-color: rgb(23 28 47);
        }
    }
}
</style>
