import Find from '../views/Find/index'
import My from '../views/My'
import Video from '../views/Video'
import Friend from '../views/Friend'
import Account from '../views/Account'
<<<<<<< HEAD
import my_router from './my'
=======
// 账户的二级路由
import Information from "../views/Account/Information"
import ShoppingHouse from "../views/Account/ShoppingHouse"
import Movie from "../views/Account/Movie"
import ChangeClothes from '../views/Account/ChangeClothes'
//登录
import Login from "../views/Account/Login"
import PhoneLogin from "../views/Account/PhoneLogin"
>>>>>>> 362ad6f0e692ae362fe8abaaa2457d4cb6980552

const routers = [
    {
        to:"/",
        type:"main",
        path:"/",
        exact:true,
        context:"发现",
        iconfontName:"iconfont icon-tubiaozhizuomoban",
        component:Find,
        isShow:false,
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
        isShow:false,
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
        isShow:false,
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
        isShow:false,
        meta:{
            title:"网易云音乐"
        }
    },
    {
        to:"/account",
<<<<<<< HEAD
        type:"main",
        exact:false,
=======
>>>>>>> 362ad6f0e692ae362fe8abaaa2457d4cb6980552
        path:"/account",
        context:"账号",
        iconfontName:"iconfont icon-ren",
        component:Account,
        isShow:false,
        exact:true,
        meta:{
            title:"网易云音乐"
        }
    },
<<<<<<< HEAD
    ...my_router,
=======
        //账户内的消息、商城、演出、个性皮肤 
    {
        to:"/account/information",
        path:"/account/information",
        context:"消息",
        component:Information,
        isShow:true,
        iconfontName:"iconfont icon-xinfeng"
    },
    {
        to:"/account/shoppinghouse",
        path:"/account/shoppinghouse",
        context:"商城",
        component:ShoppingHouse,
        isShow:true,
        iconfontName:"iconfont icon-shangcheng"
    },
    {
        to:"/account/movie",
        path:"/account/movie",
        context:"演出",
        component:Movie,
        isShow:true,
        iconfontName:"iconfont icon-ziyuan"
    },
    {
        to:"/account/changeclothes",
        path:"/account/changeclothes",
        context:"个性换肤",
        component:ChangeClothes,
        isShow:true,
        iconfontName:"iconfont icon-yifu"
    },
    // 登录
    {
        to:"/account/login",
        path:"/account/login",
        context:"登录",
        component:Login,
        isShow:true,
    },
    {
        to:"/account/phonelogin",
        path:"/account/phonelogin",
        context:"手机登录",
        component:PhoneLogin,
        isShow:true,
    },

>>>>>>> 362ad6f0e692ae362fe8abaaa2457d4cb6980552
]

export default {
    routers
}