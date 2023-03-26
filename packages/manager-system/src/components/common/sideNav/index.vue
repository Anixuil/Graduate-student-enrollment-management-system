<template>
    <div :class="sidebarStatus ? 'sidebar-wrapper' : 'sidebar-wrapper hide'">
        <div class="expandAndFold" @click="switchSidebarStatus">
            <el-icon :size="20">
                <Fold v-show="sidebarStatus" />
                <Expand v-show="!sidebarStatus" />
            </el-icon>
        </div>
        <i class="el-icon-s-home"></i>
        <div class="sidebar-item" v-for="(item, index) in sidebarData" :key="item.path">
            <div class="sidebar-one" @click="openContainer(index)">
                <div class="sidebar-icon">
                    <component :is="item.icon" style="width: 20px; height: 20px"></component>
                </div>
                <Transition>
                    <div v-show="sidebarStatus" class="sidebar-title">
                        <span>{{ item.name }}</span>
                    </div>
                </Transition>
            </div>
            <div
                :class="currentMenu == index ? 'sidebar-container active' : 'sidebar-container'"
                v-show="sidebarStatus"
                v-if="item.children"
            >
                <div
                    class="sidebar-two"
                    v-for="item2 in item.children"
                    :key="item2.path"
                    @click="gotoContainer(item2.path)"
                >
                    <div class="sidebar-icon">
                        <component :is="item2.icon" style="width: 20px; height: 20px"></component>
                    </div>
                    <div class="sidebar-title">
                        {{ item2.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { useSidebar } from '@/store/sidebar'

const sidebar = useSidebar()

const sidebarData = sidebar.sidebarMenu

const sidebarStatus = computed(() => sidebar.sidebarStatus)
const currentMenu: Ref<number> = ref(-1)

//侧边栏伸缩控制
const switchSidebarStatus = () => {
    sidebar.switchSidebarStatus()
}

//侧边栏二级菜单控制
const openContainer = (index: number) => {
    if (currentMenu.value == index) {
        currentMenu.value = -1
        return
    }
    currentMenu.value = index
}

//侧边栏跳转
const router = useRouter()
const gotoContainer = (path: string) => {
    console.log(path)

    router.push(path)
}
</script>

<style scoped lang="scss">
//侧边栏
.sidebar-wrapper {
    width: 12%;
    min-width: 200px;
    background-color: white;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: all 0.3s ease;

    &.hide {
        width: 5%;
        min-width: 50px;
    }

    .expandAndFold {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease;
        color: #404970;

        &:hover {
            background-color: rgb(63 72 113);
            color: white;
        }
    }

    .sidebar-item {
        .sidebar-one,
        .sidebar-two {
            box-sizing: border-box;
            padding: 10px 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.3s ease;
            gap: 10px;
            user-select: none;

            a {
                color: #000;

                &:hover {
                    text-decoration: none;
                }
            }

            .sidebar-icon {
                color: #404970;
            }

            .sidebar-title {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }

            &:hover {
                background-color: rgb(63 72 113) !important;
                color: white;

                a {
                    color: white;
                }

                .sidebar-icon {
                    color: white;
                }
            }
        }

        .sidebar-container {
            height: 0;
            overflow: hidden;
            transition: all 0.3s ease;

            &.active {
                height: 100%;
            }

            .sidebar-two {
                padding-left: 20px;
                background-color: rgb(231 231 231);
            }
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
