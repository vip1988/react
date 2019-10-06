const config = require('config')
const postCollection = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/collection/postCollection', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userAccount: conditions.userAccount || undefined,
                    article_id: conditions.article_id || undefined,
                    article_title: conditions.article_title || undefined,
                })
            })

            let res = await response.json()
            console.log(JSON.stringify(res))
            if (res.status == 'success') {
                dispatch({
                    type: 'COLLECTION_CREATE',
                    status: 'success',
                    collection: res.collection
                })
            }else {
                dispatch({
                    type: 'COLLECTION_CREATE',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}
const getCollectionList = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/collection/getCollectionList', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let res = await response.json()

            if (res.status == 'success') {
                dispatch({
                    type: 'COLLECTION_LIST',
                    status: 'success',
                    collection: res.collection
                })
            }else {
                dispatch({
                    type: 'COLLECTION_LIST',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}
export default {
    
    getCollectionList,
    postCollection
}
