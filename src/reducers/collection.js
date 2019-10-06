const initialState = {
    status:'normal',
    collection:[]
    
}
const collection = (state = initialState, action) => {
    switch (action.type) {
        case 'COLLECTION_CREAT':
        return Object.assign({}, state, {
            status: action.status,
            collection: action.collection
        });
        case 'COLLECTION_LIST':
        return Object.assign({}, state, {
            status: action.status,
            collection: action.collection
        });
        default:
            return state
    }
}

export default collection