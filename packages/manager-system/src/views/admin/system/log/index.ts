const baseUrl = 'http://localhost:8080/anixuil/'

export const logTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 440px)',
    addBtn: false,
    editBtn: false,
    delBtn: false,
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 70,
            display: false
        },
        {
            label: '日志ID',
            prop: 'logUuid',
            search: true,
            overHidden: true,
            hide: true
        },
        {
            label: '操作主体',
            prop: 'logTitle',
            search: true,
            width: 150
        },
        {
            label: '操作人',
            prop: 'userName',
            width: 100
        },
        {
            label: '操作人ID',
            search: true,
            prop: 'userUuid',
            hide: true
        },
        {
            label: '操作状态',
            prop: 'logStatus',
            search: true,
            width: 80,
            type: 'select',
            dicUrl: `${baseUrl}dict/item?dictType=aln&dictName=log_type`,
            props: {
                label: 'dictFieldLabel',
                value: 'dictFieldValue'
            }
        },
        {
            label: '操作内容',
            prop: 'logContent',
            type: 'textarea',
            minRow: 4,
            span: 24,
            search: true,
            overHidden: true
        },
        {
            label: '操作时间',
            prop: 'createDate'
        }
    ]
}
