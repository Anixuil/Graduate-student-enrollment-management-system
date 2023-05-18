const baseUrl = 'http://localhost:8080/anixuil'
import { useUser } from '@/store/user'
const store: any = useUser()
export const workFlowTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 400px)',
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
            label: 'UUID',
            prop: 'workFlowUuid',
            addDisplay: false,
            addDisabled: true,
            editDisabled: true,
            hide: true
        },
        {
            label: '流程名',
            prop: 'workFlowTitle',
            rules: [
                {
                    required: true,
                    message: '请输入流程名',
                    trigger: ['blur', 'change']
                }
            ],
            search: true,
            overHidden: true,
            width: 200
        },
        {
            label: '步骤序号',
            prop: 'workFlowIndex',
            type: 'number',
            minRows: 0,
            rules: [
                {
                    required: true,
                    message: '请输入步骤序号',
                    trigger: ['blur', 'change']
                }
            ],
            width: 100
        },
        {
            label: '流程描述',
            prop: 'workFlowDesc',
            type: 'textarea',
            rules: [
                {
                    required: true,
                    message: '请输入流程描述',
                    trigger: ['blur', 'change']
                }
            ],
            overHidden: true,
            span: 24,
            minRows: 3,
            search: true
        },
        {
            label: '流程类型',
            prop: 'workFlowType',
            type: 'select',
            dicUrl: `${baseUrl}/dict/item?dictType=aln&dictName=candidate_status`,
            props: {
                label: 'dictFieldLabel',
                value: 'dictFieldValue'
            },
            rules: [
                {
                    required: true,
                    message: '请选择流程类型',
                    trigger: ['blur', 'change']
                }
            ],
            search: true,
            width: 100
        },
        {
            label: '是否启用',
            prop: 'workFlowStatus',
            type: 'switch',
            value: false,
            slot: true,
            width: 100
        },
        {
            label: '流程时间',
            prop: 'workFlowDate',
            type: 'datetime',
            format: 'YYYY-MM-DD',
            valueFormat: 'YYYY-MM-DD',
            span: 12,
            rules: [
                {
                    required: true,
                    message: '请选择流程时间',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '流程路径',
            prop: 'workFlowPath',
            type: 'input',
            hide: true
        },
        {
            label: '创建时间',
            prop: 'createDate',
            addDisplay: false,
            editDisabled: true,
            width: 160,
            overHidden: true
        },
        {
            label: '更新时间',
            prop: 'updateDate',
            addDisplay: false,
            editDisabled: true,
            width: 160,
            overHidden: true
        }
    ]
}
