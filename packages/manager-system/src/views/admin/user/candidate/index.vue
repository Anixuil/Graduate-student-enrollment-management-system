<template>
    <div class="candidate-wrapper">
        <avue-crud :data="data" :option="option" v-model:page="page" @on-load="onLoad"></avue-crud>
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const page = reactive({
    pageSize: 20,
    pagerCount: 5
})
const data: any = ref([])
const option = reactive({
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    column: [
        { label: '姓名', prop: 'name' },
        { label: '年龄', prop: 'age' },
        { label: '性别', prop: 'sex' }
    ]
})

//表格加载
const onLoad = (page: any) => {
    page.total = 4
    //模拟分页
    data.value = [
        {
            id: 1,
            name: '张三',
            sex: '男',
            age: 18
        },
        {
            id: 2,
            name: '李四',
            sex: '女',
            age: 18
        },
        {
            id: 3,
            name: '王五',
            sex: '女',
            age: 20
        },
        {
            id: 4,
            name: '赵六',
            sex: '女',
            age: 23
        }
    ]
}
</script>

<style scoped lang="scss">
.candidate-wrapper {
    width: 100%;
    height: 100%;
}
</style>
