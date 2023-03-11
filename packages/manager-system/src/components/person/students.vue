<template>
    <div class="students-box">
        <div class="students-form">
            <div class="students-form-item" v-for="(item, index) in studentKeys" :key="index">
                <span class="students-form-label">{{ studentLabel[item] }}</span>
                <input type="text" v-model="student[item]" />
            </div>
            <!-- <div class="students-form-item">
                <span class="students-form-label">年龄</span>
                <input type="text" />
            </div>
            <div class="students-form-item">
                <span class="students-form-label">本科院校</span>
                <input type="text" />
            </div>
            <div class="students-form-item">
                <span class="students-form-label">报考专业</span>
                <input type="text" />
            </div>
            <div class="students-form-item">
                <span class="students-form-label">联系方式</span>
                <input type="text" />
            </div>
            <div class="students-form-item">
                <span class="students-form-label">电子邮箱</span>
                <input type="text" />
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { studentInterface, studentLabelInterface } from './ts/students'
//模拟用户数据
const student: studentInterface = reactive({
    userName: '刘昕',
    userAge: 22,
    userSchool: '中南林业科技大学涉外学院',
    majorName: '计算机科学与技术',
    userPhone: '17607381041',
    userEmail: '1140040227@qq.com'
})
//获取到students所有的key
const studentKeys: Ref<string[]> = ref(Object.keys(student))
//声明一个对象用来存放字段中文名
const studentLabel: studentLabelInterface = reactive({
    userName: '姓名',
    userAge: '年龄',
    userSchool: '本科院校',
    majorName: '报考专业',
    userPhone: '联系方式',
    userEmail: '电子邮箱'
})
</script>

<style scoped lang="scss">
.students-box {
    margin-top: 10px;
    background-color: white;
    box-sizing: border-box;
    padding: 20px 40px;

    .students-form {
        display: grid;
        grid-gap: 20px;
        grid-template-rows: repeat(0, 50px);

        .students-form-item {
            display: grid;
            grid-template-columns: 200px 300px;
            grid-gap: 20px;
            font-size: 14px;

            span {
                text-align: end;
                color: gray;
            }

            input {
                border: none;
                outline: none;
                transition: all 0.3s ease;

                &:focus {
                    border-bottom: 1px solid rgb(63 73 113);
                }
            }
        }
    }
}
</style>
