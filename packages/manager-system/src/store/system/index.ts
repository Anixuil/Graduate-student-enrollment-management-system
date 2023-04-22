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
        switchSystemMode(mode: boolean): boolean {
            this.systemMode = mode
            sessionStorage.setItem('systemMode', this.systemMode.toString())
            return this.systemMode
        },
        //初始化系统模式
        initSystemMode(): boolean {
            //从sessionStorage中获取系统模式 如果没有则默认 true 用户模式
            const systemMode = sessionStorage.getItem('systemMode') || 'true'
            this.systemMode = systemMode == 'true'
            return this.systemMode
        }
    }
})
