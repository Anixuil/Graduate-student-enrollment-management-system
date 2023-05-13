<template>
    <div class="index-wrapper">
        <avue-data-tabs :option="option"></avue-data-tabs>
        <RouterView v-slot="{ Component, route }">
            <KeepAlive>
                <Transition :name="(route.meta.transition as string)">
                    <component :is="Component" />
                </Transition>
            </KeepAlive>
        </RouterView>
    </div>
</template>

<script setup lang="ts">
import { getUserCount } from '@/api/data'
const option = reactive({
    data: [
        {
            title: '教师人数统计',
            subtitle: '最近系统刷新时',
            count: 7993,
            allcount: 10222,
            text: '当前系统的用户总数',
            color: 'rgb(27, 201, 142)',
            key: 'Teacher'
        },
        {
            title: '学生人数统计',
            subtitle: '最近系统刷新时',
            count: 3112,
            allcount: 10222,
            text: '当前系统的用户总数',
            color: 'rgb(230, 71, 88)',
            key: 'Student'
        },
        {
            title: '考生人数统计',
            subtitle: '最近系统刷新时',
            count: 908,
            allcount: 10222,
            text: '当前系统的用户总数',
            color: 'rgb(178, 159, 255)',
            key: 'Examinee'
        }
    ]
})
//获取用户人数
const getUserCountData = async () => {
    try {
        let res: any = await getUserCount()
        option.data[0].count = res.data.teacherCount
        option.data[1].count = res.data.studentCount
        option.data[2].count = res.data.candidateCount
        option.data.forEach((item: any) => {
            item.allcount = res.data.userCount
        })
    } catch (e: any) {
        console.log(e)
    }
}
onMounted(() => {
    getUserCountData()
})
</script>

<style scoped lang="scss">
//页面跳转过渡效果
.slide-fade-enter-active {
    transition: all 0.4s ease;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>
