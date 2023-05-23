<template>
    <div class="dispense-wrapper">
        <tab>调剂信息（提交信息代表接收调剂）</tab>
        <div class="form-wrapper">
            <avue-form
                v-model="dispenseInfoData"
                :option="option"
                @submit="handleClickEmit"
            ></avue-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { dispenseOption } from '.'
import { useUser } from '@/store/user'
import { updateCandidate } from '@/api/candidate'
import { ElMessage } from 'element-plus'

let option = reactive(dispenseOption)

const store = useUser()

const userInfo = computed(() => store.getUserInfo)
const candidateInfo = computed(() => store.getCandidateInfo)
const dispenseInfoData = reactive({
    ...userInfo.value,
    ...candidateInfo.value
})

const handleClickEmit = async (form: any, done: Function) => {
    try {
        let res: any = await updateCandidate({
            ...Object.assign(form, {
                informationStatus: '21'
            })
        })
        await store.getUserInfoFromServer()
        await store.initUserInfo()
        if (res.code != 200) {
            ElMessage.error('提交调剂信息失败')
            done()
            return
        }
        // 禁用表单
        option.column.forEach((item: any) => {
            item.disabled = true
        })
        // 禁用按钮
        option.submitBtn = false
        ElMessage.success('提交调剂信息成功')
        await store.getUserInfoFromServer()
        done()
    } catch (e: any) {
        console.log(e)
        ElMessage.error('提交调剂信息失败')
        done()
    }
}
</script>

<style scoped lang="scss">
.dispense-wrapper {
    width: 100%;
    max-width: 1600px;
    min-width: 1000px;
    margin: 0 auto;

    .form-wrapper {
        box-sizing: border-box;
        padding: 20px 10px;
        background: white;
    }
}
</style>
