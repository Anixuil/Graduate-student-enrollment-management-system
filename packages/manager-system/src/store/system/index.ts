import { defineStore } from 'pinia'

export const useSystem = defineStore('system', {
    state: () => ({
        //系统信息
        systemName: '研究生招生管理系统',
        //系统模式  true:用户模式  false:管理员模式
        systemMode: true
    }),
    getters: {
        //获取系统信息
        getSystemInfo(): object {
            return {
                systemName: this.systemName,
                systemMode: this.systemMode
            }
        }
    },
    actions: {
        //切换系统模式
        switchSystemMode(): boolean {
            this.systemMode = !this.systemMode
            sessionStorage.setItem('systemMode', this.systemMode.toString())
            return this.systemMode
        }
    }
})
