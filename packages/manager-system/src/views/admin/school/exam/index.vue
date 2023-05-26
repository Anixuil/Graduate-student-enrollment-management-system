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
                    >
                        <template #custom>
                            <avue-crud
                                :data="data"
                                :option="tableOption"
                                :page="page"
                                :tableLoading="tableLoading"
                                @refresh-change="refreshChange"
                                @on-load="onLoad"
                                @row-save="rowSave"
                                @row-update="rowEdit"
                                @row-del="rowDel"
                                @size-change="sizeChange"
                                @search-change="searchChange"
                                @selection-change="selectionChange"
                                @filter-change="filterChange"
                            >
                                <template
                                    #menu-left="{ size }"
                                    v-if="store.getUserInfo.userRole == 'admin'"
                                >
                                    <el-button
                                        type="primary"
                                        @click="selectionAdmiss"
                                        :size="size"
                                        v-if="
                                            activeName != '1' &&
                                            activeName != '2' &&
                                            activeName != '4'
                                        "
                                        >批量审批</el-button
                                    >
                                    <el-button
                                        type="primary"
                                        v-if="activeName == '1' || activeName == '2'"
                                        @click="admissDialogVisible = true"
                                        >批量审批</el-button
                                    >
                                    <el-button
                                        type="primary"
                                        @click="downloadTemplate"
                                        :size="size"
                                        link
                                    >
                                        下载模板
                                    </el-button>
                                    <!--                                        <el-upload :auto-upload="true" :show-file-list="false" :http-request="updateScore">-->
                                    <!--                                            <el-button type="primary" link :size="size">导入成绩</el-button>-->
                                    <!--                                        </el-upload>-->
                                    <el-upload
                                        :auto-upload="true"
                                        :show-file-list="false"
                                        type="primary"
                                        :http-request="updateScore"
                                        v-if="activeName != '4'"
                                    >
                                        <el-button type="primary" link :size="size"
                                            >导入成绩</el-button
                                        >
                                    </el-upload>
                                </template>
                                <template
                                    v-for="item in tableOption.column"
                                    :key="item.prop"
                                    v-slot:[item.prop]="{ row, index }"
                                >
                                    <el-tag v-if="item.prop === 'enroPlanName'" type="success">
                                        {{ row[item.prop] }}
                                    </el-tag>
                                    <el-tag v-else-if="item.prop === 'index'">{{
                                        index + 1
                                    }}</el-tag>
                                    <el-tag v-else-if="item.prop === 'majorName'">{{
                                        row[item.prop]
                                    }}</el-tag>
                                    <div v-else-if="item.prop === 'candidateStatus'">
                                        <el-tag v-if="row[item.prop] === '0'" type="info"
                                            >初试</el-tag
                                        >
                                        <el-tag v-else-if="row[item.prop] === '1'" type="warning"
                                            >复试</el-tag
                                        >
                                        <el-tag v-else-if="row[item.prop] === '2'" type="danger"
                                            >调剂</el-tag
                                        >
                                        <el-tag v-else-if="row[item.prop] === '3'" type="success"
                                            >录取</el-tag
                                        >
                                    </div>
                                    <div v-else>
                                        {{ row[item.prop] }}
                                    </div>
                                </template>
                            </avue-crud>
                        </template>
                    </custom-exam>
                </Transition>
            </el-tab-pane>
        </el-tabs>
        <el-dialog v-model="admissDialogVisible" title="录取OR调剂OR未录取">
            <el-form>
                <el-form-item label="下一步骤">
                    <el-select v-model="admissValue">
                        <el-option label="调剂" value="2" v-show="activeName != '2'"></el-option>
                        <el-option label="录取" value="3"></el-option>
                        <el-option label="未录取" value="4"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button type="info" @click="admissDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="selectionAdmiss">确 定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import PrepareExam from '@/components/admin/exam/prepareExam.vue'
import CustomExam from '@/components/admin/exam/CustomExam.vue'
import { getWorkFlowList as workFlowList } from '@/api/workflow'
import { examTableOption } from './index'
import { getCandidateList, updateCandidate } from '@/api/candidate'
import { deleteUser, register } from '@/api/user'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUser } from '@/store/user'
import { importExcel } from '@/api/upload'
const store: any = useUser()
//下载模板
const downloadTemplate = () => {
    window.open('http://localhost:8080/anixuil/file/download/考生成绩导入模板.xlsx')
}
//初始化效果实现--------------------------------------------------------------------------------------

const activeName: Ref<string> = ref('first')

//存储流程列表容器
const workFlowData: Ref<any[]> = ref([])

//请求流程列表
const getWorkFlowList = async (type: string): Promise<any> => {
    let res: any = await workFlowList({ pageNum: 1, pageSize: 50, workFlowType: type })
    return res.data.records
}

const typeArr = ['初试', '复试', '调剂', '录取', '未录取']
//请求各个不同招生状态的流程列表
onMounted(() => {
    new Promise<void>(resolve => {
        ;['0', '1', '2', '3', '4'].forEach(async (item: string) => {
            workFlowData.value.push(
                Object.assign(
                    { index: Number(item), type: typeArr[Number(item)] },
                    { workFlowList: await getWorkFlowList(item) }
                )
            )
            if (workFlowData.value.length === 5) resolve()
        })
    }).then(() => {
        //对流程列表进行排序
        workFlowData.value.sort((a: any, b: any) => {
            return a.index - b.index
        })
    })
})
//初始化效果实现--------------------------------------------------------------------------------------
//导入成绩
const updateScore = async (file: any) => {
    const formData = new FormData()
    formData.append('file', file.file)
    formData.append('className', 'ExamScoreTable')
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
//自定义效果实现--------------------------------------------------------------------------------------
const tableOption = reactive(examTableOption)

const page = reactive({
    currentPage: 1,
    pageSize: 10,
    pagerCount: 5,
    total: 0
})
const data: any = ref([])

//表格加载
const tableLoading: Ref<boolean> = ref(false)
const onLoad = async (page: any) => {
    tableLoading.value = true
    try {
        let res: any = await getCandidateList({
            pageNum: page.currentPage,
            pageSize: page.pageSize,
            candidateStatus: activeName.value
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

watch(activeName, () => {
    refreshChange()
})

//多选
//用于存储选中的数据
const selectionData: Ref<any[]> = ref([])
const selectionChange = (selection: any) => {
    selectionData.value = selection
}
const filterChange = (filters: any) => {
    console.log(filters)
}

//批量录取
const selectionAdmiss = () => {
    if (selectionData.value.length === 0) {
        ElMessage.warning('请先选择数据')
        return
    }
    ElMessageBox.confirm(
        `是否批量${activeName.value == '0' ? '允许复试' : typeArr[admissValue.value]}`,
        '提示',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }
    )
        .then(async () => {
            await Promise.all(
                selectionData.value.map(async (item: any) => {
                    await updateCandidate({
                        userName: item.userName,
                        userUuid: item.userUuid,
                        candidateUuid: item.candidateUuid,
                        candidateStatus:
                            activeName.value == '1' || activeName.value == '2'
                                ? admissValue.value
                                : (Number(activeName.value) + 1).toString(),
                        userPhone: item.userPhone,
                        userEmail: item.userEmail,
                        examPlace: item.examPlace,
                        majorUuid: item.majorUuid,
                        userGender: item.userGender,
                        userRole: item.userRole,
                        candidateId: item.candidateId
                    })
                    if (activeName.value == '1') {
                        admissDialogVisible.value = false
                    }
                })
            )
            ElMessage.success('批量录取成功')
            refreshChange()
        })
        .catch(() => {})
}

//批量录取 调剂弹出框
const admissDialogVisible: Ref<boolean> = ref(false)
const admissValue: any = ref('4')

//新增
const rowSave = async (form: any, done: Function) => {
    try {
        await register(Object.assign(form, { userRole: 'candidate' }))
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
        await updateCandidate({
            userName: form.userName,
            userUuid: form.userUuid,
            candidateUuid: form.candidateUuid,
            candidateStatus: form.candidateStatus,
            userPhone: form.userPhone,
            userEmail: form.userEmail,
            examPlace: form.examPlace,
            majorUuid: form.majorUuid,
            userGender: form.userGender,
            userRole: form.userRole,
            candidateId: form.candidateId
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
    ElMessageBox.confirm('是否删除该考生?', '提示', {
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
        params = Object.assign(params, {
            candidateStatus: activeName.value
        })
        let res: any = await getCandidateList({
            pageNum: page.currentPage,
            pageSize: page.pageSize,
            ...params
        })
        params.countryLine = params.countryLine || 0
        params.admissionNumber = params.admissionNumber || 1000
        data.value = res.data.records.splice(0, params.admissionNumber).filter((item: any) => {
            return item.firstScore >= params.countryLine
        })
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

//自定义效果实现--------------------------------------------------------------------------------------
</script>

<style scoped lang="scss">
.exam-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px;
}

:deep(.avue-crud__left) {
    display: flex;
    align-items: center;
    gap: 10px;
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
