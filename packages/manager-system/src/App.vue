<script setup lang="ts"></script>

<template>
    <RouterView v-slot="{ Component }">
        <KeepAlive>
            <Transition>
                <component :is="Component" />
            </Transition>
        </KeepAlive>
    </RouterView>
</template>

<style scoped></style>
