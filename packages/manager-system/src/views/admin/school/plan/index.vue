<template>
    <div enroPlan="enroPlan-wrapper">
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
                <el-tag v-if="item.prop === 'enroPlanName'" type="success">
                    {{ row[item.prop] }}
                </el-tag>
                <el-tag v-else-if="item.prop === 'index'">{{ index + 1 }}</el-tag>
                <el-tag v-else-if="item.prop === 'majorName'">{{ row[item.prop] }}</el-tag>
                <div v-else>
                    {{ row[item.prop] }}
                </div>
            </template>
            <!-- 弹出框 -->
            <!-- <template v-slot:departUuidForm="{row}">
                {{ row }}
            </template> -->
        </avue-crud>
    </div>
</template>

<script setup lang="ts">
import { enroPlanTableOption } from './index'
import { Ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getEnroPlanList, deleteEnroPlan, addEnroPlan, updateEnroPlan } from '@/api/enroPlan'
import { importExcel } from '@/api/upload'
const page = reactive({
    currentPage: 1,
    pageSize: 10,
    pagerCount: 5,
    total: 0
})
const data: any = ref([])
const option = reactive(enroPlanTableOption)

//表格加载
const tableLoading: Ref<boolean> = ref(false)
const onLoad = async (page: any) => {
    tableLoading.value = true
    try {
        let res: any = await getEnroPlanList({ pageNum: page.currentPage, pageSize: page.pageSize })
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

//下载模板
const downloadTemplate = () => {
    window.open('http://localhost:8080/anixuil/public/2023-04-02 22_57_14.xlsx')
}

//导入
const uploadFile = async (file: any) => {
    const formData = new FormData()
    formData.append('file', file.file)
    try {
        await importExcel(formData)
        refreshChange()
        ElMessage.success('导入成功')
    } catch (e) {
        console.log(e)
    }
}

//新增
const rowSave = async (form: any, done: Function) => {
    // console.log(form)
    try {
        await addEnroPlan(form)
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
        await updateEnroPlan({
            enroPlanUuid: form.enroPlanUuid,
            majorUuid: form.majorUuid,
            enroPlanNumber: form.enroPlanNumber,
            enroRealNumber: form.enroRealNumber
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
    ElMessageBox.confirm('是否删除该课程?', '提示', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
    })
        .then(async () => {
            await deleteEnroPlan({ enroPlanUuid: form.enroPlanUuid })
            ElMessage.success('删除成功')
            refreshChange()
        })
        .catch(() => {
            ElMessage.warning('取消删除')
        })
}

//搜素
const searchChange = async (params: any, done: Function) => {
    try {
        let res: any = await getEnroPlanList({
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
.enroPlan-wrapper {
    width: 100%;
    height: 100%;
}

:deep(.avue-crud__left) {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
