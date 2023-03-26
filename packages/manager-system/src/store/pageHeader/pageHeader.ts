import { defineStore } from 'pinia'

export const usePageHeader = defineStore('pageHeader', {
    state: () => ({
        pageHeaderStatus: false, //控制页头显示状态
        pageHeaderTitle: '', //页头当前标题
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
            if (index != -1) {
                //如果存在得地方是当前pageheader所在得地方就不进行任何操作
                if (index !== this.pageHeaderArray.length - 1) {
                    //如果之前就出现过就删掉
                    this.removePageHeaderArray(index)
                }
            } else {
                //没有就添加
                this.addPageHeaderArray(title, path)
            }
        },
        addPageHeaderArray(title: string, path: string): void {
            this.pageHeaderArray.push(title)
            this.pageHeaderPath.push(path)
        },
        removePageHeaderArray(index: number): void {
            this.pageHeaderArray.splice(index + 1, this.pageHeaderArray.length - index)
            this.pageHeaderPath.splice(index + 1, this.pageHeaderPath.length - index)
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
