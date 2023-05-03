const baseUrl = 'http://localhost:8080/anixuil'
export const indexWheelTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 340px)',
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 70,
            display: false
        },
        {
            label: 'UUID',
            prop: 'indexWheelUuid',
            addDisplay: false,
            addDisabled: true,
            editDisabled: true,
            hide: true
        },
        {
            label: '标题',
            prop: 'indexWheelTitle',
            rules: [
                {
                    required: true,
                    message: '请输入标题',
                    trigger: ['blur', 'change']
                }
            ],
            span: 12
        },
        {
            label: '内容',
            prop: 'indexWheelDesc',
            type: 'textarea',
            hide: true,
            span: 24
        },
        {
            label: '图片',
            prop: 'indexWheelImage',
            type: 'upload',
            listType: 'picture-img',
            span: 12,
            propsHttp: {
                url: 'data'
            },
            props: {
                label: 'name',
                value: 'url'
            },
            action: `${baseUrl}/file/upload`,
            accept: 'image/png, image/jpeg, image/gif, image/jpg',
            rules: [
                {
                    required: true,
                    message: '请上传图片',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '链接',
            prop: 'indexWheelHref',
            span: 24
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
