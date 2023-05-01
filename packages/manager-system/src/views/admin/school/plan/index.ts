const baseUrl = 'http://localhost:8080/anixuil'
export const enroPlanTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 340px)',
    searchMenuSpan: 4,
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 70,
            display: false
        },
        {
            label: 'UUID',
            prop: 'enroPlanUuid',
            addDisplay: false,
            addDisabled: true,
            editDisabled: true,
            hide: true
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
            ],
            search: true
        },
        {
            label: '所属专业',
            prop: 'majorName',
            addDisplay: false,
            editDisplay: false
        },
        {
            label: '计划人数',
            prop: 'enroPlanNumber',
            rules: [
                {
                    required: true,
                    message: '请输入计划人数',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '实际人数',
            prop: 'enroRealNumber',
            disabled: true,
            addDisplay: false
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
