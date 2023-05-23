<template>
    <div class="choose-wrapper">
        <avue-crud
            :data="data"
            :option="option"
            :page="page"
            :tableLoading="tableLoading"
            @refresh-change="refreshChange"
            @on-load="onLoad"
            @size-change="sizeChange"
        >
            <template #menu-left="{ size }" v-if="store.getUserInfo.userRole == 'teacher'">
                <el-badge :value="waitStu.length" class="item" v-show="waitStu.length != 0">
                    <el-button type="primary" @click="chooseDialogVisible = true" :size="size"
                        >审批代办</el-button
                    >
                </el-badge>
                <el-button
                    type="primary"
                    @click="chooseDialogVisible = true"
                    :size="size"
                    v-show="waitStu.length == 0"
                    >审批代办</el-button
                >
            </template>
            <template
                v-for="item in option.column"
                :key="item.prop"
                v-slot:[item.prop]="{ row, index }"
            >
                <el-tag v-if="item.prop === 'index'">{{ index + 1 }}</el-tag>
                <div v-else>
                    {{ row[item.prop] }}
                </div>
            </template>
        </avue-crud>
        <el-dialog v-model="chooseDialogVisible" title="审批代办（未选择的将直接被拒绝）">
            <el-transfer v-model="waitValue" :data="waitStu" :props="waitProps" />
            <template #footer>
                <el-button @click="chooseDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="agreeAndRefuse">确 定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { getStuTeachList, agreeStuTeach } from '@/api/choose/index'
import { chooseOption } from './index'
import { useUser } from '@/store/user'
import { Ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const store: any = useUser()

const option = reactive(chooseOption)

const page = reactive({
    currentPage: 1,
    pageSize: 10,
    pagerCount: 5,
    total: 0
})
const data: any = ref([])
//待审批的学生
const waitStu: any = ref([])

//表格加载
const tableLoading: Ref<boolean> = ref(false)
const onLoad = async (page: any) => {
    tableLoading.value = true
    try {
        let res: any = await getStuTeachList({
            pageNum: page.currentPage,
            pageSize: page.pageSize
        })
        if (store.getUserInfo.userRole == 'teacher') {
            data.value = res.data.records.filter((item: any) => {
                return item.relationType == '1'
            })
            waitStu.value = res.data.records.filter((item: any) => {
                return item.relationType == '0'
            })
        } else {
            data.value = res.data.records
        }

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

//教师同意学生选择
const chooseDialogVisible: Ref<boolean> = ref(false)
const waitValue: any = ref([])
const waitProps = reactive({
    key: 'relationUuid',
    label: 'userName'
})
const agreeAndRefuse = async () => {
    for (const item of waitValue.value) {
        await agree(item)
    }
    const refuseArr = waitStu.value.filter(
        (item: any) => !waitValue.value.includes(item.relationUuid)
    )
    for (const item of refuseArr) {
        await refuse(item.relationUuid)
    }
}
const agree = async (item: any) => {
    try {
        let res: any = await agreeStuTeach({
            relationUuid: item,
            relationType: '1'
        })
        if (res.code == 200) {
            ElMessage.success(res.msg)
            chooseDialogVisible.value = false
            onLoad(page)
        } else {
            ElMessage.error(res.msg)
        }
    } catch (e) {
        console.log(e)
    }
}
const refuse = async (item: any) => {
    try {
        let res: any = await agreeStuTeach({
            relationUuid: item,
            relationType: '2'
        })
        if (res.code == 200) {
            ElMessage.success(res.msg)
            chooseDialogVisible.value = false
            onLoad(page)
        } else {
            ElMessage.error(res.msg)
        }
    } catch (e) {
        console.log(e)
    }
}
</script>

<style scoped lang="scss">
.choose-wrapper {
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

:deep(.el-transfer) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

:deep(.avue-crud__menu) {
    overflow: inherit;
}

:deep(.el-card) {
    overflow: inherit;
}
</style>
