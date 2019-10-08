const initialState = {
    status:'normal',
    loginInfo:[]
    
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_DATA':
            return Object.assign({}, state, {
                loginName: action.loginName
            });
        case 'LOGIN_LIST':
        return Object.assign({}, state, {
            status: action.status,
            loginInfo: action.loginInfo
        });
        case 'LOGIN_CREAT':
        return Object.assign({}, state, {
            status: action.status,
            loginInfo: action.loginInfo
        });
        case 'LOGIN_CHECK':
        return Object.assign({}, state, {
            status: action.status,
            loginInfo: action.loginInfo
        });
        case 'LOGOUT_CHECK':
        return Object.assign({}, state, {
            status: action.status,
            loginInfo: action.loginInfo
        });
        case 'INIT_STATUS':
        return Object.assign({}, state, {
            status: action.status,
        });
        default:
            return state
    }
}
export default login 