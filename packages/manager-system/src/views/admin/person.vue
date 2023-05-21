<template>
    <div class="person-wrapper">
        <tab :tabHeight="10">基本信息</tab>
        <infoDetail :listKeys="userKeys" :listLabel="listLabel" :listData="user"></infoDetail>
        <tab v-if="user.userRole == 'teacher'">教师信息</tab>
        <infoDetail
            v-if="user.userRole == 'teacher'"
            :listKeys="teacherKeys"
            :listLabel="listLabel"
            :listData="teacher"
        ></infoDetail>
        <div class="person-control">
            <el-button type="primary" v-loading="loading" @click="updateDialogVisible = true">
                修改密码
            </el-button>
            <el-button type="primary" v-loading="loading" @click="logout">退出登录</el-button>
        </div>
        <el-dialog v-model="updateDialogVisible" title="修改密码">
            <avue-form
                :option="option"
                @submit="updatePasswordHandle"
                v-model="formData"
            ></avue-form>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user'
import { Ref } from 'vue'
import { studentInterface, studentLabelInterface } from '@/components/person/ts/person'
import { ElMessage } from 'element-plus'
import { updatePwd } from '@/api/user'

const router = useRouter()
const store = useUser()
//用户基本信息
const user = computed(() => store.getUserInfo as studentInterface)
const userKeys: Ref<string[]> = ref(Object.keys(user.value))
const listLabel = computed(() => store.getUserLabel as studentLabelInterface)
//教师信息
const teacher = computed(() => store.getTeacherInfo as studentInterface)
const teacherKeys: Ref<string[]> = ref(Object.keys(teacher.value))
// //管理员信息
// const admin = computed(() => store.getAdminInfo as studentInterface)
// const adminKeys: Ref<string[]> = ref(Object.keys(admin.value))

//退出登录
const loading = ref(false)
const logout = () => {
    loading.value = true
    store.logout()
    router.push('login')
    loading.value = false
}

//修改密码
const updateDialogVisible = ref(false)
const formData = reactive({
    password: '',
    newPassword: '',
    confirmPassword: ''
})
const option = reactive({
    column: [
        {
            label: '原密码',
            prop: 'oldPassword',
            type: 'password',
            rules: [
                {
                    required: true,
                    message: '请输入原密码',
                    trigger: 'blur'
                }
            ]
        },
        {
            label: '新密码',
            prop: 'newPassword',
            type: 'password',
            rules: [
                {
                    required: true,
                    message: '请输入新密码',
                    trigger: 'blur'
                }
            ]
        },
        {
            label: '确认密码',
            prop: 'confirmPassword',
            type: 'password',
            rules: [
                {
                    required: true,
                    message: '请再次输入新密码',
                    trigger: 'blur'
                }
            ]
        }
    ]
})
//提交修改密码
const updatePasswordHandle = async (form: any, done: Function) => {
    //校验新密码和确认密码是否相等
    if (!(form.newPassword === form.confirmPassword)) {
        ElMessage.error('新密码与确认密码不一致')
        updateDialogVisible.value = false
        done()
        return
    }
    try {
        const res: any = await updatePwd({
            oldPassword: form.oldPassword,
            newPassword: form.newPassword
        })
        updateDialogVisible.value = false
        ElMessage.success(res.msg)
        done()
    } catch (err) {
        done()
    }
}
</script>

<style scoped lang="scss">
.person-wrapper {
    .person-control {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
}
</style>
