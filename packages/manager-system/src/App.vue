<script setup lang="ts">
import HeaderNav from '@/components/headNav/index.vue'
</script>

<template>
    <HeaderNav></HeaderNav>
    <RouterView v-slot="{ Component }">
        <KeepAlive>
            <Transition>
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
