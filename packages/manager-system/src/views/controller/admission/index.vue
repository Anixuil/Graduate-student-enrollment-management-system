<template>
    <div class="admiss-wrapper">
        <tab>录取信息</tab>
        <div class="form-wrapper">
            <avue-form
                v-model="admissInfoData"
                :option="option"
                @submit="handleClickEmit"
            ></avue-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { admissOption } from '.'
import { useUser } from '@/store/user'
import { updateCandidate } from '@/api/candidate'
import { ElMessage } from 'element-plus'

let option = reactive(admissOption)

const store = useUser()

const userInfo = computed(() => store.getUserInfo)
const candidateInfo = computed(() => store.getCandidateInfo)
const admissInfoData = reactive({
    ...userInfo.value,
    ...candidateInfo.value
})

const handleClickEmit = async (form: any, done: Function) => {
    try {
        let res: any = await updateCandidate({
            ...Object.assign(form, {
                informationStatus: '31',
                candidateStatus: '3'
            })
        })
        await store.getUserInfoFromServer()
        await store.initUserInfo()
        if (res.code != 200) {
            ElMessage.error('录取信息确认失败')
            done()
            return
        }
        // 禁用表单
        option.column.forEach((item: any) => {
            item.disabled = true
        })
        // 禁用按钮
        option.submitBtn = false
        ElMessage.success('录取信息确认成功')
        done()
    } catch (e: any) {
        console.log(e)
        ElMessage.error('录取信息确认失败')
        done()
    }
}
</script>

<style scoped lang="scss">
.admiss-wrapper {
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
