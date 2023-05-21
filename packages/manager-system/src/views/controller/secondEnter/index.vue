<template>
    <div class="secondEnter-wrapper">
        <tab>复试确认</tab>
        <div class="enter-wrapper">
            <avue-form
                v-model="secondInfoData"
                :option="option"
                @submit="handleClickEmit"
            ></avue-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { secondEnterOption } from '.'
import { useUser } from '@/store/user/index'
import { updateCandidate } from '@/api/candidate'
import { ElMessage } from 'element-plus'

let option = reactive(secondEnterOption)

const store = useUser()

const userInfo = computed(() => store.getUserInfo)
const candidateInfo = computed(() => store.getCandidateInfo)
const secondInfoData = reactive({
    ...userInfo.value,
    ...candidateInfo.value
})

const handleClickEmit = async (form: any, done: Function) => {
    try {
        let res: any = await updateCandidate({
            ...Object.assign(form, {
                informationStatus: '11',
                candidateStatus: '1'
            })
        })
        await store.getUserInfoFromServer()
        await store.initUserInfo()
        if (res.code != 200) {
            ElMessage.error('复试确认失败')
            done()
            return
        }
        // 禁用表单
        option.column.forEach((item: any) => {
            item.disabled = true
            if (item.label == '照片') {
                item.hide = true
            }
        })
        // 禁用按钮
        option.submitBtn = false
        ElMessage.success('复试确认成功')
        await store.getUserInfoFromServer()
        done()
    } catch (e: any) {
        console.log(e)
        ElMessage.error('复试确认失败')
        done()
    }
}
</script>

<style scoped lang="scss">
.secondEnter-wrapper {
    width: 100%;
    max-width: 1600px;
    min-width: 1000px;
    margin: 0 auto;

    .enter-wrapper {
        box-sizing: border-box;
        padding: 20px 10px;
        background: white;
        max-height: calc(100vh - 230px);
        overflow: scroll;
    }
}
</style>
