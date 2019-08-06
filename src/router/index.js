import Find from '../views/Find/index'
import My from '../views/My'
import Video from '../views/Video'
import Friend from '../views/Friend'
import Account from '../views/Account'
import my_router from './my'

const routers = [
    {
        to:"/",
        type:"main",
        path:"/",
        exact:true,
        context:"发现",
        iconfontName:"iconfont icon-tubiaozhizuomoban",
        component:Find,
        meta:{
            title:"网易云音乐"
        }
    },
    {
        to:"/video",
        type:"main",
        exact:false,
        path:"/video",
        context:"视频",
        iconfontName:"iconfont icon-zhongxinshipin",
        component:Video,
        meta:{
            title:"网易云音乐"
        }
    },
    {
        to:"/my",
        type:"main",
        exact:true,
        path:"/my",
        context:"我的",
        iconfontName:"iconfont icon-yinle",
        component:My,
        meta:{
            title:"网易云音乐"
        } 
    },
    {
        to:"/friend",
        type:"main",
        exact:false,
        path:"/friend",
        context:"朋友",
        iconfontName:"iconfont icon-pengyou",
        component:Friend,
        meta:{
            title:"网易云音乐"
        }
    },
    {
        to:"/account",
        type:"main",
        exact:false,
        path:"/account",
        context:"账号",
        iconfontName:"iconfont icon-ren",
        component:Account,
        meta:{
            title:"网易云音乐"
        }
    },
    ...my_router,
]

export default {
    routers
}