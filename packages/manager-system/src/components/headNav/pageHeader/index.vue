<template>
    <div class="page-header-box">
        <el-page-header @back="onBack" :icon="ArrowLeft">
            <template #content>
                <span class="title"> {{ pageHeaderTitle }} </span>
            </template>
        </el-page-header>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { usePageHeader } from '@/store'
import { storeToRefs } from 'pinia'

//返回上一个页面
const router = useRouter()
const onBack = () => {
    router.go(-1)
}

//动态切换页头标题
const { pageHeaderTitle } = storeToRefs(usePageHeader())
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

    .title {
        font-size: 16px;
        color: gray;
        cursor: pointer;

        &:hover {
            color: rgb(63 73 113);
        }
    }
}

:deep(.el-page-header__back) {
    color: gray;
    transition: all 0.3s ease;

    &:hover {
        color: rgb(63 73 113);
    }
}
</style>
