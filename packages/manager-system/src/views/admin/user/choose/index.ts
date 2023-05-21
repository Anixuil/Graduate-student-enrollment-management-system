const baseUrl = 'http://localhost:8080/anixuil/'
export const chooseOption = {
    align: 'center',
    menuAlign: 'center',
    excelBtn: true,
    viewBtn: true,
    addBtn: false,
    editBtn: false,
    delBtn: false,
    height: 'calc(100vh - 330px)',
    column: [
        {
            label: '序号',
            prop: 'index',
            width: 120,
            display: false
        },
        // {
        //     label: '照片',
        //     prop: 'userHeadimg',
        //     hide: true,
        //     type: 'upload',
        //     listType: 'picture-img',
        //     imgWidth: 50,
        //     imgFullscreen: true,
        //     action: `${baseUrl}/file/upload`,
        //     tip: '只能上传jpg/png文件，且不超过500kb',
        //     propsHttp: {
        //         res: 'data',
        //         url: 'url'
        //     },
        //     loadText: '正在上传...',
        //     span: 24,
        //     rules: [
        //         {
        //             required: true,
        //             message: '请上传照片',
        //             trigger: ['blur', 'change']
        //         }
        //     ],
        //     accept: 'image/jpeg,image/png'
        // },
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
        }
    ]
}
