<script setup lang="ts">
import HeaderNav from '@/components/headNav/index.vue'
import PageHeader from '@/components/headNav/pageHeader/index.vue'
import { usePageHeader } from './store'

const store = usePageHeader()
</script>

<template>
    <HeaderNav></HeaderNav>
    <PageHeader v-show="store.pageHeaderStatus"></PageHeader>
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
</style>
