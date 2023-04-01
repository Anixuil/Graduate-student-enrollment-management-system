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
const router = useRouter()

const timeArr = ref([
    {
        id: 1,
        title: '确认报名信息',
        intro: '点击进入相应操作页面',
        placement: 'top',
        timestamp: '2022/11/01',
        path: '/confirmInfo'
    },
    {
        id: 2,
        title: '网上确认',
        intro: '点击进入相应操作页面',
        placement: 'top',
        timestamp: '2022/11/11',
        path: '/confirmInter'
    },
    {
        id: 3,
        title: '下载准考证',
        intro: '点击进入相应操作页面',
        placement: 'top',
        timestamp: '2022/12/18',
        path: '/ticket'
    },
    {
        id: 4,
        title: '初试',
        intro: '点击进入相应操作页面',
        placement: 'top',
        timestamp: '2022/12/28',
        path: '#'
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
