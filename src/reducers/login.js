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
        case 'INIT_STATUS':
        return Object.assign({}, state, {
            status: action.status,
        });
        default:
            return state
    }
}
export default login 