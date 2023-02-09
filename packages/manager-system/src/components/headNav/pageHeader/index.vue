<template>
    <div class="page-header-box">
        <el-page-header :icon="ArrowLeft">
            <template #content>
                <span class="text-large font-600 mr-3"> Title </span>
            </template>
        </el-page-header>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.page-header-box {
    width: 100%;
    margin: 10px auto;
    background-color: white;
    box-sizing: border-box;
    padding: 20px;
    min-width: 1000px;
    max-width: 1600px;
}
</style>
