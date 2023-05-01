const baseUrl = 'http://localhost:8080/anixuil'

export const examClassTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 420px)',
    searchMenuSpan: 4,
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 70,
            display: false
        },
        {
            label: '科目名字',
            prop: 'examClassName',
            rules: [
                {
                    required: true,
                    message: '请输入科目名字',
                    trigger: ['blur', 'change']
                }
            ],
            search: true
        },
        {
            label: '所属专业',
            prop: 'majorUuid',
            type: 'select',
            dicUrl: `${baseUrl}/dict/item?dictType=table&dictName=major`,
            props: {
                label: 'majorName',
                value: 'majorUuid'
            },
            rules: [
                {
                    required: true,
                    message: '请选择所属专业',
                    trigger: ['blur', 'change']
                }
            ],
            search: true,
            hide: true
        },
        {
            label: '所属专业',
            prop: 'majorName',
            addDisplay: false,
            editDisplay: false
        },
        {
            label: '考试类型',
            prop: 'examType',
            type: 'select',
            dicUrl: `${baseUrl}/dict/item?dictType=aln&dictName=exam_class_aln`,
            props: {
                label: 'dictFieldLabel',
                value: 'dictFieldValue'
            },
            rules: [
                {
                    required: true,
                    message: '请选择考试类型',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '科目描述',
            prop: 'examClassDesc',
            type: 'textarea',
            span: 24,
            minRows: 3,
            rules: [
                {
                    required: true,
                    message: '请输入科目描述',
                    trigger: ['blur', 'change']
                }
            ]
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
