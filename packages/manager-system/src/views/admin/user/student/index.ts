const baseUrl = 'http://localhost:8080/anixuil'

export const studentTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 445px)',
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 70,
            display: false
        },
        {
            label: 'ID',
            prop: 'studentId',
            addDisplay: false,
            addDisabled: true,
            editDisabled: true,
            hide: true,
            search: true
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
            width: 100,
            search: true
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
            search: true,
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
            search: true,
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
        {
            label: '密码',
            prop: 'userPassword',
            type: 'password',
            hide: true,
            rules: [
                {
                    required: true,
                    message: '请输入密码',
                    trigger: ['blur', 'change']
                }
            ],
            viewDisplay: false,
            editDisplay: false
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
            viewDisplay: false,
            hide: true,
            span: 12
        },
        {
            label: '所属专业',
            prop: 'majorName',
            span: 12,
            addDisplay: false,
            editDisplay: false
        },
        {
            label: '入学时间',
            prop: 'entryDate',
            type: 'datetime',
            dataType: 'date',
            rules: [
                {
                    required: true,
                    message: '请选择入学时间',
                    trigger: ['blur', 'change']
                }
            ],
            span: 12
        },
        {
            label: '毕业时间',
            prop: 'graduationDate',
            type: 'datetime',
            rules: [
                {
                    required: true,
                    message: '请选择毕业时间',
                    trigger: ['blur', 'change']
                }
            ],
            span: 12
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