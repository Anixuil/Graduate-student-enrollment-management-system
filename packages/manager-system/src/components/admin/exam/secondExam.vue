<template>
    <div class="second-wrapper">
        <tab :tabHeight="10">复试确认</tab>
        <div class="enter-wrapper">
            <el-tooltip content="如需调整请前往操作管理中的流程管理" placement="top">
                <el-form-item label="模块开启状态">
                    <el-switch
                        v-model="enterStatus"
                        :disabled="true"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                    />
                </el-form-item>
            </el-tooltip>
            <el-tooltip
                content="这个按钮将会给每一个初试状态的考生发送一封电子邮件"
                placement="top"
            >
                <el-form-item>
                    <el-button type="primary" @click="emailDrawerOpen('复试确认信息邮件通知配置')"
                        >邮件提醒通知</el-button
                    >
                </el-form-item>
            </el-tooltip>
        </div>
        <tab :tabHeight="10">下载准考证</tab>
        <div class="downLoad-wrapper">
            <el-tooltip content="如需调整请前往操作管理中的流程管理" placement="top">
                <el-form-item label="模块开启状态">
                    <el-switch
                        v-model="enterStatus"
                        :disabled="true"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                    />
                </el-form-item>
            </el-tooltip>
            <el-tooltip
                content="这个按钮将会给每一个初试状态的考生发送一封电子邮件"
                placement="top"
            >
                <el-form-item>
                    <el-button type="primary" @click="emailDrawerOpen('下载准考证邮件通知配置')"
                        >邮件提醒通知</el-button
                    >
                </el-form-item>
            </el-tooltip>
        </div>
        <el-drawer v-model="emailDrawerVisible" :title="emailDrawerTitle" size="80%">
            <email-form />
        </el-drawer>
    </div>
</template>

<script setup lang="ts">
import EmailForm from '@/components/common/Email/index.vue'

const enterStatus = ref(true)

//发送邮箱通知抽屉
const emailDrawerTitle = ref('')
const emailDrawerVisible = ref(false)
const emailDrawerOpen = (title: string) => {
    emailDrawerTitle.value = title
    emailDrawerVisible.value = true
}
</script>

<style scoped lang="scss">
.second-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px 0 50px;

    .enter-wrapper,
    .downLoad-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
    }
}
</style>
