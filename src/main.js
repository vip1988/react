import React from 'react'
import ReactDOM from 'react-dom'
//import { BrowserRouter, Route } from 'react-router-dom'
import { HashRouter, Route, Link } from "react-router-dom"
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk'
import reducers from './reducers'

require('Source/less/theme.less')
import routes from 'Source/router.js'

const store = createStore(reducers, applyMiddleware(Thunk))

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
    </Provider>
), document.querySelector('#app'))