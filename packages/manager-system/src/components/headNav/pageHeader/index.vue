<template>
    <div class="page-header-box">
        <span class="title">
            <div
                :class="pageHeader.pageHeaderTitle == item ? 'active' : ''"
                v-for="(item, index) in pageHeaderArray"
                :key="index"
                @click.stop="gotoPage(index)"
            >
                <span>{{ item }}</span>
                <el-icon v-if="item != '首页'" @click.stop="removePage(index)">
                    <Close />
                </el-icon>
                <span class="bottom-span"></span>
            </div>
        </span>
    </div>
</template>

<script setup lang="ts">
import { usePageHeader } from '@/store'
import { storeToRefs } from 'pinia'

//动态切换页头标题
const { pageHeaderArray, pageHeaderPath } = storeToRefs(usePageHeader())
const pageHeader = usePageHeader()

//返回上一个页面
const router = useRouter()

//跳转历史页面
const gotoPage = (index: number): void => {
    router.push(pageHeaderPath.value[index])
}

//删除历史界面
const removePage = (index: number): void => {
    if (pageHeader.pageHeaderTitle === pageHeaderArray.value[index]) {
        router.push(pageHeaderPath.value[index - 1])
    }
    pageHeader.removePageHeaderArray(index)
}
</script>

<style scoped lang="scss">
.page-header-box {
    width: 100%;
    margin: 10px auto;
    background-color: white;
    box-sizing: border-box;
    min-width: 1000px;
    max-width: 1600px;

    .title {
        font-size: 12px;
        color: gray;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        box-sizing: border-box;
        padding: 0 10px;

        div {
            display: flex;
            align-items: center;
            gap: 5px;
            transition: all 0.3s ease;
            padding: 10px;
            position: relative;
            animation: page-header-show 0.3s ease;

            span {
                user-select: none;
            }

            &:hover {
                color: rgb(63 73 113);
            }

            .bottom-span {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 0;
                background-color: rgb(63 73 113);
                transition: all 0.3s ease;
            }

            &.active {
                // border-bottom: 3px solid rgb(63 73 113);
                .bottom-span {
                    height: 3px;
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

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

@keyframes page-header-show {
    from {
        opacity: 0;
        transform: translate(-100%, 0);
    }

    to {
        opacity: 1;
        transform: translate(0, 0);
    }
}
</style>
