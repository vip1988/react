const config = require('config')

const initialStatus=()=>{
    return async (dispatch, getState) => {
        dispatch({
            type: 'INIT_STATUS',
            status:'normal'
        })
    }
}
const logout= (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/login/logout', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userAccount: conditions || undefined,
                })
            })
            let res = await response.json()
            if (res.status == 'success') {
                dispatch({
                    type: 'LOGOUT_CHECK',
                    status: 'logout success',
                    login: res.login
                })
            }
            else {
                dispatch({
                    type: 'LOGIN_CHECK',
                    status: 'logout error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}
const registerCreate = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/login/registerCreate', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userAccount: conditions.userAccount || undefined,
                    userPassword: conditions.userPassword || undefined,
                    userConfirm: conditions.userConfirm || undefined,
                    userEmail: conditions.userEmail || undefined,
                    userPhoneNumber: conditions.userPhoneNumber || undefined,
                    userLogin:conditions.userLogin || undefined,
                })
            })
            let res = await response.json()
            console.log(JSON.stringify('res'+res))
            if (res.status == 'success') {
                dispatch({
                    type: 'REGISTER_CREATE',
                    status: 'success',
                    login: res.login
                })
            }
            else {
                dispatch({
                    type: 'REGISTER_CREATE',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}
const checkLoginInfo = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/login/checkLoginInfo', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userAccount: conditions.userAccount || undefined,
                    userPassword: conditions.userPassword || undefined,
                    userLogin: conditions.userLogin || undefined
                })
            })
            let res = await response.json()
            console.log('checklogin:'+JSON.stringify(res))
            if (res.status == 'success') {
                dispatch({
                    type: 'LOGIN_CHECK',
                    status: 'check success',
                    login: res.login
                })
            }
            else {
                dispatch({
                    type: 'LOGIN_CHECK',
                    status: 'check error'
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
    getLoginInfo,
    checkLoginInfo,
    initialStatus,
    logout,
    registerCreate
}



