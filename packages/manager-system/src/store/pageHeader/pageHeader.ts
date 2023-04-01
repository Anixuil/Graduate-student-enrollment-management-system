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
        //改变页头显示状态
        changePageHeaderStatus(status: boolean): void {
            this.pageHeaderStatus = status
        },
        //改变页头标题
        changePageHeaderTitle(title: string, path: string): void {
            //改变页头标题
            this.pageHeaderTitle = title

            //如果已有的话
            const index = this.pageHeaderArray.findIndex(item => item === title)
            if (index == -1) this.addPageHeaderArray(title, path)
        },
        //添加页头标签
        addPageHeaderArray(title: string, path: string): void {
            this.pageHeaderArray.push(title)
            this.pageHeaderPath.push(path)
        },
        //删除页头标签
        removePageHeaderArray(index: number): void {
            this.pageHeaderArray.splice(index, 1)
            this.pageHeaderPath.splice(index, 1)
        },
        //切换页头模式
        switchPageMode(mode: boolean): boolean {
            if (mode) {
                this.pageHeaderArray = ['首页']
                this.pageHeaderPath = ['/']
            } else {
                this.pageHeaderArray = ['首页']
                this.pageHeaderPath = ['/admin']
            }
            return mode
        },
        //清空页头标签
        clearPageHeaderArray(router: any): void {
            this.pageHeaderArray = ['首页']
            if (sessionStorage.getItem('systemMode') == 'true') {
                router.push('/')
                this.pageHeaderPath = ['/']
            } else {
                router.push('/admin')
                this.pageHeaderPath = ['/admin']
            }
        },
        //删除当前title为参数的标签
        removePageHeaderArrayByTitle(title: string, router: any): void {
            if (title == '首页') return
            const index = this.pageHeaderArray.findIndex(item => item === title)
            if (index != -1) {
                this.removePageHeaderArray(index)
                router.push(this.pageHeaderPath[index - 1])
            }
        },
        //删除除当前title之外的标签
        removePageHeaderArrayExceptTitle(title: string): void {
            if (title == '首页') return
            const index = this.pageHeaderArray.findIndex(item => item === title)
            if (index != -1) {
                if (sessionStorage.getItem('systemMode') == 'true') {
                    this.pageHeaderArray = ['首页', this.pageHeaderArray[index]]
                    this.pageHeaderPath = ['/', this.pageHeaderPath[index]]
                } else {
                    this.pageHeaderArray = ['首页', this.pageHeaderArray[index]]
                    this.pageHeaderPath = ['/admin', this.pageHeaderPath[index]]
                }
            }
        }
    }
})
