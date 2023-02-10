<template>
    <div class="students-box">
        <div class="students-form">
            <div class="students-form-item">
                <span class="students-form-label">姓名</span>
                <input type="text" />
            </div>
            <div class="students-form-item">
                <span class="students-form-label">姓名</span>
                <input type="text" />
            </div>
            <div class="students-form-item">
                <span class="students-form-label">姓名</span>
                <input type="text" />
            </div>
            <div class="students-form-item">
                <span class="students-form-label">姓名</span>
                <input type="text" />
            </div>
            <div class="students-form-item">
                <span class="students-form-label">姓名</span>
                <input type="text" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

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
