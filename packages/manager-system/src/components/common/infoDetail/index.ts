export const infoDetailProps = {
    //列表key
    listKeys: {
        type: Array<string>,
        default: () => []
    },
    //列表label
    listLabel: {
        type: Object,
        default: () => []
    },
    //列表数据
    listData: {
        type: Object,
        default: () => {}
    },
    //是否禁用输入
    disabled: {
        type: Boolean,
        default: false
    }
}
