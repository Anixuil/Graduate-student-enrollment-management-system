<script setup lang="ts">
import HeaderNav from '@/components/headNav/index.vue'
import PageHeader from '@/components/headNav/pageHeader/index.vue'
import { usePageHeader } from '@/store'
import { useSystem } from './store/system'
import { useUser } from './store/user'

const system = useSystem()
system.initSystemMode()
const pageHeader = usePageHeader()
// 从sessionStorage中获取数据
pageHeader.getSessionStorage()
onMounted(() => {
    nextTick(() => {
        const user = useUser()
        user.initUserInfo()
        const admin = ['admin', 'teacher']
        const mode = !admin.includes(user.userRole)
        system.switchSystemMode(mode)
        pageHeader.switchPageMode(mode)
    })
})
</script>

<template>
    <HeaderNav></HeaderNav>
    <Transition name="page-header">
        <PageHeader
            v-if="system.systemMode"
            :style="{ maxWidth: system.systemMode ? '1600px' : 'none' }"
            v-show="pageHeader.pageHeaderStatus"
        >
        </PageHeader>
    </Transition>
    <RouterView v-slot="{ Component, route }">
        <KeepAlive>
            <Transition :name="(route.meta.transition as string)">
                <component :is="Component" />
            </Transition>
        </KeepAlive>
    </RouterView>
</template>

<style lang="scss">
html,
body {
    background-color: rgb(239 235 234);
}

body::-webkit-scrollbar {
    width: 0;
    height: 0;
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

* {
    //滚动条样式
    &::-webkit-scrollbar {
        width: 5px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
    }
}
</style>
