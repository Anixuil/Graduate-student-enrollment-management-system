<template>
    <div class="confirm_wrapper">
        <tab>需确认信息</tab>
    </div>
</template>

<script setup lang="ts">
import { ConfirmInfoProps } from '.'
const props = defineProps(ConfirmInfoProps)
</script>

<style scoped lang="scss">
.confirm_wrapper {
    width: 100%;
    max-width: 1600px;
    min-width: 1000px;
    margin: 0 auto;
    border: 1px solid red;
}
</style>
