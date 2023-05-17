<template>
    <div class="admin-wrapper">
        <side-nav></side-nav>
        <div :class="sidebarStatus ? 'admin-container' : 'admin-container expand'">
            <!-- 引入tab -->
            <page-header class="admin-page-header"></page-header>
            <RouterView v-slot="{ Component, route }" class="admin-components">
                <KeepAlive>
                    <Transition :name="(route.meta.transition as string)">
                        <component :is="Component" />
                    </Transition>
                </KeepAlive>
            </RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
import sideNav from '@/components/common/sideNav/index.vue'
import pageHeader from '@/components/headNav/pageHeader/index.vue'
import { useSidebar } from '@/store/sidebar'

const sidebar = useSidebar()

const sidebarStatus = computed(() => sidebar.sidebarStatus)
</script>

<style scoped lang="scss">
.admin-wrapper {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    min-width: 1000px;
    position: relative;
    height: calc(100vh - 106px);
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 10px;

    .admin-page-header {
        margin: 0 auto;
        border-radius: 10px;
    }

    .admin-container {
        overflow: hidden;
        border-radius: 10px;
        width: 90%;
        min-width: 800px;
        // background-color: white;
        transition: all 0.3s ease;

        .admin-components {
            width: 100%;
            height: 100%;
            overflow: auto;
            padding: 10px 10px 100px;
            box-sizing: border-box;
            background-color: white;
            margin-top: 5px;
            border-radius: 10px;
        }

        &.expand {
            width: 95%;
        }
    }
}

//页头过渡效果
.page-header-enter-active,
.page-header-leave-active {
    transition: all 0.2s ease;
}

.page-header-enter-from,
.page-header-leave-to {
    opacity: 0;
    transform: translateY(100%);
}

//页面跳转过渡效果
.slide-fade-enter-active {
    transition: all 0.4s ease;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>
