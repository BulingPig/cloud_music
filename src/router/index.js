import Find from '../views/Find/index'
import My from '../views/My'
import Video from '../views/Video'
import Friend from '../views/Friend'
import Account from '../views/Account'
import Account_router from './account'
/**
 * **************account*******************
 */
const routers = [
    {
        to:"/",
        path:"/",
        exact:true,
        context:"发现",
        iconfontName:"iconfont icon-tubiaozhizuomoban",
        component:Find,
        isShow:false,
        type:1,
        meta:{
            title:"网易云音乐"
        }
    },
    {
        to:"/video",
        exact:false,
        path:"/video",
        context:"视频",
        iconfontName:"iconfont icon-zhongxinshipin",
        component:Video,
        isShow:false,
        type:1,
        meta:{
            title:"网易云音乐"
        }
    },
    {
        to:"/my",
        exact:false,
        path:"/my",
        context:"我的",
        iconfontName:"iconfont icon-yinle",
        component:My,
        isShow:false,
        type:1,
        meta:{
            title:"网易云音乐"
        },
    },
    {
        to:"/friend",
        exact:false,
        path:"/friend",
        context:"朋友",
        iconfontName:"iconfont icon-pengyou",
        component:Friend,
        isShow:false,
        type:1,
        meta:{
            title:"网易云音乐"
        }
    },
    {
        to:"/account",
        path:"/account",
        context:"账号",
        iconfontName:"iconfont icon-ren",
        component:Account,
        isShow:false,
        exact:true,
        type:1,
        meta:{
            title:"网易云音乐"
        }
    },
    
    ...Account_router,
]

export default {
    routers
}