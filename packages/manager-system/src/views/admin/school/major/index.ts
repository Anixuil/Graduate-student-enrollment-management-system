const baseUrl = 'http://localhost:8080/anixuil'

export const majorTableOption = {
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
            prop: 'majorUuid',
            addDisplay: false,
            addDisabled: true,
            editDisabled: true,
            hide: true
        },
        {
            label: '专业名',
            prop: 'majorName',
            rules: {
                required: true,
                message: '请输入专业名',
                trigger: ['blur', 'change']
            }
        },
        {
            label: '所属院系',
            prop: 'departUuid',
            type: 'select',
            dicUrl: `${baseUrl}/dict/item?dictType=table&dictName=depart`,
            viewDisplay: false,
            props: {
                label: 'departName',
                value: 'departUuid'
            },
            hide: true,
            rules: {
                required: true,
                message: '请选择所属院系',
                trigger: ['blur', 'change']
            }
        },
        {
            label: '所属院系',
            prop: 'departName',
            addDisplay: false,
            editDisplay: false
        },
        {
            label: '介绍',
            prop: 'majorIntro'
        },
        {
            label: '专业人数',
            prop: 'studentCount',
            addDisplay: false,
            editDisabled: true,
            hide: true
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
