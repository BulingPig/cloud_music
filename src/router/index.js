import Find from '../views/Find/index'
import My from '../views/My'
import Video from '../views/Video'
import Friend from '../views/Friend'
import Account from '../views/Account'

const routers = [
    {
        to:"/",
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
        exact:false,
        path:"/my",
        context:"我的",
        iconfontName:"iconfont icon-yinle",
        component:My,
        meta:{
            title:"网易云音乐"
        },
        children:[
            {
                to:"my/localMusic",
                exact:false,
                path:"my/localMusic",
                context:"本地音乐",
                iconfontName:"",
                component:"",
                meta:{
                    
                }
            }
        ]  
    },
    {
        to:"/friend",
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
        exact:false,
        path:"/account",
        context:"账号",
        iconfontName:"iconfont icon-ren",
        component:Account,
        meta:{
            title:"网易云音乐"
        }
    },
]

export default {
    routers
}