<template>
    <div class="students-box">
        <tab>基本信息</tab>
        <infoDetail :listKeys="userKeys" :listLabel="listLabel" :listData="user"></infoDetail>
        <tab v-if="user.userRole == 'candidate'">考生信息</tab>
        <infoDetail
            v-if="user.userRole == 'candidate'"
            :listKeys="candidateKeys"
            :listLabel="listLabel"
            :listData="candidate"
        ></infoDetail>
        <tab v-if="user.userRole == 'student'">学生信息</tab>
        <infoDetail
            v-if="user.userRole == '学生'"
            :listKeys="studentKeys"
            :listLabel="listLabel"
            :listData="student"
        ></infoDetail>
    </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { useUser } from '@/store/user/index'
import { studentInterface, studentLabelInterface } from './ts/person'

//从pinia中获取用户信息
const store = useUser()

//用户基本信息
const user = computed(() => store.getUserInfo as studentInterface)
const userKeys: Ref<string[]> = ref(Object.keys(user.value))
const listLabel = computed(() => store.getUserLabel as studentLabelInterface)

//考生信息
const candidate = computed(() => store.getCandidateInfo)
const candidateKeys: Ref<string[]> = ref(Object.keys(candidate.value))
//考生信息中去除头像、角色、姓名
userKeys.value.forEach((item, index) => {
    if (item == 'userHeadimg' || item == 'userRole' || item == 'userName') {
        userKeys.value.splice(index, 1)
    }
})
const candidateArr = [
    'firstScore',
    'secondScore',
    'thirdScore',
    'candidateStatus',
    'informationStatus',
    'candidateUuid',
    'majorUuid',
    'examDate'
]
candidateKeys.value = candidateKeys.value.filter(item => {
    return !candidateArr.includes(item)
})

//学生信息
const student = computed(() => store.getStudentInfo as studentInterface)
const studentKeys: Ref<string[]> = ref(Object.keys(student.value))
</script>

<style scoped lang="scss">
.students-box {
    margin-top: 10px;
    box-sizing: border-box;
}
</style>
