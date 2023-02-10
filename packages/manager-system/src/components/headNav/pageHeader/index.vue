<template>
    <div class="page-header-box">
        <el-page-header @back="onBack" :icon="ArrowLeft">
            <template #content>
                <span class="title">
                    <div
                        v-for="(item, index) in pageHeaderArray"
                        :key="index"
                        :class="index === pageHeaderArray.length ? 'disabled' : ''"
                    >
                        <el-icon v-show="index != 0">
                            <ArrowRight />
                        </el-icon>
                        <span @click="gotoPage(index)">{{ item }}</span>
                    </div>
                </span>
            </template>
        </el-page-header>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import { usePageHeader } from '@/store'
import { storeToRefs } from 'pinia'

//返回上一个页面
const router = useRouter()
const onBack = () => {
    router.go(-1)
}

//动态切换页头标题
const { pageHeaderArray } = storeToRefs(usePageHeader())

//跳转历史页面
const gotoPage = (index: number): void => {
    //如果点击得是第一个，就跳转首页
    if (index === 0) {
        router.push('/index')
    } else if (index !== pageHeaderArray.value.length - 1) {
        router.go(-index - 1)
    }
}
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
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;

        div {
            display: flex;
            align-items: center;

            span {
                margin-left: 10px;
                user-select: none;

                &:hover {
                    color: rgb(63 73 113);
                }
            }
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
