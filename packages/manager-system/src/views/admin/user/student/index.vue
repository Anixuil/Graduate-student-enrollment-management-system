<template>
    <div class="student-wrapper">
        <avue-crud
            :data="data"
            :option="option"
            :page="page"
            :tableLoading="tableLoading"
            @refresh-change="refreshChange"
            @row-save="rowSave"
            @row-update="rowEdit"
            @row-del="rowDel"
            @on-load="onLoad"
            @size-change="sizeChange"
            @search-change="searchChange"
        >
            <template #menu-left="{ size }" v-if="store.getUserInfo.userRole == 'admin'">
                <el-upload :auto-upload="true" :show-file-list="false" :http-request="uploadFile">
                    <el-button type="primary" link :size="size">批量导入</el-button>
                </el-upload>
                <el-button type="primary" @click="downloadTemplate" :size="size" link
                    >下载模板</el-button
                >
            </template>
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
                <div v-else-if="item.prop === 'candidateStatus'">
                    <el-tag v-if="row[item.prop] === '0'" type="danger">初试</el-tag>
                    <el-tag v-else-if="row[item.prop] === '1'" type="info">复试</el-tag>
                    <el-tag v-else-if="row[item.prop] === '2'" type="warning">调剂</el-tag>
                </div>
                <div v-else>
                    {{ row[item.prop] }}
                </div>
            </template>
        </avue-crud>
    </div>
</template>

<script setup lang="ts">
import { studentTableOption } from './index'
import { Ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getStudentList, updateStudent } from '@/api/student'
import { deleteUser, register } from '@/api/user'
import { importExcel } from '@/api/upload'
import { useUser } from '@/store/user'
const store: any = useUser()

//下载模板
const downloadTemplate = () => {
    window.open('http://localhost:8080/anixuil/file/download/用户导入模板.xlsx')
}

//导入
const uploadFile = async (file: any) => {
    const formData = new FormData()
    formData.append('file', file.file)
    formData.append('className', 'UserTable')
    try {
        await importExcel(formData)
        refreshChange()
        ElMessage.success('导入成功')
    } catch (e) {
        console.log(e)
    }
}

const page = reactive({
    currentPage: 1,
    pageSize: 10,
    pagerCount: 5,
    total: 0
})
const data: any = ref([])
const option = reactive(studentTableOption)

//表格加载
const tableLoading: Ref<boolean> = ref(false)
const onLoad = async (page: any) => {
    tableLoading.value = true
    try {
        let res: any = await getStudentList({
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
    try {
        await register(Object.assign(form, { userRole: 'student' }))
        ElMessage.success('新增成功')
        refreshChange()
        done()
    } catch (e) {
        console.log(e)
    }
}
// 修改
const rowEdit = async (form: any, index: number, done: Function) => {
    try {
        await updateStudent({
            userUuid: form.userUuid,
            studentUuid: form.studentUuid,
            studentId: form.studentId,
            userEmail: form.userEmail,
            userPhone: form.userPhone,
            userGender: form.userGender,
            userAge: form.userAge,
            majorUuid: form.majorUuid,
            entryDate: form.entryDate,
            graduationDate: form.graduationDate,
            userName: form.userName,
            userHeadimg: form.userHeadimg,
            userAddress: form.userAddress
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
    ElMessageBox.confirm('是否删除该学生?', '提示', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
    })
        .then(async () => {
            await deleteUser({ userUuid: form.userUuid })
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
        let res: any = await getStudentList({
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
.student-wrapper {
    width: 100%;
    height: 100%;
}

:deep(.avue-crud__left) {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
