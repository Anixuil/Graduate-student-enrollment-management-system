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

<style scoped lang="scss"></style>
