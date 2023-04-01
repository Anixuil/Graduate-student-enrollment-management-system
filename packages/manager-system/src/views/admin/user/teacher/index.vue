<template>
    <div>
        <avue-crud
            v-model="form"
            :option="option"
            @row-save="rowSave"
            @row-update="rowUpdate"
            @row-del="rowDel"
            :data="data"
        ></avue-crud>
    </div>
</template>

<script setup lang="ts">
const option: any = ref(null)
const data: any = ref(null)
const form: any = ref({})
option.value = {
    index: true,
    column: [
        {
            label: '姓名',
            prop: 'name'
        },
        {
            label: '年龄',
            prop: 'sex'
        }
    ]
}
data.value = [
    {
        name: '张三',
        sex: 12
    },
    {
        name: '李四',
        sex: 13
    }
]
function rowSave(row: any, done: any, loading: any) {
    done(row)
}
function rowDel(row: any, index: any, done: any) {
    done(row)
}
function rowUpdate(row: any, index: any, done: any, loading: any) {
    done(row)
}
</script>

<style scoped lang="scss"></style>
