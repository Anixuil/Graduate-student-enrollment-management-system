<template>
    <div
        class="tab-wrapper"
        :style="{
            '--height': tabHeight == 0 ? '20px' : isNaN(tabHeight) ? tabHeight : tabHeight + 'px'
        }"
    >
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script setup lang="ts">
import { tabProps } from './index'
const props = defineProps(tabProps)
</script>

<style scoped lang="scss">
.tab-wrapper {
    margin: 10px 0;
    box-sizing: border-box;
    //padding: 20px 40px;
    padding: var(--height) 40px;
    background-color: white;
    border-left: 10px solid rgb(70 79 116);
    color: rgb(70 79 116);
    font-weight: bolder;
}
</style>
