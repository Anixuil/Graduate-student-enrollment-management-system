<template>
    <div class="exam-wrapper">
        <el-tabs v-model="activeName">
            <el-tab-pane label="考前准备" name="first">
                <Transition>
                    <prepareExam v-show="activeName == 'first'" />
                </Transition>
            </el-tab-pane>
            <el-tab-pane
                :label="item.type"
                :name="item.index"
                v-for="item in workFlowData"
                :key="item.workFlowUuid"
            >
                <Transition>
                    <custom-exam
                        v-show="activeName == item.index"
                        :work-flow-list="item.workFlowList"
                    />
                </Transition>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import PrepareExam from '@/components/admin/exam/prepareExam.vue'
import CustomExam from '@/components/admin/exam/CustomExam.vue'
import { getWorkFlowList as workFlowList } from '@/api/workflow'

const activeName: Ref<string> = ref('first')

//存储流程列表容器
const workFlowData: Ref<any[]> = ref([])

//请求流程列表
const getWorkFlowList = async (type: string): Promise<any> => {
    let res: any = await workFlowList({ pageNum: 1, pageSize: 50, workFlowType: type })
    return res.data.records
}

const typeArr = ['初试', '复试', '调剂', '录取']
//请求各个不同招生状态的流程列表
onMounted(() => {
    new Promise<void>(resolve => {
        ;['0', '1', '2', '3'].forEach(async (item: string) => {
            workFlowData.value.push(
                Object.assign(
                    { index: Number(item), type: typeArr[Number(item)] },
                    { workFlowList: await getWorkFlowList(item) }
                )
            )
            if (workFlowData.value.length === 4) resolve()
        })
    }).then(() => {
        //对流程列表进行排序
        workFlowData.value.sort((a: any, b: any) => {
            return a.index - b.index
        })
    })
})

//监听workFlowData
watch(workFlowData, () => {})
</script>

<style scoped lang="scss">
.exam-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.4s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(5%);
}
</style>
