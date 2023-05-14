<template>
    <div class="workflow-wrapper">
        <avue-crud
            :data="data"
            :option="option"
            :page="page"
            :tableLoading="tableLoading"
            @refresh-change="refreshChange"
            @row-del="rowDel"
            @on-load="onLoad"
            @size-change="sizeChange"
            @row-save="rowSave"
            @row-update="rowEdit"
            @search-change="searchChange"
        >
            <template
                v-for="item in option.column"
                :key="item.prop"
                v-slot:[item.prop]="{ row, index }"
            >
                <el-tag v-if="item.prop === 'workFlowTitle'" type="success">
                    {{ row[item.prop] }}
                </el-tag>
                <el-tag v-else-if="item.prop === 'index'">{{ index + 1 }}</el-tag>
                <div v-else-if="item.prop === 'workFlowStatus'">
                    <el-tag v-if="row[item.prop] == true" type="success">启用</el-tag>
                    <el-tag v-else-if="row[item.prop] == false" type="danger">禁用</el-tag>
                </div>
                <el-tag
                    v-else-if="item.prop === 'workFlowType'"
                    :type="typeArr[row[item.prop]].type"
                    >{{ typeArr[row[item.prop]].value }}</el-tag
                >
                <div v-else>
                    {{ row[item.prop] }}
                </div>
            </template>
        </avue-crud>
    </div>
</template>

<script setup lang="ts">
import { workFlowTableOption } from './index'
import { Ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getWorkFlowList, deleteWorkFlow, addWorkFlow, updateWorkFlow } from '@/api/workflow'
const typeArr = ref([
    { type: 'info', value: '初试' },
    { type: '', value: '复试' },
    { type: 'warning', value: '调剂' },
    { type: 'success', value: '已录取' },
    { type: 'danger', value: '未录取' }
])
const page = reactive({
    currentPage: 1,
    pageSize: 10,
    pagerCount: 5,
    total: 0
})
const data: any = ref([])
const option = reactive(workFlowTableOption)

//表格加载
const tableLoading: Ref<boolean> = ref(false)
const onLoad = async (page: any) => {
    tableLoading.value = true
    try {
        let res: any = await getWorkFlowList({ pageNum: page.currentPage, pageSize: page.pageSize })
        data.value = res.data.records
        page.total = res.data.total
        page.currentPage = res.data.currentPage
        page.pageSize = res.data.pageSize
        tableLoading.value = false
    } catch (e) {
        console.log(e)
    }
}
const sizeChange = () => {
    // console.log(page)
}
const refreshChange = () => {
    onLoad(page)
}

//新增
const rowSave = async (form: any, done: Function) => {
    // console.log(form)
    try {
        await addWorkFlow(form)
        ElMessage.success('新增成功')
        refreshChange()
        done()
    } catch (e) {
        console.log(e)
    }
}
//修改
const rowEdit = async (form: any, index: number, done: Function) => {
    try {
        await updateWorkFlow({
            workFlowUuid: form.workFlowUuid,
            workFlowTitle: form.workFlowTitle,
            workFlowDesc: form.workFlowDesc,
            workFlowIndex: form.workFlowIndex,
            workFlowStatus: form.workFlowStatus,
            workFlowType: form.workFlowType,
            workFlowPath: form.workFlowPath
        })
        ElMessage.success('修改成功')
        refreshChange()
        done()
    } catch (e) {
        console.log(e)
    }
}

//删除
const rowDel = (form: any) => {
    ElMessageBox.confirm('是否删除该流程?', '提示', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
    })
        .then(async () => {
            await deleteWorkFlow({ workFlowUuid: form.workFlowUuid })
            ElMessage.success('删除成功')
            refreshChange()
        })
        .catch(() => {
            ElMessage.warning('取消删除')
        })
}

const searchChange = async (params: any, done: Function) => {
    try {
        let res: any = await getWorkFlowList({
            pageNum: page.currentPage,
            pageSize: page.pageSize,
            ...params
        })
        data.value = res.data.records
        page.total = res.data.total
        page.currentPage = res.data.currentPage
        page.pageSize = res.data.pageSize
        ElMessage.success(res.msg)
        done()
    } catch (err: any) {
        console.log(err)
        ElMessage.error(err)
        done()
    }
}
</script>

<style scoped lang="scss">
.workflow-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px 0 50px;
}

:deep(.avue-crud__left) {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
