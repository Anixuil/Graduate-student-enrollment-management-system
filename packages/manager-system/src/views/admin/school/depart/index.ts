//用来定义一些长方法

export const departTableOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    height: 'calc(100vh - 300px)',
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 70,
            display: false
        },
        {
            label: '院名',
            prop: 'departName',
            rules: [
                {
                    required: true,
                    message: '请输入院名',
                    trigger: ['blur', 'change']
                }
            ]
        },
        {
            label: '介绍',
            prop: 'departIntro',
            overHidden: true
        },
        {
            label: '创建时间',
            prop: 'createDate',
            addDisplay: false,
            disabled: true
        },
        {
            label: '更新时间',
            prop: 'updateDate',
            addDisplay: false,
            disabled: true
        }
    ]
}
