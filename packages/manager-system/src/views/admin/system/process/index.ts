const baseUrl = 'http://localhost:8080/anixuil'

export const workFlowTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 370px)',
    searchMenuSpan: 6,
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 70,
            display: false
        },
        {
            label: 'UUID',
            prop: 'workFlowUuid',
            addDisplay: false,
            addDisabled: true,
            editDisabled: true,
            hide: true,
            search: true
        },
        {
            label: '流程名',
            prop: 'workFlowTitle',
            rules: [
                {
                    required: true,
                    message: '请输入流程名',
                    trigger: ['blur', 'change']
                }
            ],
            search: true
        },
        {
            label: '步骤序号',
            prop: 'workFlowIndex',
            type: 'number',
            minRows: 0,
            rules: [
                {
                    required: true,
                    message: '请输入步骤序号',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '流程描述',
            prop: 'workFlowDesc',
            type: 'textarea',
            rules: [
                {
                    required: true,
                    message: '请输入流程描述',
                    trigger: ['blur', 'change']
                }
            ],
            span: 24,
            minRows: 3,
            search: true
        },
        {
            label: '是否启用',
            prop: 'workFlowStatus',
            type: 'switch',
            slot: true,
            rules: [
                {
                    required: true,
                    message: '请选择是否启用',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '流程图片',
            prop: 'workFlowImage',
            type: 'upload',
            listType: 'picture-img',
            hide: true,
            span: 24,
            propsHttp: {
                res: 'data',
                url: 'url'
            },
            props: {
                label: 'name',
                value: 'url'
            },
            action: `${baseUrl}/file/upload`,
            tip: '只能上传jpg/png文件，且不超过500kb',
            accept: 'image/jpeg,image/png'
        },
        {
            label: '创建时间',
            prop: 'createDate',
            addDisplay: false,
            editDisabled: true
        },
        {
            label: '更新时间',
            prop: 'updateDate',
            addDisplay: false,
            editDisabled: true
        }
    ]
}
