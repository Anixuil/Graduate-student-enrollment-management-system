import { useUser } from '@/store/user'
const store: any = useUser()
const baseUrl = 'http://localhost:8080/anixuil'

export const secondEnterOption = {
    submitBtn: store.getCandidateInfo.informationStatus === '10',
    emptyBtn: false,
    column: [
        {
            label: '考生uuid',
            prop: 'candidateUuid',
            type: 'input',
            disabled: true,
            display: false
        },
        {
            label: '考生号',
            prop: 'candidateId',
            type: 'input',
            disabled: true
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
            display: !(store.getCandidateInfo.informationStatus === '11'),
            disabled: !(store.getCandidateInfo.informationStatus === '10')
        },
        {
            label: '姓名',
            prop: 'userName',
            type: 'input',
            disabled: !(store.getCandidateInfo.informationStatus === '10'),
            rules: [
                {
                    required: true,
                    message: '请输入姓名',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '性别',
            prop: 'userGender',
            type: 'select',
            dicUrl: `${baseUrl}/dict/item?dictType=aln&dictName=user_gender`,
            default: '男',
            props: {
                label: 'dictFieldLabel',
                value: 'dictFieldValue'
            },
            disabled: !(store.getCandidateInfo.informationStatus === '10'),
            rules: [
                {
                    required: true,
                    message: '请输入性别',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '考试地点',
            prop: 'examPlace',
            type: 'input',
            disabled: true,
            display: false
        },
        {
            label: '年龄',
            prop: 'userAge',
            type: 'number',
            min: 18,
            disabled: !(store.getCandidateInfo.informationStatus === '10'),
            rules: [
                {
                    required: true,
                    message: '请输入年龄',
                    trigger: ['blur', 'change']
                }
            ]
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
            ],
            type: 'input',
            disabled: !(store.getCandidateInfo.informationStatus === '10'),
            span: 24
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
            span: 12,
            disabled: !(store.getCandidateInfo.informationStatus === '10')
        },
        {
            label: '联系方式',
            prop: 'userPhone',
            type: 'input',
            disabled: !(store.getCandidateInfo.informationStatus === '10'),
            rules: [
                {
                    required: true,
                    message: '请输入联系方式',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '电子邮箱',
            prop: 'userEmail',
            type: 'input',
            disabled: !(store.getCandidateInfo.informationStatus === '10'),
            rules: [
                {
                    required: true,
                    message: '请输入电子邮箱',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '身份',
            prop: 'userRole',
            type: 'select',
            dicUrl: `${baseUrl}/dict/item?dictType=aln&dictName=user_role`,
            props: {
                label: 'dictFieldLabel',
                value: 'dictFieldValue'
            },
            disabled: true
        },
        {
            label: '本科院校',
            prop: 'undergraduateSchool',
            type: 'input',
            disabled: !(store.getCandidateInfo.informationStatus === '10'),
            rules: [
                {
                    required: true,
                    message: '请输入本科院校',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '考生状态',
            prop: 'candidateStatus',
            type: 'select',
            dicUrl: `${baseUrl}/dict/item?dictType=aln&dictName=candidate_status`,
            props: {
                label: 'dictFieldLabel',
                value: 'dictFieldValue'
            },
            disabled: true
        }
    ]
}
