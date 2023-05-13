<template>
    <div class="notice-wrapper">
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
            v-model="noticeForm"
        >
            <template
                v-for="item in option.column"
                :key="item.prop"
                v-slot:[item.prop]="{ row, index }"
            >
                <el-tag v-if="item.prop === 'noticeInfoTitle'" type="success">
                    {{ row[item.prop] }}
                </el-tag>
                <el-tag v-else-if="item.prop === 'index'">{{ index + 1 }}</el-tag>
                <el-tag
                    v-else-if="item.prop === 'noticeInfoType'"
                    :type="typeList[row[item.prop] - 1].type"
                    >{{ typeList[row[item.prop] - 1].name }}</el-tag
                >
                <div v-else>
                    {{ row[item.prop] }}
                </div>
            </template>
            <template #noticeInfoContent-form="{ column }">
                <lx-editor
                    v-if="column.boxType == 'add' || column.boxType == 'edit'"
                    v-model="noticeForm.noticeInfoContent"
                    :disabled="
                        column.boxType != 'add' && column.boxType != 'edit' && column.viewDisabled
                    "
                />
                <div v-else class="content-text" v-html="noticeForm.noticeInfoContent"></div>
            </template>
            <template #index="{ index }">
                <el-tag>{{ index + 1 }}</el-tag>
            </template>
        </avue-crud>
    </div>
</template>

<script setup lang="ts">
import { noticeInfoTableOption } from './index'
import { Ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getNoticeInfoList, deleteNoticeInfo, addNoticeInfo, updateNoticeInfo } from '@/api/notice'
import LxEditor from '@/components/common/Editor/index.vue'

const typeList = ref([
    {
        type: 'success',
        name: '研招动态'
    },
    {
        type: 'info',
        name: '通知公告'
    },
    {
        type: 'warning',
        name: '校园新闻'
    }
])

const page = reactive({
    currentPage: 1,
    pageSize: 10,
    pagerCount: 5,
    total: 0
})
const data: any = ref([])
const option = reactive(noticeInfoTableOption)

//表格加载
const tableLoading: Ref<boolean> = ref(false)
const onLoad = async (page: any) => {
    tableLoading.value = true
    try {
        let res: any = await getNoticeInfoList({
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

const noticeForm = reactive({})

//新增
const rowSave = async (form: any, done: Function) => {
    console.log(form)
    try {
        await addNoticeInfo(form)
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
        await updateNoticeInfo({
            noticeInfoUuid: form.noticeInfoUuid,
            noticeInfoTitle: form.noticeInfoTitle,
            noticeInfoIntro: form.noticeInfoIntro,
            noticeInfoContent: form.noticeInfoContent,
            noticeInfoAttachment: form.noticeInfoAttachment,
            noticeInfoType: form.noticeInfoType
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
            await deleteNoticeInfo({ noticeInfoUuid: form.noticeInfoUuid })
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
        let res: any = await getNoticeInfoList({
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
.notice-wrapper {
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
