const initialState = {
    status: 'normal',
    newsInfo: [],
    article: null
    
}

const news = (state = initialState, action) => {
    switch (action.type) {
        case 'NEWS_LIST':
            return Object.assign({}, state, {
                status: action.status,
                newsInfo: action.newsInfo
            });
            case 'NEWS_GET':
                return Object.assign({}, state, {
                    status: action.status,
                    newsInfo: action.newsInfo
                });
                case 'ARTICLE_GET':
                    return Object.assign({}, state, {
                        status: action.status,
                        article: action.article
                    }); 
                    
        default:
            return state
    }
}

export default news