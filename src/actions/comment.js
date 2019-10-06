const config = require('config')

const postComment = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/comment/postComment', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userAccount: conditions.userAccount || undefined,
                    comment: conditions.comment || undefined
                })
            })

            let res = await response.json()
            console.log('res:'+res)
            if (res.status == 'success') {
                dispatch({
                    type: 'COMMENT_CREATE',
                    status: 'success',
                    comment: res.comment
                })
            }else {
                dispatch({
                    type: 'COMMENT_CREATE',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}

const getCommentList = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/comment/getCommentList', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let res = await response.json()

            if (res.status == 'success') {
                dispatch({
                    type: 'COMMENT_LIST',
                    status: 'success',
                    comment: res.comment
                })
            }else {
                dispatch({
                    type: 'COMMENT_LIST',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}
export default {
    postComment,
    getCommentList
    
}



