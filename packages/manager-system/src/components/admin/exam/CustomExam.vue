<template>
    <div class="frist-exam">
        <template v-for="item in workFlowList" :key="item.workFlowUuid">
            <tab :tabHeight="10">{{ item.workFlowTitle }}</tab>
            <div class="enter-wrapper">
                <el-tooltip content="如需调整请前往操作管理中的流程管理" placement="top">
                    <el-form-item label="模块开启状态">
                        <el-switch v-model="item.workFlowStatus" :disabled="true" />
                    </el-form-item>
                </el-tooltip>
                <el-tooltip
                    :content="`这个按钮将会给每一个${
                        typeArr[item.workFlowType]
                    }状态的考生发送一封电子邮件`"
                    placement="top"
                >
                    <el-form-item>
                        <el-button
                            type="primary"
                            @click="emailDrawerOpen(`${item.workFlowTitle}邮件通知配置`)"
                            :disabled="
                                !item.workFlowStatus || store.getUserInfo.userRole !== 'admin'
                            "
                            >邮件提醒通知</el-button
                        >
                    </el-form-item>
                </el-tooltip>
            </div>
        </template>
        <!--        插槽 用来放置自定义的内容-->
        <slot name="custom"></slot>
        <el-drawer v-model="emailDrawerVisible" :title="emailDrawerTitle" size="80%">
            <email-form />
        </el-drawer>
    </div>
</template>
<script setup lang="ts">
import EmailForm from '@/components/common/Email/index.vue'
import { PropType } from 'vue'
import { useUser } from '@/store/user'
const store: any = useUser()
//接收prop
defineProps({
    workFlowList: {
        type: Array as PropType<any[]>,
        default: () => []
    }
})

const typeArr = ref(['初试', '复试', '调剂', '录取', '未录取'])

//发送邮箱通知抽屉
const emailDrawerTitle = ref('')
const emailDrawerVisible = ref(false)
const emailDrawerOpen = (title: string) => {
    emailDrawerTitle.value = title
    emailDrawerVisible.value = true
}
</script>

<style scoped lang="scss">
.frist-exam {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px 0 50px;

    .enter-wrapper,
    .internet-wrapper,
    .downLoad-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
    }
}
</style>
