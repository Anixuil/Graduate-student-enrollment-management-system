import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/dist/vite'
import path from 'path'
//自动导入
import AutoImport from 'unplugin-auto-import/vite'
//自动导入组件
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//自动导入icon
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        DefineOptions(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: 'src/auto-import.d.ts',
            resolvers: [ElementPlusResolver(), IconsResolver({ prefix: 'Icon' })]
        }),
        Components({
            resolvers: [ElementPlusResolver(), IconsResolver({ enabledCollections: ['ep'] })],
            dts: 'src/components.d.ts'
        }),
        Icons({
            autoInstall: true
        })
    ],
    //配置服务器
    server: {
        port: 8081
    },
    //配置别名路径
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
})
