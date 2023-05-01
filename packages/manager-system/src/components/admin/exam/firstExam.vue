<template>
    <div class="frist-exam">
        <tab :tabHeight="10">确认报名信息</tab>
        <div class="enter-wrapper">
            <div>
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
            </div>
            <el-tooltip
                content="这个按钮将会给每一个初试状态的考生发送一封电子邮件"
                placement="top"
            >
                <el-button type="primary" @click="emailDrawerOpen">发送邮箱通知</el-button>
            </el-tooltip>
            <el-drawer v-model="emailDrawerVisible" title="初试邮件发送配置" size="80%">
                <email-form />
            </el-drawer>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import EmailForm from '@/components/common/Email/index.vue'

//确认报名信息状态
const enterStatus = ref(true)

//发送邮箱通知抽屉
const emailDrawerVisible = ref(false)
const emailDrawerOpen = () => {
    emailDrawerVisible.value = true
}
</script>

<style scoped lang="scss">
.frist-exam {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px 0 50px;

    .enter-wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
    }
}
</style>
