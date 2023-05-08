<template>
    <div class="banner-wrapper">
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
            <template #index="{ index }">
                <el-tag>{{ index + 1 }}</el-tag>
            </template>
        </avue-crud>
    </div>
</template>

<script setup lang="ts">
import { indexWheelTableOption } from './index'
import { Ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
    getIndexWheelList,
    deleteIndexWheel,
    addIndexWheel,
    updateIndexWheel
} from '@/api/indexWheel'
const page = reactive({
    currentPage: 1,
    pageSize: 10,
    pagerCount: 5,
    total: 0
})
const data: any = ref([])
const option = reactive(indexWheelTableOption)

//表格加载
const tableLoading: Ref<boolean> = ref(false)
const onLoad = async (page: any) => {
    tableLoading.value = true
    try {
        let res: any = await getIndexWheelList({
            pageNum: page.currentPage,
            pageSize: page.pageSize
        })
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
        await addIndexWheel(form)
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
        await updateIndexWheel({
            indexWheelTitle: form.indexWheelTitle,
            indexWheelUuid: form.indexWheelUuid,
            indexWheelHref: form.indexWheelHref,
            indexWheelDesc: form.indexWheelDesc,
            indexWheelImage: form.indexWheelImage
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
            await deleteIndexWheel({ indexWheelUuid: form.indexWheelUuid })
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
        let res: any = await getIndexWheelList({
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
.banner-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 0 50px;
}

:deep(.avue-crud__left) {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
