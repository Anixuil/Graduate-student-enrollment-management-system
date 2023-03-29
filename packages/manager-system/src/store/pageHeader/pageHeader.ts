import { defineStore } from 'pinia'

export const usePageHeader = defineStore('pageHeader', {
    state: () => ({
        pageHeaderStatus: false, //控制页头显示状态
        pageHeaderTitle: '', //页头当前标签
        pageHeaderArray: ['首页'], //页头标签数组
        pageHeaderPath: ['/'] //页头标签对应路由
    }),
    getters: {},
    actions: {
        changePageHeaderStatus(status: boolean): void {
            this.pageHeaderStatus = status
        },
        changePageHeaderTitle(title: string, path: string): void {
            //改变页头标题
            this.pageHeaderTitle = title

            //如果已有的话
            const index = this.pageHeaderArray.findIndex(item => item === title)
            if (index == -1) this.addPageHeaderArray(title, path)
        },
        addPageHeaderArray(title: string, path: string): void {
            this.pageHeaderArray.push(title)
            this.pageHeaderPath.push(path)
        },
        removePageHeaderArray(index: number): void {
            this.pageHeaderArray.splice(index, 1)
            this.pageHeaderPath.splice(index, 1)
        },
        switchPageMode(mode: boolean): boolean {
            if (mode) {
                this.pageHeaderArray = ['首页']
                this.pageHeaderPath = ['/']
            } else {
                this.pageHeaderArray = ['首页']
                this.pageHeaderPath = ['/admin']
            }
            return mode
        }
    }
})
