//用户信息接口
export interface studentInterface {
    [props: string]:
        | string
        | number
        | undefined
        | null
        | boolean
        | object
        | symbol
        | bigint
        | Function
        | any
    userName: string
    userAge: number
    userSchool: string
    majorName: string
    userPhone: string
    userEmail: string
}

//字段对象接口
export interface studentLabelInterface {
    [props: string]:
        | string
        | number
        | undefined
        | null
        | boolean
        | object
        | symbol
        | bigint
        | Function
        | any
    userName: string
    userAge: string
    userSchool: string
    majorName: string
    userPhone: string
    userEmail: string
}
