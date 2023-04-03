<template>
    <div class="confirm_wrapper">
        <tab>需确认信息</tab>
        <info-detail
            :listKeys="listKeys"
            :listLabel="label"
            :listData="confirmInfoData"
            :disabled="disabled"
        >
            <template #footer>
                <div class="footer">
                    <el-button
                        type="primary"
                        color="rgb(70,79,116)"
                        v-if="disabled"
                        @click="modifyInfo"
                        >修改</el-button
                    >
                    <el-button type="primary" color="rgb(70,79,116)" v-else @click="modifyInfo"
                        >取消修改</el-button
                    >
                    <el-button type="success" color="green" @click="handleClickEmit"
                        >确认信息无误</el-button
                    >
                </div>
            </template>
        </info-detail>
    </div>
</template>

<script setup lang="ts">
// import { ConfirmInfoProps } from '.'
import { useUser } from '@/store/user/index'
import { login } from '@/api/user/index'
import { ElMessage } from 'element-plus'

// const props = defineProps(ConfirmInfoProps)
const store = useUser()

//从pinia中获取数据 拿到用户的基本信息和考生信息并进行对象合并
const label = computed(() => store.getUserLabel)
const userInfo = computed(() => store.getUserInfo)
const candidateInfo = computed(() => store.getCandidateInfo)
const confirmInfoData = computed(() => {
    return { ...userInfo.value, ...candidateInfo.value }
})
const listKeys = computed(() => {
    return Object.keys(confirmInfoData.value)
})

//修改信息
const disabled = ref(true)
const modifyInfo = () => {
    disabled.value = !disabled.value
}

const handleClickEmit = async () => {
    try {
        let res: any = await login({
            userName: 'anixuil',
            userPassword: 'l20010207'
        })
        ElMessage.success(res.msg as string)
        localStorage.setItem('token', res.data.token)
    } catch (e: any) {
        console.log(e)
    }
}
</script>

<style scoped lang="scss">
.confirm_wrapper {
    width: 100%;
    max-width: 1600px;
    min-width: 1000px;
    margin: 0 auto;

    .footer {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        width: 100%;

        button {
            margin-left: 20px;
        }
    }
}
</style>
