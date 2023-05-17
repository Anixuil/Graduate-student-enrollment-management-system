<template>
    <div class="person-box">
        <div class="person-info-box">
            <div class="user-box">
                <div class="user-img-box">
                    <img src="vite.svg" alt="" />
                </div>
                <div class="user-info">
                    <span>张伞</span>
                    <span>考生</span>
                </div>
            </div>
            <div class="person-control">
                <span @click="logout">退出登录</span>
            </div>
        </div>

        <Students></Students>
    </div>
</template>

<script setup lang="ts">
import Students from '@/components/person/person.vue'
import { useUser } from '@/store/user'
import { usePageHeader } from '@/store/pageHeader/pageHeader'

const store = useUser()
const router = useRouter()
const pageHeader = usePageHeader()
const logout = () => {
    store.logout()
    pageHeader.changePageHeaderStatus(false)
    router.push('login')
}
</script>

<style scoped lang="scss">
.person-box {
    width: 100%;
    min-width: 1000px;
    max-width: 1600px;
    margin: 0 auto;

    .person-info-box {
        position: relative;
        background-color: white;
        box-sizing: border-box;
        padding: 10px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .user-box {
            // border: 1px solid red;
            display: flex;
            min-width: 300px;
            justify-content: space-between;
            align-items: center;

            .user-img-box {
                border: 1px solid lightgray;
                overflow: hidden;
                border-radius: 50%;
                width: 75px;
                height: 75px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .user-info {
                display: flex;
                flex-direction: column;
                flex: 1;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 0 20px;
                user-select: none;

                span {
                    line-height: 30px;

                    &:nth-of-type(2) {
                        font-size: 12px;
                        color: gray;
                    }
                }
            }
        }

        .person-control {
            span {
                font-size: 12px;
                line-height: 30px;
                color: gray;
                transition: all 0.3s ease;
                cursor: pointer;
                margin: 0 20px;

                &:hover {
                    color: rgb(63 73 113);
                }
            }
        }
    }
}
</style>
