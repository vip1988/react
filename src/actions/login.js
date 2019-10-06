const config = require('config')

const getLogin = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: 'LOGIN_DATA',
            loginName: config.login.name
        })
    }
}

const postLoginInfo = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/login/create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userAccount: conditions.userAccount || undefined,
                    userPassword: conditions.userPassword || undefined
                })
            })

            let res = await response.json()
            
            if(res.status=='account exits')
            {
                dispatch({
                    type: 'LOGIN_CREATE',
                    status: 'account error'
                })



            }
            if (res.status == 'success') {
                dispatch({
                    type: 'LOGIN_CREATE',
                    status: 'success',
                    loginInfo: res.login
                })
            }else {
                dispatch({
                    type: 'LOGIN_CREAT',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}

const getLoginInfo = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/login/getAccountList', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let res = await response.json()

            if (res.status == 'success') {
                dispatch({
                    type: 'LOGIN_LIST',
                    status: 'success',
                    loginInfo: res.login
                })
            }else {
                dispatch({
                    type: 'LOGIN_LIST',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}
export default {
    getLogin,
    getLoginInfo,
    postLoginInfo
}



