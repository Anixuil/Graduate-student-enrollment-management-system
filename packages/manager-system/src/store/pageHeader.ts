import { defineStore } from 'pinia'

export const usePageHeader = defineStore('pageHeader', {
    state: () => ({
        pageHeaderStatus: false
    }),
    getters: {},
    actions: {
        changePageHeaderStatus(status: boolean): void {
            this.pageHeaderStatus = status
        }
    }
})
