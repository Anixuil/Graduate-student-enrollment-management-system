<template>
    <div class="exam-wrapper">
        <el-tabs v-model="activeName">
            <el-tab-pane label="考前准备" name="first">
                <Transition>
                    <prepareExam v-show="activeName == 'first'" />
                </Transition>
            </el-tab-pane>
            <el-tab-pane label="初试" name="second">
                <Transition>
                    <first-exam v-show="activeName == 'second'" />
                </Transition>
            </el-tab-pane>
            <el-tab-pane label="复试" name="third">
                <Transition>
                    <prepareExam v-show="activeName == 'third'" />
                </Transition>
            </el-tab-pane>
            <el-tab-pane label="调剂" name="four">
                <Transition>
                    <prepareExam v-show="activeName == 'four'" />
                </Transition>
            </el-tab-pane>
            <el-tab-pane label="录取" name="five">
                <Transition>
                    <prepareExam v-show="activeName == 'five'" />
                </Transition>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import PrepareExam from '@/components/admin/exam/prepareExam.vue'
import FirstExam from '@/components/admin/exam/firstExam.vue'
const activeName: Ref<string> = ref('first')
</script>

<style scoped lang="scss">
.exam-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.4s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(5%);
}
</style>
