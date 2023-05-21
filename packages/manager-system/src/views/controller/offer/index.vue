<template>
    <div class="ticket-wrapper">
        <tab style="display: flex; justify-content: space-between">
            <span>录取通知书</span>
        </tab>
        <div class="pdf-wrapper" ref="pdf" id="pdf" v-if="userInfo.candidateStatus == 3">
            <img src="/录取通知书封面.png" alt="" />
            <img src="/录取通知书内页.png" alt="" />
            <span class="name">{{ userInfo.userName }}</span>
            <span class="major">{{ userInfo.majorName }}</span>
            <span class="level">{{
                new Date().getFullYear().toString().split('').slice(2, 4).join('')
            }}</span>
            <span class="uuid">{{ new Date().getTime() }}</span>
            <span class="id">{{ userInfo.candidateId }}</span>
            <span class="year">{{ new Date().getFullYear() }}</span>
        </div>
        <div v-else class="pdf-wrapper">
            <el-empty description="您暂无资格查看通知书"></el-empty>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Download } from '@element-plus/icons-vue'
import { useUser } from '@/store/user'
import { Ref } from 'vue'
import print from 'print-js'

const user = useUser()
const pdf: any = ref(null)
const userInfo: any = reactive({ ...user.getUserInfo, ...user.getCandidateInfo })

//下载pdf
const loading = ref(false)
const downloadPDF = () => {
    loading.value = true
    nextTick(() => {
        print({
            printable: 'pdf',
            type: 'html',
            targetStyles: ['*'],
            documentTitle: '录取通知书',
            onLoadingStart: () => {
                loading.value = true
            },
            onLoadingEnd: () => {
                loading.value = false
            }
        })
    })
}
</script>

<style scoped lang="scss">
.ticket-wrapper {
    width: 100%;
    max-width: 1600px;
    min-width: 1000px;
    margin: 0 auto;

    .control-wrapper {
        background: white;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        justify-content: flex-end;
    }

    .pdf-wrapper {
        width: 100%;
        max-width: 1600px;
        height: 100%;
        margin: 0 auto;
        background: white;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        position: relative;

        .name {
            position: absolute;
            top: 72%;
            left: 50%;
            font-size: 30px;
            color: rgb(61 73 112);
        }

        .major {
            position: absolute;
            top: 78.5%;
            left: 37%;
            font-size: 16px;
            color: rgb(61 73 112);
            font-weight: 600;
        }

        .level {
            position: absolute;
            top: 78.5%;
            left: 50%;
            font-size: 18px;
            color: rgb(61 73 112);
            font-weight: 600;
        }

        .uuid {
            position: absolute;
            top: 84.5%;
            left: 43%;
            font-size: 12px;
            color: rgb(61 73 112);
            font-weight: 600;
        }

        .id {
            position: absolute;
            top: 84.5%;
            left: 55%;
            font-size: 12px;
            color: rgb(61 73 112);
            font-weight: 600;
        }

        .year {
            position: absolute;
            top: 89.2%;
            left: 53%;
            font-size: 20px;
            color: rgb(61 73 112);
            font-weight: bold;
        }
    }
}
</style>
