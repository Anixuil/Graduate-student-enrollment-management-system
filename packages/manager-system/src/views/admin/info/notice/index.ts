const baseUrl = 'http://localhost:8080/anixuil'
import { useUser } from '@/store/user'
const store: any = useUser()
export const noticeInfoTableOption = {
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
            prop: 'noticeInfoUuid',
            addDisplay: false,
            addDisabled: true,
            editDisabled: true,
            hide: true
        },
        {
            label: '标题',
            prop: 'noticeInfoTitle',
            rules: [
                {
                    required: true,
                    message: '请输入标题',
                    trigger: ['blur', 'change']
                }
            ],
            span: 12,
            overHidden: true,
            search: true
        },
        {
            label: '副标题',
            prop: 'noticeInfoIntro',
            rules: [
                {
                    required: true,
                    message: '请输入副标题',
                    trigger: ['blur', 'change']
                }
            ],
            span: 12,
            overHidden: true,
            search: true
        },
        {
            label: '类别',
            prop: 'noticeInfoType',
            type: 'select',
            width: 100,
            dicUrl: `${baseUrl}/dict/item?dictType=aln&dictName=notice_type`,
            props: {
                label: 'dictFieldLabel',
                value: 'dictFieldValue'
            },
            viewDisplay: false,
            rules: [
                {
                    required: true,
                    message: '请选择类别',
                    trigger: ['blur', 'change']
                }
            ],
            span: 12,
            search: true
        },
        {
            label: '内容',
            prop: 'noticeInfoContent',
            viewDisabled: true,
            span: 24,
            rules: [
                {
                    required: true,
                    message: '请输入内容',
                    trigger: ['blur', 'change']
                }
            ],
            overHidden: true
        },
        {
            label: '附件',
            prop: 'attachmentList',
            type: 'upload',
            span: 24,
            // dragFile: true,
            dataType: 'object',
            hide: true,
            props: {
                label: 'attachmentName',
                value: 'attachmentHref'
            },
            showFileList: true,
            propsHttp: {
                res: 'data',
                url: 'url',
                name: 'name'
            },
            action: `${baseUrl}/file/upload`,
            editDisabled: true,
            viewDisabled: true,
            multiple: true
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
