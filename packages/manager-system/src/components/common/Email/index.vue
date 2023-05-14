<template>
    <div class="frist-exam">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="<FormRules>rules" label-width="auto">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="邮件标题" prop="emailTitle">
                        <el-input v-model="ruleForm.emailTitle" placeholder="请输入邮件标题" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-form-item label="收信对象" prop="emailType">
                    <el-radio-group v-model="ruleForm.emailType">
                        <el-radio label="0">初试状态</el-radio>
                        <el-radio label="1">复试状态</el-radio>
                        <el-radio label="2">调剂状态</el-radio>
                        <el-radio label="3">未录取状态</el-radio>
                        <el-radio label="4">录取状态</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="邮件内容" prop="emailContent">
                        <LxEditor @change="contentChange" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" :offset="20">
                    <el-form-item>
                        <el-button type="primary" @click="submitForm">发送</el-button>
                        <el-button @click="resetForm(<FormInstance>ruleFormRef)">重置</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import LxEditor from '@/components/common/Editor/index.vue'
import type { FormInstance, FormRules } from 'element-plus'
import { defineOptions } from 'unplugin-vue-define-options/macros'
import { sendEmail } from '@/api/email'
import { ElMessage } from 'element-plus'
defineOptions({
    name: 'emailForm'
})

//邮箱表单
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    emailTitle: '',
    emailType: '',
    emailContent: ''
})
//邮箱内容
const contentChange = (val: string) => {
    ruleForm.emailContent = val
}
//邮箱表单验证
const rules = reactive<FormRules>({
    emailTitle: [
        { required: true, message: '请输入邮件标题', trigger: ['blur', 'change'] },
        { min: 3, message: '长度在 6 个字符以上', trigger: ['blur', 'change'] }
    ],
    emailType: [{ required: true, message: '请选择收信对象', trigger: ['blur', 'change'] }],
    emailContent: [
        { required: true, message: '请输入邮件内容', trigger: ['blur', 'change'] },
        { min: 30, message: '长度在 30 个字符', trigger: ['blur', 'change'] }
    ]
})
//发送邮件
const submitForm = () => {
    ruleFormRef.value?.validate(async valid => {
        if (valid) {
            ElMessage.warning('正在发送邮件')
            const obj = {
                emailTitle: ruleForm.emailTitle,
                emailType: ruleForm.emailType,
                emailContent: ruleForm.emailContent
            }
            try {
                let res: any = await sendEmail(obj)
                if (res.code != 200) {
                    ElMessage.error('发送失败')
                } else {
                    ElMessage.success(res.data.msg)
                }
            } catch (e) {
                console.log(e)
                ElMessage.error('发送异常:' + e)
            }
        } else {
            console.log('error submit!!')
            return false
        }
    })
}
//重置表单
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
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
