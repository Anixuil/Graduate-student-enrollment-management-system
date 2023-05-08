<template>
    <div
        class="editor-wrapper"
        :style="{ '--editor-height': isNaN(<number>height) ? height : height + 'px' }"
    >
        <Toolbar
            v-if="!disabled"
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="<string>mode"
        />
        <Editor
            class="editor"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            :mode="<string>mode"
            @onCreated="handleCreated"
            @onChange="handleChange"
        />
    </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, shallowRef, onMounted } from 'vue'
import { IEditorConfig, IDomEditor } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { defineOptions } from 'unplugin-vue-define-options/macros'
defineOptions({
    name: 'LxEditor'
})
const emits = defineEmits(['change', 'update:modelValue'])

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    height: {
        type: String,
        default: '300px'
    },
    mode: {
        type: String,
        default: 'default'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        default: ''
    }
})
//富文本编辑器配置属性
const editorConfig: Partial<IEditorConfig> = {
    MENU_CONF: {
        //修改上传图片菜单配置
        uploadImage: {
            server: 'http://localhost:8080/anixuil/file/uploadEditor',
            fieldName: 'file',
            headers: {
                token: localStorage.getItem('token')
            }
        },
        //修改上传视频菜单配置
        uploadVideo: {
            server: 'http://localhost:8080/anixuil/publicfile/editorVideoUpload',
            fieldName: 'file',
            headers: {
                token: localStorage.getItem('token')
            },
            maxFileSize: 100 * 1024 * 1024
        }
    },
    placeholder: '请输入内容...'
}
onMounted(() => {
    console.log(props.disabled)
})
watch(
    () => props.disabled,
    val => {
        if (val) {
            editorConfig.readOnly = true
        } else {
            editorConfig.readOnly = false
        }
    },
    { immediate: true }
)

const editorRef = shallowRef()
const valueHtml = ref(props.modelValue)
// onMounted(() => {
//     setTimeout(() => {
//         valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
//     }, 1500)
// })
const toolbarConfig = {}
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})
const handleCreated = (editor: any) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}
const handleChange = (editor: IDomEditor) => {
    // editor.children
    emits('update:modelValue', editor.getHtml())
    emits('change', editor.getHtml())
}

// const mode = 'default' // 或 'simple'
</script>

<style scoped lang="scss">
.editor-wrapper {
    width: 100%;
    box-sizing: border-box;
    z-index: 999;
    border: 1px solid #ccc;

    .editor {
        height: var(--editor-height) !important;
        overflow: auto;
    }
}
</style>
