//用来定义一些长方法

export const departTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 400px)',
    column: [
        { label: '序号', prop: 'index', width: 70, display: false },
        { label: '院名', prop: 'departName' },
        { label: '介绍', prop: 'departIntro' },
        { label: '创建时间', prop: 'createDate', addDisplay: false, disabled: true },
        { label: '更新时间', prop: 'updateDate', addDisplay: false, disabled: true }
    ]
}
