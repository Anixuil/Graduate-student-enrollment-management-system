<template>
    <div class="school-wrapper">
        <Transition name="slide-fade">
            <avue-data-display
                :option="option"
                v-if="!router.currentRoute.value.path.includes('/exam')"
            ></avue-data-display>
        </Transition>
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
const router = useRouter()
const option = reactive({
    span: 4,
    data: [
        {
            count: '23032',
            title: '学校总人数',
            target: '_blank'
        },
        {
            count: '9349',
            title: '信息与工程学院',
            target: '_blank'
        },
        {
            count: '7532',
            title: '经济管理学院',
            target: '_blank'
        },
        {
            count: '5999',
            title: '文学与传媒学院',
            target: '_blank'
        },
        {
            count: '0',
            title: '国际学院',
            target: '_blank'
        },
        {
            count: '151',
            title: '教职工',
            target: '_blank'
        }
    ]
})
</script>

<style scoped lang="scss">
:deep(.avue-data-display .count) {
    color: rgb(250 131 51);
}

:deep(.avue-data-display .title) {
    color: rgb(83 111 114);
}
</style>
