<template>
    <div class="ticket-wrapper">
        <tab>复试准考证</tab>
        <div class="control-wrapper">
            <el-button type="primary" :icon="Download" @click="downloadPDF" :loading="loading"
                >下载</el-button
            >
        </div>
        <div class="pdf-wrapper" ref="pdf" id="pdf">
            <table style="width: 750px">
                <caption style="font-size: 26px">
                    中南林业科技大学涉外学院研究生招生考试复试准考证
                </caption>
                <tr style="height: 41px">
                    <td>考生号</td>
                    <td>{{ userInfo.candidateId }}</td>
                    <td style="width: 90px">考生姓名</td>
                    <td>{{ userInfo.userName }}</td>
                    <td rowspan="5">
                        <el-image
                            style="width: 100px; height: 130px"
                            :src="userInfo.userHeadimg"
                            :zoom-rate="1.2"
                            :preview-src-list="previewImgList"
                            fit="cover"
                        />
                    </td>
                </tr>
                <tr style="height: 41px">
                    <td>考生性别</td>
                    <td>{{ userInfo.userGender }}</td>
                    <td>考生年龄</td>
                    <td>{{ userInfo.userAge }}</td>
                </tr>
                <tr style="height: 41px">
                    <td>考生邮箱</td>
                    <td>{{ userInfo.userEmail }}</td>
                    <td>考生专业</td>
                    <td>{{ userInfo.majorName }}</td>
                </tr>
                <tr style="height: 41px">
                    <td>考生电话</td>
                    <td>{{ userInfo.userPhone }}</td>
                    <td>考试类型</td>
                    <td>{{ typeArr[Number(userInfo.candidateStatus)] }}</td>
                </tr>
                <tr style="height: 41px">
                    <td>本科院校</td>
                    <td>{{ userInfo.undergraduateSchool }}</td>
                    <td>考试日期</td>
                    <td>{{ userInfo.examDate }}</td>
                </tr>
                <tr style="height: 41px">
                    <td>考试地址</td>
                    <td colspan="5">中南林业科技大学涉外学院{{ userInfo.examPlace }}</td>
                </tr>
                <tr style="height: 400px">
                    <td style="width: 90px">注意事项</td>
                    <td colspan="5" style="text-align: start">
                        <p style="text-indent: 2em">
                            一、考试前 15 分钟凭准考证和身份证进入考场，对号
                            入座，并将证件放在桌面左上角；考试期间不得交换座位。
                        </p>
                        <p style="text-indent: 2em">
                            二、只准带中性笔或墨水笔、2B铅笔、直尺、橡皮、铅
                            笔刀入座。与考试无关的物品，按规定存放在考场指定位置。
                            寻呼机、移动电话等通信设备，应切断电源；
                        </p>
                        <p style="text-indent: 2em">
                            三、开考30分钟内考生不得退场，开考30分钟后迟到 考生不得入场;
                        </p>
                        <p style="text-indent: 2em">
                            四、遵守考场规则。考试时不准旁窥、交谈、吸烟、传
                            递物品，严禁作弊.交卷后不得在考场附近逗留或谈论;
                        </p>
                        <p style="text-indent: 2em">
                            五、如遇试卷分发错误、印刷字迹模糊等问题可举手询
                            问。不得要求监考人员解释试题；
                        </p>
                        <p style="text-indent: 2em">
                            六、考试截止时间一到,立即停止答卷。不得将试卷、 答题卡和草稿纸带出考场；
                        </p>
                        <p style="text-indent: 2em">
                            七、服从考试工作人员管理、监督和检查,不得无理取 闹。违者取消考试资格
                        </p>
                    </td>
                </tr>
            </table>
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
const previewImgList: Ref<string[]> = ref([userInfo.userHeadimg as string])
const typeArr = ref(['初试', '复试'])

//下载pdf
const loading = ref(false)
const downloadPDF = () => {
    loading.value = true
    nextTick(() => {
        print({
            printable: 'pdf',
            type: 'html',
            targetStyles: ['*'],
            documentTitle: '中南林业科技大学硕士研究生招生考试准考证',
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
        height: 100%;
        background: white;
        z-index: 999;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;

        table {
            width: 100%;
            border-collapse: collapse;

            td {
                border: 1px solid #000;
                text-align: center;
            }
        }
    }
}
</style>
