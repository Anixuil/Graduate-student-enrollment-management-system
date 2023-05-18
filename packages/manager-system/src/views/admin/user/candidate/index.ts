const baseUrl = 'http://localhost:8080/anixuil'
import { useUser } from '@/store/user'
const store: any = useUser()
export const candidateTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 445px)',
    searchMenuPosition: 'center',
    addBtn: store.getUserInfo.userRole === 'admin',
    editBtn: store.getUserInfo.userRole === 'admin',
    delBtn: store.getUserInfo.userRole === 'admin',
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
            label: '照片',
            prop: 'userHeadimg',
            type: 'upload',
            listType: 'picture-img',
            imgWidth: 50,
            imgFullscreen: true,
            action: `${baseUrl}/file/upload`,
            tip: '只能上传jpg/png文件，且不超过500kb',
            propsHttp: {
                res: 'data',
                url: 'url'
            },
            loadText: '正在上传...',
            span: 24,
            rules: [
                {
                    required: true,
                    message: '请上传照片',
                    trigger: ['blur', 'change']
                }
            ],
            accept: 'image/jpeg,image/png',
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
            label: '地址',
            prop: 'userAddress',
            hide: true,
            rules: [
                {
                    required: true,
                    message: '请输入地址',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '本科院校',
            prop: 'undergraduateSchool',
            hide: true,
            rules: [
                {
                    required: true,
                    message: '请输入本科院校',
                    trigger: ['blur', 'change']
                }
            ],
            overHidden: true
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
            span: 12,
            overHidden: true
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
            span: 12,
            hide: true
        },
        {
            label: '考试日期',
            prop: 'examDate',
            span: 12,
            type: 'datetime',
            format: 'YYYY-MM-DD',
            valueFormat: 'YYYY-MM-DD',
            width: 100
        },
        {
            label: '初试',
            prop: 'firstScore',
            type: 'number',
            dataType: 'number',
            span: 12,
            width: 70,
            addDisplay: false,
            editDisabled: true
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
        }
    ]
}
