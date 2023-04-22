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

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        DefineOptions(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
            // resolvers: [ElementPlusResolver(), IconsResolver({ prefix: 'Icon' })]
            resolvers: [IconsResolver({ prefix: 'Icon' })]
        }),
        Components({
            resolvers: [
                IconsResolver({ enabledCollections: ['ep'] }),
                ElementPlusResolver({ importStyle: 'sass' })
            ],
            // resolvers:[IconsResolver({enabledCollections: ['ep'] })],
            dts: path.resolve(pathSrc, 'components.d.ts')
        }),
        Icons({
            autoInstall: true
        })
    ],
    //配置服务器
    server: {
        port: 8081
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8080/anixuil',
        //         changeOrigin: true,
        //         rewrite: path => path.replace(/^\/api/, '')
        //     }
        // }
    },
    //配置别名路径
    resolve: {
        alias: {
            '@': pathSrc
        }
    }
    //配置css
    // css:{
    //     preprocessorOptions:{
    //         scss:{
    //             // additionalData:`@use "@/styles/element/index.scss" as *;`,
    //         }
    //     }
    // }
})
