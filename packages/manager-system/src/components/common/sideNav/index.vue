<template>
    <div class="sidebar-wrapper">
        <div class="expandAndFold">
            <el-icon :size="20">
                <Fold />
            </el-icon>
        </div>
        <i class="el-icon-s-home"></i>
        <div class="sidebar-item" v-for="item in sidebarData" :key="item.path">
            <div class="sidebar-one">
                <div class="sidebar-icon">
                    <component :is="item.icon" style="width: 20px; height: 20px"></component>
                </div>
                <div class="sidebar-title">
                    <span>{{ item.name }}</span>
                </div>
            </div>
            <div class="sidebar-container" v-if="item.children">
                <div class="sidebar-two" v-for="item2 in item.children" :key="item2.path">
                    <div class="sidebar-icon">
                        <component :is="item2.icon" style="width: 20px; height: 20px"></component>
                    </div>
                    <div class="sidebar-title">
                        <router-link :to="item2.path">{{ item2.name }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSidebar } from '@/store/sidebar'

const sidebar = useSidebar()

const sidebarData = sidebar.sidebarMenu
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

            a {
                color: #000;

                &:hover {
                    text-decoration: none;
                }
            }

            .sidebar-icon {
                color: #404970;
            }

            &:hover {
                background-color: rgb(63 72 113);
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
            // height: 0;
            overflow: hidden;
            transform: all 0.3s ease;

            &.active {
                height: 100%;
            }

            .sidebar-two {
                padding-left: 20px;
            }
        }
    }
}
</style>
