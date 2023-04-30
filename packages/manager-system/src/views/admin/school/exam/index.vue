<template>
    <div class="exam-wrapper">
        <el-tabs v-model="activeName">
            <el-tab-pane label="初试模块" name="first">
                <FirstExam />
            </el-tab-pane>
            <el-tab-pane label="复试模块" name="second"> </el-tab-pane>
            <el-tab-pane label="调剂模块" name="third"> </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import FirstExam from '@/components/admin/exam/firstExam.vue'
const activeName: Ref<string> = ref('first')
</script>

<style scoped lang="scss">
.exam-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px;
}
</style>
