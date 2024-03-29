import request from '../request'
import { Res } from '../api'

export const getCandidateList = (params: {
    pageNum?: number
    pageSize?: number
    userName?: string
    userEmail?: string
    userPhone?: string
    candidateStatus?: string
    majorUuid?: string
    candidateId?: string
    examPlace?: string
    undergraduateSchool?: string
}): Res<any> => {
    return request({
        url: '/user/getCandidateList',
        method: 'get',
        params
    })
}

export const updateCandidate = (data: {
    candidateUuid?: string
    candidateStatus?: string
    userPhone?: string
    examPlace?: string
    userName?: string
    majorUuid?: string
    userUuid?: string
    userEmail?: string
    userGender?: string
    userRole?: string
    candidateId?: string
    undergraduateSchool?: string
    informationStatus?: string
    userHeadimg?: string
    userAddress?: string
    examDate?: string
}): Res<boolean> => {
    return request({
        url: '/user/updateCandidate',
        method: 'put',
        data
    })
}
