const baseUrl = 'http://localhost:8080/anixuil'
export const examTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 445px)',
    searchMenuPosition: 'center',
    addBtn: false,
    editBtn: false,
    delBtn: false,
    searchBtnText: '筛选',
    selection: true,
    filterBtn: true,
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 70,
            display: false
        },
        {
            label: '考号',
            prop: 'candidateId',
            addDisplay: false,
            addDisabled: true,
            editDisabled: true,
            hide: true
        },
        {
            label: '姓名',
            prop: 'userName',
            rules: [
                {
                    required: true,
                    message: '请输入姓名',
                    trigger: ['blur', 'change']
                }
            ],
            width: 100
        },
        {
            label: '性别',
            prop: 'userGender',
            type: 'select',
            dicUrl: `${baseUrl}/dict/item?dictType=aln&dictName=user_gender`,
            props: {
                label: 'dictFieldLabel',
                value: 'dictFieldValue'
            },
            width: 70,
            rules: [
                {
                    required: true,
                    message: '请选择性别',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '联系电话',
            prop: 'userPhone',
            rules: [
                {
                    required: true,
                    message: '请输入联系电话',
                    trigger: ['blur', 'change']
                }
            ],
            width: 120,
            hide: true
        },
        {
            label: '邮箱',
            prop: 'userEmail',
            rules: [
                {
                    required: true,
                    message: '请输入邮箱',
                    trigger: ['blur', 'change']
                }
            ],
            width: 120,
            hide: true
        },
        {
            label: '年龄',
            prop: 'userAge',
            width: 70,
            hide: true,
            rules: [
                {
                    required: true,
                    message: '请输入年龄',
                    trigger: ['blur', 'change']
                }
            ]
        },
        // {
        //     label: '密码',
        //     prop: 'userPassword',
        //     type: 'password',
        //     hide: true,
        //     rules: [
        //         {
        //             required: true,
        //             message: '请输入密码',
        //             trigger: ['blur', 'change']
        //         }
        //     ],
        //     viewDisplay: false,
        //     editDisplay: false
        // },
        {
            label: '报考专业',
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
                    message: '请选择报考专业',
                    trigger: ['blur', 'change']
                }
            ],
            search: true,
            viewDisplay: false,
            hide: true,
            span: 12,
            searchSpan: 6
        },
        {
            label: '报考专业',
            prop: 'majorName',
            span: 12,
            addDisplay: false,
            editDisplay: false
        },
        {
            label: '考试阶段',
            prop: 'candidateStatus',
            type: 'select',
            dicUrl: `${baseUrl}/dict/item?dictType=aln&dictName=exam_class_aln`,
            props: {
                label: 'dictFieldLabel',
                value: 'dictFieldValue'
            },
            rules: [
                {
                    required: true,
                    message: '请选择考试阶段',
                    trigger: ['blur', 'change']
                }
            ],
            span: 12,
            width: 100
        },
        {
            label: '考试地点',
            prop: 'examPlace',
            span: 12,
            overHidden: true
        },
        {
            label: '初试',
            prop: 'firstScore',
            type: 'number',
            dataType: 'number',
            span: 12,
            width: 70,
            addDisplay: false,
            editDisabled: true,
            defaultSort: 'ascending'
        },
        {
            label: '复试',
            prop: 'secondScore',
            type: 'number',
            dataType: 'number',
            span: 12,
            width: 70,
            addDisplay: false,
            placeholder: '请输入复试成绩',
            editDisabled: true
        },
        {
            label: '调剂',
            prop: 'thirdScore',
            type: 'number',
            dataType: 'number',
            span: 12,
            width: 70,
            addDisplay: false,
            placeholder: '请输入调剂成绩',
            editDisabled: true
        },
        {
            label: '创建时间',
            prop: 'createDate',
            addDisplay: false,
            editDisabled: true,
            overHidden: true
        },
        {
            label: '更新时间',
            prop: 'updateDate',
            addDisplay: false,
            editDisabled: true,
            overHidden: true
        },
        {
            label: '国家线',
            prop: 'countryLine',
            type: 'number',
            dataType: 'number',
            hide: true,
            search: true,
            display: false,
            min: 200,
            searchSpan: 6
        },
        {
            label: '录取人数',
            prop: 'admissionNumber',
            type: 'number',
            dataType: 'number',
            hide: true,
            search: true,
            display: false,
            min: 0,
            searchSpan: 6,
            filters: true
        }
    ]
}
