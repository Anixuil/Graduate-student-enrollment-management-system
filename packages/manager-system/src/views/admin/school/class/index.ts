const baseUrl = 'http://localhost:8080/anixuil'

export const classTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 400px)',
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 70,
            display: false
        },
        {
            label: 'UUID',
            prop: 'classUuid',
            addDisplay: false,
            addDisabled: true,
            editDisabled: true,
            hide: true
        },
        {
            label: '课程名',
            prop: 'className',
            rules: [
                {
                    required: true,
                    message: '请输入课程名',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '所属专业',
            prop: 'majorUuid',
            type: 'select',
            dicUrl: `${baseUrl}/dict/item?dictType=table&dictName=major`,
            viewDisplay: false,
            props: {
                label: 'majorName',
                value: 'majorUuid'
            },
            hide: true,
            rules: [
                {
                    required: true,
                    message: '请选择所属专业',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '所属专业',
            prop: 'majorName',
            addDisplay: false,
            editDisplay: false
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
        },
        {
            label: '课程介绍',
            prop: 'classIntro',
            type: 'textarea',
            span: 24,
            minRows: 3
        }
    ]
}
