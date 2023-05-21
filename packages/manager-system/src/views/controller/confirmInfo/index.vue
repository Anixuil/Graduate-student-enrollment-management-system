<template>
    <div class="confirm_wrapper">
        <tab>需确认信息（只有一次修改的机会，请认真确定信息是否正确）</tab>
        <div class="form-wrapper">
            <avue-form
                v-model="confirmInfoData"
                :option="option"
                @submit="handleClickEmit"
            ></avue-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { confirmInfoOption } from '.'
import { useUser } from '@/store/user/index'
import { updateCandidate } from '@/api/candidate'
import { ElMessage } from 'element-plus'

let option = reactive(confirmInfoOption)

const store = useUser()

const userInfo = computed(() => store.getUserInfo)
const candidateInfo = computed(() => store.getCandidateInfo)
const confirmInfoData = reactive({
    ...userInfo.value,
    ...candidateInfo.value
})

const handleClickEmit = async (form: any, done: Function) => {
    try {
        let res: any = await updateCandidate({
            ...Object.assign(form, {
                informationStatus: '01'
            })
        })
        await store.getUserInfoFromServer()
        await store.initUserInfo()
        if (res.code != 200) {
            ElMessage.error('确认信息失败')
            done()
            return
        }
        // 禁用表单
        option.column.forEach((item: any) => {
            item.disabled = true
        })
        // 禁用按钮
        option.submitBtn = false
        ElMessage.success('确认信息成功')
        await store.getUserInfoFromServer()
        done()
    } catch (e: any) {
        console.log(e)
        ElMessage.error('确认信息失败')
        done()
    }
}
</script>

<style scoped lang="scss">
.confirm_wrapper {
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
