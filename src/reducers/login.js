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
        default:
            return state
    }
}

export default login