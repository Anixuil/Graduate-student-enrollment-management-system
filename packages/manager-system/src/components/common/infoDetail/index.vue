<template>
    <div class="students-form">
        <div class="students-form-item" v-for="(item, index) in listKeys" :key="index">
            <span class="students-form-label">{{ listLabel[item] }}</span>
            <input type="text" v-model="listData[item]" :disabled="disabled" />
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script setup lang="ts">
import { infoDetailProps } from '.'
const props = defineProps(infoDetailProps)
</script>

<style scoped lang="scss">
.students-form {
    display: grid;
    background-color: white;
    padding: 20px 40px;
    grid-gap: 20px;
    grid-template-rows: repeat(0, 50px);

    .students-form-item {
        display: grid;
        grid-template-columns: 150px 300px;
        grid-gap: 20px;
        font-size: 14px;

        span {
            text-align: end;
            color: gray;
        }

        input {
            border: none;
            outline: none;
            transition: all 0.3s ease;

            &:focus {
                border-bottom: 1px solid rgb(63 73 113);
            }
        }
    }
}
</style>
