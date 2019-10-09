import { combineReducers } from 'redux'
import login from './login'
import news from './news'
import comment from './comment'
import collection from './collection'
const app = combineReducers({
    login,
    news,
    comment,
    collection,
    
    
})

export default app
