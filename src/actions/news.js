const config = require('config')


const getArticle = (id) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/news/getArticle/' + id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let res = await response.json()
            console.log(res)
            if (res.status == 'success') {
                dispatch({
                    type: 'ARTICLE_GET',
                    status: 'success',
                    article: res.news
                })
            }else {
                dispatch({
                    type: 'ARTICLE_GET',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}

const getNewsList = (conditions) => {
    return async (dispatch, getState) => {
        try {
            //使用fetch 函數呼叫api並設定資料型態
            let response = await fetch(config.service.external_url + '/api/news/getNewsList', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let res = await response.json()
            
            if (res.status == 'success') {
                dispatch({
                    type: 'NEWS_LIST',
                    status: 'success',
                    newsInfo: res.news
                })
            }else {
                dispatch({
                    type: 'NEWS_LIST',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}

const getNewsCounts = (counts) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/news/getNewsCounts/' + counts, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let res = await response.json()
            if (res.status == 'success') {
                dispatch({
                    type: 'NEWS_GET',
                    status: 'success',
                    newsInfo: res.news
                })
            }else {
                dispatch({
                    type: 'NEWS_GET',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}

export default {
    getNewsCounts,
    getNewsList,
    getArticle

}