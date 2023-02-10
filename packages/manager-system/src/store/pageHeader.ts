import { defineStore } from 'pinia'

export const usePageHeader = defineStore('pageHeader', {
    state: () => ({
        pageHeaderStatus: false,
        pageHeaderTitle: ''
    }),
    getters: {},
    actions: {
        changePageHeaderStatus(status: boolean): void {
            this.pageHeaderStatus = status
        },
        changePageHeaderTitle(title: string): void {
            this.pageHeaderTitle = title
        }
    }
})
