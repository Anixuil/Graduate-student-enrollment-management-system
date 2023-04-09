export const majorTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 400px)',
    column: [
        { label: '序号', prop: 'index', width: 70, display: false },
        { label: 'UUID', prop: 'majorUuid', disabled: true, hide: true },
        { label: '专业名', prop: 'majorName' },
        { label: '所属院系', prop: 'departName', addDisplay: false, editDisplay: false },
        { label: '介绍', prop: 'majorIntro' },
        { label: '专业人数', prop: 'studentCount', disabled: false, hide: true },
        { label: '创建时间', prop: 'createDate', addDisplay: false, disabled: true },
        { label: '更新时间', prop: 'updateDate', addDisplay: false, disabled: true }
    ]
}
