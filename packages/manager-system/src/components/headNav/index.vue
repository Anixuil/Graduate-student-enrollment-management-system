<template>
    <div class="header-nav-box">
        <div class="header-nav-container">
            <div class="header-nav-left">
                <img src="/swxy_xh.png" alt="" />
                <div>
                    <span>中南林业科技大学涉外学院 | 研究生招生管理系统</span><br />
                    <span
                        ><em
                            >Swan College,Central South University of Forestry and Technology</em
                        ></span
                    >
                </div>
            </div>
            <ul class="header-nav-right">
                <li @click="gotoSchool">学校官网</li>
                <li @click="gotoYZW">研究生招生网</li>
                <li @click="gotoPerson">
                    <span>个人中心</span>
                    <!--                    <img src="swxy_xh.png" alt="" />-->
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSystem } from '@/store/system'

const system = useSystem()
const router = useRouter()
const gotoPerson = () => {
    if (!system.systemMode) return router.push('/admin/person')
    router.push('/person')
}
const gotoYZW = () => {
    location.href = 'http://localhost:8082/'
}
const gotoSchool = () => {
    location.href = 'https://swxy.csuft.edu.cn/'
}
</script>

<style scoped lang="scss">
.header-nav-box {
    width: 100vw;
    border-bottom: 1px solid lightgray;
    box-sizing: border-box;
    padding: 10px 0;
    position: relative;
    background-color: white;
    box-shadow: 0 2px 10px lightgray;

    .header-nav-container {
        width: 100%;
        min-height: 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // max-width: 1600px;
        min-width: 1000px;
        margin: 0 auto;
        font-size: 14px;
        box-sizing: border-box;
        padding: 0 20px;

        .header-nav-left {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;

            div {
                margin: 0 10px;
                font-family: '仿宋', sans-serif;

                span:nth-of-type(1) {
                    font-size: 21px;
                    color: rgb(63 73 113);
                    font-weight: bold;
                }

                span:nth-of-type(2) {
                    font-size: 12px;
                    letter-spacing: 1.3px;
                }
            }

            img {
                width: 75px;
                height: 75px;
            }
        }

        .header-nav-right {
            min-width: 300px;
            display: flex;
            align-items: center;

            li {
                margin: 0 20px;
                cursor: pointer;
                color: gray;
                transition: color 0.3s ease;
                display: flex;
                align-items: center;

                &:hover {
                    color: rgb(63 73 113);
                    text-decoration: underline;
                }

                img {
                    width: 20px;
                    height: 20px;
                    margin-left: 5px;
                }
            }
        }
    }
}
</style>
