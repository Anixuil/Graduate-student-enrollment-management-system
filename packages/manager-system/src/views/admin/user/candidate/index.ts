const baseUrl = 'http://localhost:8080/anixuil'
export const candidateTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 445px)',
    searchMenuPosition: 'center',
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 70,
            display: false
        },
        {
            label: 'ID',
            prop: 'candidateId',
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
            width: 70,
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
            span: 12
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
            search: true,
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
            span: 12
        },
        {
            label: '初试',
            prop: 'firstScore',
            type: 'number',
            dataType: 'number',
            span: 12,
            width: 70,
            addDisplay: false,
            placeholder: '请输入初试成绩',
            editDisabled: !(
                JSON.parse(sessionStorage.getItem('userInfo') as string).userRole === 'admin'
            )
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
            editDisabled: !(
                JSON.parse(sessionStorage.getItem('userInfo') as string).userRole === 'admin'
            )
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
            editDisabled: !(
                JSON.parse(sessionStorage.getItem('userInfo') as string).userRole === 'admin'
            )
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
