export const chooseOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: false,
    addBtn: false,
    editBtn: false,
    delBtn: false,
    height: 'calc(100vh - 400px)',
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 120,
            display: false
        },
        {
            label: '姓名',
            prop: 'userName',
            width: 100,
            overHidden: true
        },
        {
            label: '性别',
            prop: 'userGender',
            width: 70,
            overHidden: true
        },
        {
            label: '年龄',
            prop: 'userAge',
            width: 70,
            overHidden: true
        },
        {
            label: '电话',
            prop: 'userPhone',
            width: 120,
            overHidden: true
        },
        {
            label: '邮箱',
            prop: 'userEmail',
            width: 200,
            overHidden: true
        },
        {
            label: '本科院校',
            prop: 'undergraduateSchool',
            overHidden: true
        },
        {
            label: '所属院系',
            prop: 'departName',
            overHidden: true
        },
        {
            label: '教授课程',
            prop: 'className',
            overHidden: true
        },
        {
            label: '审批状态',
            prop: 'relationType'
        }
    ]
}
