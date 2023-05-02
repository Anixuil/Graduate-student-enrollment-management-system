<template>
    <div class="system-wrapper">
        <RouterView v-slot="{ Component, route }">
            <KeepAlive>
                <Transition :name="route.meta.transition">
                    <component :is="Component" />
                </Transition>
            </KeepAlive>
        </RouterView>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
