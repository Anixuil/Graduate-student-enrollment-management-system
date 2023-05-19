<template>
    <div class="person-box">
        <div class="person-info-box">
            <div class="user-box">
                <div class="user-img-box">
                    <img :src="store.getUserInfo.userHeadimg" alt="" />
                </div>
                <div class="user-info">
                    <span>{{ store.getUserInfo.userName }}</span>
                    <span>{{
                        typeArr[typeArr.findIndex(item => item.value == store.getUserInfo.userRole)]
                            .label
                    }}</span>
                </div>
            </div>
            <div class="person-control">
                <span @click="updateDialogVisible = true">修改密码</span>
                <span @click="logout">退出登录</span>
            </div>
        </div>
        <Students></Students>
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
import Students from '@/components/person/person.vue'
import { useUser } from '@/store/user'
import { usePageHeader } from '@/store/pageHeader/pageHeader'
import { updatePwd } from '@/api/user'
import { ElMessage } from 'element-plus'

const typeArr = ref([
    {
        label: '考生',
        value: 'candidate'
    },
    {
        label: '学生',
        value: 'student'
    }
])
const store = useUser()
const router = useRouter()
const pageHeader = usePageHeader()
const logout = () => {
    store.logout()
    pageHeader.changePageHeaderStatus(false)
    router.push('login')
}
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
                { required: true, message: '请输入原密码', trigger: 'blur' },
                { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
            ]
        },
        {
            label: '新密码',
            prop: 'newPassword',
            type: 'password',
            rules: [
                { required: true, message: '请输入新密码', trigger: 'blur' },
                { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
            ]
        },
        {
            label: '确认密码',
            prop: 'confirmPassword',
            type: 'password',
            rules: [
                { required: true, message: '请输入确认密码', trigger: 'blur' },
                { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
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
.person-box {
    width: 100%;
    min-width: 1000px;
    max-width: 1600px;
    margin: 0 auto;

    .person-info-box {
        position: relative;
        background-color: white;
        box-sizing: border-box;
        padding: 10px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .user-box {
            // border: 1px solid red;
            display: flex;
            min-width: 300px;
            justify-content: space-between;
            align-items: center;

            .user-img-box {
                border: 1px solid lightgray;
                overflow: hidden;
                border-radius: 50%;
                width: 75px;
                height: 75px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .user-info {
                display: flex;
                flex-direction: column;
                flex: 1;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 0 20px;
                user-select: none;

                span {
                    line-height: 30px;

                    &:nth-of-type(2) {
                        font-size: 12px;
                        color: gray;
                    }
                }
            }
        }

        .person-control {
            span {
                font-size: 12px;
                line-height: 30px;
                color: gray;
                transition: all 0.3s ease;
                cursor: pointer;
                margin: 0 20px;

                &:hover {
                    color: rgb(63 73 113);
                }
            }
        }
    }
}
</style>
