<template>
    <div
        class="page-header-box"
        ref="pageHeaderWrapper"
        @mousewheel.stop.prevent="mouseScroll"
        @contextmenu.stop="openMenu($event)"
    >
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

        <!-- 右键弹出菜单可选关闭当前标签页和清空所有标签页 -->
        <Transition name="menu">
            <div class="menu" v-show="menuFlag" ref="menu">
                <div
                    class="menu-item"
                    v-for="item in menuList"
                    :key="item.name"
                    @click="item.click"
                >
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { usePageHeader } from '@/store'
import { storeToRefs } from 'pinia'
import gsap from 'gsap'

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
const pageHeaderWrapper: any = ref()

//鼠标滚动事件
const mouseScroll = (e: WheelEvent): void => {
    nextTick(() => {
        gsap.to(pageHeaderWrapper.value, {
            scrollLeft: pageHeaderWrapper.value.scrollLeft + e.deltaY,
            duration: 0.3,
            ease: 'expo.out'
        })
    })
}

//鼠标点击其他地方关闭右键菜单
document.addEventListener('click', e => {
    if (!menuFlag.value) return
    // let isSelf = pageHeaderWrapper.value.contains(e.target)
    // if (!isSelf) {
    menuFlag.value = false
    // }
})
//鼠标右键菜单
const menuFlag: Ref<boolean> = ref(false)
const menu: any = ref()
const menuList: any = ref([
    {
        name: '关闭当前页',
        click() {
            pageHeader.removePageHeaderArrayByTitle(
                router.currentRoute.value.meta.title as string,
                router
            )
            menuFlag.value = false
        }
    },
    {
        name: '关闭其他页',
        click() {
            pageHeader.removePageHeaderArrayExceptTitle(
                router.currentRoute.value.meta.title as string
            )
            menuFlag.value = false
        }
    },
    {
        name: '关闭所有页',
        click() {
            pageHeader.clearPageHeaderArray(router)
            menuFlag.value = false
        }
    }
])
const openMenu = (e: MouseEvent): void => {
    e.preventDefault()
    nextTick(() => {
        menu.value.style.left = e.pageX + 'px'
        menu.value.style.top = e.pageY + 'px'
    })
    menuFlag.value = true
}
</script>

<style scoped lang="scss">
.page-header-box {
    width: 100%;
    margin: 10px auto;
    background-color: white;
    box-sizing: border-box;
    // max-width: 1600px;
    overflow-x: auto;

    //操作横向滚动条宽度
    &::-webkit-scrollbar {
        height: 5px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
    }

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
                // 文字不换行
                white-space: nowrap;
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

    .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 200px;
        background-color: white;
        box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
        z-index: 99;
        box-sizing: border-box;
        padding: 5px;
        transition: all 0.3s ease;

        .menu-item {
            font-size: 12px;
            padding: 5px 10px;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background-color: rgb(63 73 113);
                color: white;
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

.menu-enter-acvtive,
.menu-leave-active {
    transition: all 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
    opacity: 0;
    transform: translate(0, 50%);
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
