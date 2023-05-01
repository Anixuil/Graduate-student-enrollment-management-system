<template>
    <div class="prepare-exam">
        <tab :tabHeight="10">招生计划配置</tab>
        <el-button type="primary" class="normal-ele" @click="router.push('plan')"
            >前往配置</el-button
        >
        <tab :tabHeight="10">考试科目配置</tab>
        <exam-class />
    </div>
</template>

<script setup lang="ts">
import { defineOptions } from 'unplugin-vue-define-options/macros'
import ExamClass from '@/components/admin/exam/examClass.vue'
defineOptions({
    name: 'prepareExam'
})
const router = useRouter()
</script>

<style scoped lang="scss">
.prepare-exam {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px 0 50px;
}

.normal-ele {
    margin: 20px 0;
}
</style>
