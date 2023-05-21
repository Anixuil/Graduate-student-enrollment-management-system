import { request } from '../request'
import { Res } from '../api'

export const getStuTeachList = (params: { pageNum: number; pageSize: number }): Res<any[]> => {
    return request({
        url: '/stuTeachRelation/getStuTeachRelation',
        method: 'get',
        params
    })
}

export const agreeStuTeach = (data: { relationUuid: string; relationType: string }): Res<any> => {
    return request({
        url: '/stuTeachRelation/agree',
        method: 'post',
        data
    })
}

export const chooseTeach = (data: { teacherUuid: string }): Res<any> => {
    return request({
        url: '/stuTeachRelation/chooseTeacher',
        method: 'post',
        data
    })
}
