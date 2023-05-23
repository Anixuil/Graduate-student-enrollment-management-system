<template>
    <div class="depart-wrapper">
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
        >
            <template #menu-left="{ size }" v-if="store.getUserInfo.userRole === 'admin'">
                <el-upload :auto-upload="true" :show-file-list="false" :http-request="uploadFile">
                    <el-button type="primary" link :size="size">批量导入</el-button>
                </el-upload>
                <el-button type="primary" @click="downloadTemplate" :size="size" link>
                    下载模板
                </el-button>
            </template>
            <template #index="{ index }">
                <el-tag>{{ index + 1 }}</el-tag>
            </template>
        </avue-crud>
    </div>
</template>

<script setup lang="ts">
import { getDepartList, deleteDepart, addDepart, updateDepart } from '@/api/depart'
import { importExcel } from '@/api/upload'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Ref } from 'vue'
import { departTableOption } from '.'
import { useUser } from '@/store/user'
const store: any = useUser()

const page = reactive({
    currentPage: 1,
    pageSize: 10,
    pagerCount: 5,
    total: 0
})
const data: any = ref([])
const option = reactive(departTableOption)

//表格加载
const tableLoading: Ref<boolean> = ref(false)
const onLoad = async (page: any) => {
    tableLoading.value = true
    try {
        let res: any = await getDepartList({ pageNum: page.currentPage, pageSize: page.pageSize })
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
    console.log(page)
}
const refreshChange = () => {
    onLoad(page)
}

//下载模板
const downloadTemplate = () => {
    window.open('http://localhost:8080/anixuil/file/download/院系专业课程导入模板.xlsx')
}

//导入
const uploadFile = async (file: any) => {
    const formData = new FormData()
    formData.append('file', file.file)
    formData.append('className', 'DepartTable')
    try {
        const res: any = await importExcel(formData)
        refreshChange()
        ElMessageBox.alert(
            `
            <ul>
            <li>成功导入 <strong>${res.data.successCount}</strong> 条数据</li>
            <li>失败 <strong>${res.data.failCount}</strong> 条数据</li>
            <li>已存在 <strong>${res.data.existCount}</strong> 条数据</li>
            </ul>
        `,
            res.msg,
            {
                dangerouslyUseHTMLString: true
            }
        )
    } catch (e) {
        console.log(e)
    }
}

//新增
const rowSave = async (form: any, done: Function) => {
    // console.log(form)
    try {
        await addDepart(form)
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
        await updateDepart({
            departUuid: form.departUuid,
            departName: form.departName,
            departIntro: form.departIntro
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
    ElMessageBox.confirm('是否删除该院系?', '提示', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
    })
        .then(async () => {
            await deleteDepart({ departUuid: form.departUuid })
            ElMessage.success('删除成功')
            refreshChange()
        })
        .catch(() => {
            ElMessage.warning('取消删除')
        })
}
</script>

<style scoped lang="scss">
.depart-wrapper {
    width: 100%;
    height: 100%;
}

:deep(.avue-crud__left) {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
