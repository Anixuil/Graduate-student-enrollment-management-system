//接口返回数据类型
interface ItypeApi<T> {
    data: T
    msg: string | null
    code: number
}

export type Res<T> = Promise<ItypeApi<T>>
