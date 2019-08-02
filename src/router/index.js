import Find from '../views/Find/index'
import My from '../views/My'
import Video from '../views/Video'
import Friend from '../views/Friend'
import Account from '../views/Account'
// 账户的二级路由
import Information from "../views/Account/Information"
import ShoppingHouse from "../views/Account/ShoppingHouse"
import Movie from "../views/Account/Movie"
import ChangeClothes from '../views/Account/ChangeClothes';

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
        }
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
        },
        children:[
            {
                to:"/account/information",
                path:"/account/information",
                context:"消息",
                component:Information,
                iconfontName:"iconfont icon-xinfeng"
            },
            {
                to:"/account/shoppinghouse",
                path:"/account/shoppinghouse",
                context:"商城",
                component:ShoppingHouse,
                iconfontName:"iconfont icon-xinfeng"
            },
            {
                to:"/account/movie",
                path:"/account/movie",
                context:"演出",
                component:Movie,
                iconfontName:"iconfont icon-xinfeng"
            },
            {
                to:"/account/changeclothes",
                path:"/account/changeclothes",
                context:"个性换肤",
                component:ChangeClothes,
                iconfontName:"iconfont icon-xinfeng"
            }
        ]
    },
]

export default {
    routers
}