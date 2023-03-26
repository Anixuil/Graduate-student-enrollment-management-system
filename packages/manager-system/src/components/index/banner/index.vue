<template>
    <div class="banner-box">
        <div class="banner-title">致全体考生的一封信</div>
        <div class="banner-container">
            <span
                >距 <strong>2023</strong> 年研究生考试还有
                <strong style="color: red">30</strong> 天</span
            >
            <p class="text">
                相信能看到这封信的同学，都是坚定不移的选择了本校到了最后，先在这里祝各位考生考试顺利！！！
            </p>
            <p class="text">
                为营造公平、公正的考试环境和良好的考试氛围，确保考试顺利进行，特提醒广大考生：
            </p>
            <p class="text" style="text-indent: 4em">一、提前做好考试准备。</p>
            <p class="text" style="text-indent: 4em">二、做好防疫措施。</p>
            <p class="text" style="text-indent: 4em">
                三、按照本校研招流程，一步一步仔细走完，不要有遗漏。
            </p>
            <p class="text" style="text-indent: 4em">
                五、遵守考场、国家考试规范，严禁考试舞弊，一经发现从严处理。
            </p>
            <p class="text" style="text-indent: 4em">
                六、本校流程为 <span style="color: red">确认报名信息</span> 、
                <span style="color: red">网上确认</span> 、
                <span style="color: red">下载准考证</span> 、
                <span style="color: red">初试</span> 、
                <span style="color: red">公布初试成绩</span> 、
                <span style="color: red">公布拟面试考生名单(需考生登录本系统进行面试确认)</span> 、
                <span style="color: red">公布面试考生名单</span> 、
                <span style="color: red">面试</span> 、
                <span style="color: red">公布面试结果</span> 、
                <span style="color: red">公布拟录取名单(需考生登录本系统进行确认)</span> 、
                <span style="color: red">公布录取名单</span>。
            </p>
            <p class="text" style="text-indent: 4em">
                七、本校所有通知将通过本系统考生所填写邮箱信息进行通知，请及时关注本校信息，本校研究生招生网同步更新研招信息。
            </p>
            <p class="text-footer">
                <span>中南林业科技大学涉外学院研究生招生办</span>
                <span>2022 年 10 月 29 日</span>
            </p>
        </div>
        <slot> </slot>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.banner-box {
    height: calc(100vh - 96px - 64px);
    min-height: 800px;
    position: relative;

    .banner-title {
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 5px;
        text-align: center;
        width: 100%;
        line-height: 100px;
        color: rgb(63 73 113);
    }

    .banner-container {
        overflow: hidden;

        & > span {
            font-size: 16px;
            display: inline-block;
            margin-bottom: 50px;

            strong {
                font-size: 18px;
            }
        }

        .text {
            text-indent: 2em;
            font-size: 16px;
            line-height: 30px;
            margin-bottom: 20px;
        }

        .text-footer {
            float: right;
            text-align: end;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;

            span {
                line-height: 50px;
                font-size: 18px;
                letter-spacing: 1px;
            }
        }
    }
}
</style>
