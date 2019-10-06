const initialState = {
    status:'normal',
    comment:[],
    collection:[]
    
}

const comment = (state = initialState, action) => {
    switch (action.type) {
        case 'COMMENT_LIST':
        return Object.assign({}, state, {
            status: action.status,
            comment: action.comment
        });
        case 'COMMENT_CREAT':
        return Object.assign({}, state, {
            status: action.status,
            comment: action.comment
        });
        default:
            return state
    }
}

export default comment