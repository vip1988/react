const initialState = {
    status:'normal',
    login:[]
    
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_LIST':
        return Object.assign({}, state, {
            status: action.status,
            login: action.login
        });
        case 'REGISTER_CREATE':
        return Object.assign({}, state, {
            status: action.status,
            login: action.login
        });
        case 'FORGOT_CHECK':
        return Object.assign({}, state, {
            status: action.status,
            login: action.login
        });
        case 'RESET_CHECK':
            return Object.assign({}, state, {
                status: action.status,
            });
        case 'LOGIN_CHECK':
        return Object.assign({}, state, {
            status: action.status,
            login: action.login
        });
        case 'LOGOUT_CHECK':
        return Object.assign({}, state, {
            status: action.status,
            login: action.login
        });
        case 'SEND_CHECK':
        return Object.assign({}, state, {
            status: action.status,
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