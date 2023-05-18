<template>
    <div class="class-wrapper">
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
                <el-tag v-if="item.prop === 'className'" type="success">
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
import { classTableOption } from './index'
import { Ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getClassList, deleteClass, addClass, updateClass } from '@/api/class'
import { importExcel } from '@/api/upload'
import { useUser } from '@/store/user'
const store: any = useUser()
const page = reactive({
    currentPage: 1,
    pageSize: 10,
    pagerCount: 5,
    total: 0
})
const data: any = ref([])
const option = reactive(classTableOption)

//表格加载
const tableLoading: Ref<boolean> = ref(false)
const onLoad = async (page: any) => {
    tableLoading.value = true
    try {
        let res: any = await getClassList({ pageNum: page.currentPage, pageSize: page.pageSize })
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
    window.open('http://localhost:8080/anixuil/file/download/院系专业课程导入模板.xlsx')
}

//导入
const uploadFile = async (file: any) => {
    const formData = new FormData()
    formData.append('file', file.file)
    formData.append('className', 'DepartTable')
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
        await addClass(form)
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
        await updateClass({
            classUuid: form.classUuid,
            className: form.className,
            classIntro: form.classIntro,
            majorUuid: form.majorUuid
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
            await deleteClass({ classUuid: form.classUuid })
            ElMessage.success('删除成功')
            refreshChange()
        })
        .catch(() => {
            ElMessage.warning('取消删除')
        })
}
</script>

<style scoped lang="scss">
.class-wrapper {
    width: 100%;
    height: 100%;
}

:deep(.avue-crud__left) {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
