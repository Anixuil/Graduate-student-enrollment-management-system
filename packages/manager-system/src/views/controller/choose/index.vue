<template>
    <div
        class="choose-wrapper"
        v-if="
            store.getUserInfo.candidateStatus == '3' && store.getUserInfo.informationStatus == '40'
        "
    >
        <tab>选择导师</tab>
        <div class="crud-wrapper">
            <avue-crud
                :option="option"
                :data="data"
                :page="page"
                :tableLoading="tableLoading"
                @refresh-change="refreshChange"
                @on-load="onLoad"
                @size-change="sizeChange"
                @search-change="searchChange"
            >
                <template
                    v-for="item in option.column"
                    :key="item.prop"
                    v-slot:[item.prop]="{ row, index }"
                >
                    <el-tag v-if="item.prop === 'departName'" type="success">
                        {{ row[item.prop] }}
                    </el-tag>
                    <el-tag v-else-if="item.prop === 'index'">{{ index + 1 }}</el-tag>
                    <el-tag v-else-if="item.prop === 'className'">{{ row[item.prop] }}</el-tag>
                    <div v-else-if="item.prop === 'relationType'">
                        <el-tag v-if="row[item.prop] == '0'" type="warning">审批中</el-tag>
                        <el-tag v-else-if="row[item.prop] == '1'" type="success">已通过</el-tag>
                        <el-tag v-else-if="row[item.prop] == '2'" type="danger">未通过</el-tag>
                    </div>
                    <div v-else>
                        {{ row[item.prop] }}
                    </div>
                </template>
                <template #menu="{ size, row }">
                    <el-button
                        text
                        type="primary"
                        :size="size"
                        icon="el-icon-promotion"
                        @click="approve(row)"
                        >申请</el-button
                    >
                </template>
            </avue-crud>
        </div>
    </div>
    <template v-else>
        <el-empty class="choose-wrapper" description="您暂无权限访问该模块"></el-empty>
    </template>
</template>

<script setup lang="ts">
import { chooseOption } from '.'
import { getTeacherList } from '@/api/teacher'
import { getStuTeachList, chooseTeach } from '@/api/choose'
import { Ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUser } from '@/store/user'

const store = useUser()

const option: any = reactive(chooseOption)

const data = ref([])

const page = reactive({
    currentPage: 1,
    pageSize: 10,
    pagerCount: 5,
    total: 0
})

//表格加载
const tableLoading: Ref<boolean> = ref(false)
const onLoad = async (page: any) => {
    tableLoading.value = true
    try {
        let result: any = await getStuTeachList({
            pageNum: page.currentPage,
            pageSize: page.pageSize
        })
        let arr: any = [result.data.teacherData]
        if (result.data.teacherData && arr.length > 0) {
            data.value = arr
            option.menu = false
        } else {
            let res: any = await getTeacherList({
                pageNum: page.currentPage,
                pageSize: page.pageSize
            })
            option.menu = true
            data.value = res.data.records
            page.total = res.data.total
            page.currentPage = res.data.currentPage
            page.pageSize = res.data.pageSize
        }

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

//搜素
const searchChange = async (params: any, done: Function) => {
    try {
        let res: any = await getTeacherList({
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

//申请
const approve = async (row: any) => {
    try {
        let res: any = await chooseTeach({
            teacherUuid: row.teacherUuid
        })
        ElMessage.success(res.msg)
        refreshChange()
    } catch (err: any) {
        console.log(err)
        ElMessage.error(err)
    }
}
</script>

<style scoped lang="scss">
.choose-wrapper {
    width: 100%;
    max-width: 1600px;
    min-width: 1000px;
    margin: 0 auto;
    background: white;

    .crud-wrapper {
        box-sizing: border-box;
        padding: 20px 10px;
        background: white;
    }
}
</style>
