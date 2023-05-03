<template>
    <div class="person-wrapper">
        <tab :tabHeight="10">基本信息</tab>
        <infoDetail :listKeys="userKeys" :listLabel="listLabel" :listData="user"></infoDetail>
        <tab v-if="user.userRole == 'teacher'">教师信息</tab>
        <infoDetail
            v-if="user.userRole == 'teacher'"
            :listKeys="teacherKeys"
            :listLabel="listLabel"
            :listData="teacher"
        ></infoDetail>
        <div class="person-control">
            <el-button type="primary" v-loading="loading" @click="logout">退出登录</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUser } from '@/store/user'
import { Ref } from 'vue'
import { studentInterface, studentLabelInterface } from '@/components/person/ts/person'

const router = useRouter()
const store = useUser()
//用户基本信息
const user = computed(() => store.getUserInfo as studentInterface)
const userKeys: Ref<string[]> = ref(Object.keys(user.value))
const listLabel = computed(() => store.getUserLabel as studentLabelInterface)
//教师信息
const teacher = computed(() => store.getTeacherInfo as studentInterface)
const teacherKeys: Ref<string[]> = ref(Object.keys(teacher.value))
// //管理员信息
// const admin = computed(() => store.getAdminInfo as studentInterface)
// const adminKeys: Ref<string[]> = ref(Object.keys(admin.value))

//退出登录
const loading = ref(false)
const logout = () => {
    loading.value = true
    store.logout()
    router.push('login')
    loading.value = false
}
</script>

<style scoped lang="scss">
.person-wrapper {
    .person-control {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
}
</style>
