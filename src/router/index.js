import Find from '../views/Find/index'
import My from '../views/My'
import Video from '../views/Video'
import Friend from '../views/Friend'
import Account from '../views/Account'
import accountRouters from "./account"
import my_middleRouter from './my/middlerouters'
import my_tabRouter from './my/tabComponents'
import findRouterList from "./Find"



const routers = [
    {
        to:"/",
        type:"main",
        path:"/",
        exact:true,
        context:"发现",
        iconfontName:"iconfont icon-tubiaozhizuomoban",
        component:Find,
        isShow:true,
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
        isShow:true,
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
        isShow:true,
        meta:{
            title:"网易云音乐"
        },
        } ,
    {
        to:"/friend",
        type:"main",
        exact:false,
        path:"/friend",
        context:"朋友",
        iconfontName:"iconfont icon-pengyou",
        component:Friend,
        isShow:true,
        meta:{
            title:"网易云音乐"
        }
    },
    {
        to:"/account",
        type:"main",
        exact:true,
        path:"/account",
        context:"账号",
        iconfontName:"iconfont icon-ren",
        component:Account,
        isShow:true,
        meta:{
            title:"网易云音乐"
        }
    },
    ...accountRouters,
    ...my_middleRouter,
    ...my_tabRouter,
    ...findRouterList,

]

export default {
    routers
}