import Login from 'Source/components/pc_login.js'
import Root from 'Source/root.js'
import Details from 'Source/components/pc_news_details.js'
import MobileDetails from 'Source/components/mobile_news_details.js'
import userCenter from 'Source/components/pc_userCenter.js'
import MobileUserCenter from 'Source/components/mobile_userCenter.js'
import Register from 'Source/components/pc_register.js'
const routes = [
    {
        path: '/',
        exact: true,
        component: Root
    },
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        path: '/register',
        exact: true,
        component: Register
    },
    {
        path: '/details/:id',
        exact: true,
        component: Details,
    },
    {
        path: '/mobile_details/:id',
        exact: true,
        component: MobileDetails
    },
    {
        path: '/userCenter',
        exact: true,
        component: userCenter
    },
    {
        path: '/mobile_userCenter',
        exact: true,
        component: MobileUserCenter
    },
]

export default routes