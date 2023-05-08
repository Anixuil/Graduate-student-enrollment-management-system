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
import { getDepartCount } from '@/api/data'
const router = useRouter()
const option = reactive({
    span: 4,
    data: [
        {
            count: 0,
            title: '',
            target: '_blank'
        }
    ]
})
const getDepartCountData = async () => {
    try {
        const res = await getDepartCount()
        option.data = []
        res.data.forEach((item: { departName: string; userCount: number }) => {
            option.data.push({
                count: item.userCount,
                title: item.departName,
                target: '_blank'
            })
        })
    } catch (e: any) {
        console.log(e)
    }
}
onMounted(() => {
    getDepartCountData()
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
