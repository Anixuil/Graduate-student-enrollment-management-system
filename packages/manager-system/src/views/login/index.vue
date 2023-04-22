<template>
    <div class="login-page-box" ref="page">
        <div class="login-form-box" @keydown.enter="loginClick">
            <div class="input-item">
                <input type="text" v-model="userInfo.userName" name="user_name" required />
                <span class="input-name">用户名</span>
                <i></i>
            </div>
            <div class="input-item">
                <input
                    type="password"
                    v-model="userInfo.userPassword"
                    name="user_password"
                    required
                />
                <span class="input-name">密码</span>
                <i></i>
            </div>
            <div class="input-item btn" @click="loginClick">登录</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { login } from '@/api/user'
import { BgImageAuto } from '@/utils/utils'
import { ElNotification } from 'element-plus'
import { useUser } from '@/store/user'

let router = useRouter()
const user = useUser()

//登录
const userInfo = reactive({
    userName: '',
    userPassword: ''
})
const loginClick = async () => {
    try {
        let res: any = await login(userInfo)
        localStorage.setItem('token', res.data.token)
        user.initUserInfo()
        // console.log(res)
        ElNotification({
            title: '登录成功',
            message: `${user.userName}欢迎回来！`,
            type: 'success',
            position: 'bottom-right',
            duration: 5000
        })
        setTimeout(() => {
            if (user.userRole === 'admin') router.push('admin')
            else if (user.userRole === 'teacher') router.push('admin')
            else router.push('index')
        }, 1000)
    } catch (e: any) {
        console.log(e)
    }
}

const page = ref()
nextTick(() => {
    const img = new BgImageAuto('login-bg', '/bg1.jpg', page.value)
    window.onresize = () => {
        return () => {
            img.controlImage()
        }
    }
})
</script>

<style scoped lang="scss">
.login-page-box {
    width: 100%;
    background-color: white;
    height: calc(100vh - 96px);
    min-width: 1600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;

    .login-form-box {
        border: 1px solid rgb(64 73 113);
        box-sizing: border-box;
        padding: 40px 30px;
        border-radius: 10px;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        background-color: rgb(64 73 113 / 10%);

        .input-item {
            position: relative;

            .input-name {
                position: absolute;
                transition: all 0.3s ease;
                font-size: 20px;
                top: 0;
                left: 0;
                user-select: none;
                opacity: 0.4;
            }

            i {
                position: absolute;
                bottom: -1px;
                left: 0;
                background-color: lightgray;
                width: 100%;
                height: 1px;
                transition: all 0.3s ease;
            }

            input {
                width: 30vw;
                max-width: 300px;
                min-width: 200px;
                outline: none;
                border: none;
                box-sizing: border-box;
                padding: 5px;
                font-size: 20px;
                transition: border-color 0.3s ease;
                background-color: transparent;

                &:valid {
                    & ~ .input-name {
                        opacity: 1;
                        color: black;
                        transform: translateY(-100%) scale(0.9);
                    }

                    & ~ i {
                        background-color: black;
                    }
                }

                &:focus {
                    border-color: rgb(64 73 113);

                    & ~ .input-name {
                        opacity: 1;
                        color: rgb(64 73 113);
                        transform: translateY(-100%) scale(0.9);
                    }

                    & ~ i {
                        background-color: rgb(64 73 113);
                    }
                }
            }

            &:not(&:nth-last-of-type(1)) {
                margin-bottom: 40px;
            }

            &.btn {
                background-color: rgb(64 73 113);
                box-sizing: border-box;
                padding: 15px;
                border-radius: 20px;
                text-align: center;
                cursor: pointer;
                color: white;
                transition: all 0.3s ease;
                user-select: none;

                &:hover {
                    background-color: rgb(51 58 90);
                }

                &:active {
                    background-color: rgb(33 39 67);
                }
            }
        }
    }
}
</style>
