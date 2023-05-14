<template>
    <div class="container-box">
        <div class="container-title">
            <span>研招进展</span>
        </div>
        <el-timeline>
            <el-timeline-item
                v-for="item in timeArr"
                :timestamp="item.timestamp"
                :placement="item.placement"
                :key="item.id"
                @click="handleClick(item.path)"
            >
                <el-card>
                    <div class="card-item">
                        <div class="time-left">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.intro }}</p>
                        </div>
                    </div>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script setup lang="ts">
import { getWorkFlowList } from '@/api/workflow'
const router = useRouter()

//获取流程
onMounted(() => {
    getWorkFlow()
})
const getWorkFlow = async () => {
    const res = await getWorkFlowList({ pageNum: 1, pageSize: 100, workFlowStatus: true })
    if (res.code === 200) {
        timeArr.value = res.data.records.map((item: any) => {
            return {
                id: item.workFlowUuid,
                title: item.workFlowTitle,
                intro: item.workFlowDesc,
                placement: 'top',
                timestamp: item.updateDate,
                path: item.workFlowPath
            }
        })
    }
}

const timeArr = ref([
    {
        id: null,
        title: '',
        intro: '',
        placement: 'top',
        timestamp: '',
        path: ''
    }
])

const handleClick = (path: string) => {
    if (path === '#') {
        return
    }
    router.push(path)
}
</script>

<style scoped lang="scss">
.container-box {
    margin-top: 50px;
    min-height: calc(100vh - 132px - 36px);

    .container-title {
        width: 100%;
        text-align: center;
        background-color: rgb(63 73 113);
        border-radius: 5px;
        margin-bottom: 50px;
        user-select: none;

        span {
            font-size: 26px;
            font-weight: bold;
            color: white;
            letter-spacing: 10px;
            line-height: 50px;
        }
    }

    .el-card {
        cursor: pointer;
        user-select: none;
        transition: all 0.3s ease;

        .card-item {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .time-left {
                transition: all 0.3s ease;

                h3 {
                    font-size: 20px;
                    line-height: 50px;
                }

                p {
                    color: gray;
                }
            }
        }

        &:hover {
            border: 1px solid rgb(63 73 113);
        }

        box-shadow: inset 0 0 0 rgb(63 73 113);

        &:active {
            box-shadow: inset 0 0 2px rgb(63 73 113);

            & .time-left {
                transform: scale(0.95);
            }
        }
    }
}
</style>
