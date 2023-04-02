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
const option = {
    data: [
        {
            title: '教师人数统计',
            subtitle: '实时',
            count: 7993,
            allcount: 10222,
            text: '当前分类总记录数',
            color: 'rgb(27, 201, 142)',
            key: 'Teacher'
        },
        {
            title: '学生人数统计',
            subtitle: '实时',
            count: 3112,
            allcount: 10222,
            text: '当前上传的附件数',
            color: 'rgb(230, 71, 88)',
            key: 'Student'
        },
        {
            title: '考生人数统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '评论次数',
            color: 'rgb(178, 159, 255)',
            key: 'Examinee'
        }
    ]
}
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
