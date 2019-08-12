// 消息、商城、演出、个性换肤
import Information from "../../views/Account/Information"
import ShoppingHouse from "../../views/Account/ShoppingHouse"
import Movie from "../../views/Account/Movie"
import ChangeClothes from '../../views/Account/ChangeClothes'
/**
 * ***********************消息*****************************
 */
import Discuss from "../../views/Account/Discuss"
import Mine from "../../views/Account/Mine"
import Inform from "../../views/Account/Inform"
import PersonalLetter from "../../views/Account/PersonalLetter"
//登录
import Login from "../../views/Account/login/Login"
import PhoneLogin from "../../views/Account/login/PhoneLogin"
import Verification from "../../views/Account/login/Verification"
import PassWord from "../../views/Account/login/PassWord"
import Register from "../../views/Account/login/Register"
import ChangePassword from "../../views/Account/login/ChangePassword"
/**
 * *************************登录以后的动态。关注、粉丝、编辑资料***************************
 */
import Attention from "../../views/Account/mynav/Attention"
import Data from "../../views/Account/mynav/Data"
import Fans from "../../views/Account/mynav/Fans"
import State from "../../views/Account/mynav/State"
/**
 * *************************点击头像的路由***************************
 */
import HeadPhoto from "../../views/Account/headPhoto/HeadPhoto"
/**
 * *************************点击头像里面音乐、动态、关于我的路由***************************
 */
import PhotoMusic from "../../views/Account/headPhoto/PhotoMusic"
import PhotoState from "../../views/Account/headPhoto/PhotoState"
import PhotoMy from "../../views/Account/headPhoto/PhotoMy"
const routers=[
    //账户内的消息、商城、演出、个性皮肤 
    {
        to:"/account/information",
        path:"/account/information",
        context:"消息",
        component:Information,
        isShow:false,
        type:2,
        iconfontName:"iconfont icon-xinfeng"
    },
    {
        to:"/account/shoppinghouse",
        path:"/account/shoppinghouse",
        context:"商城",
        component:ShoppingHouse,
        isShow:true,
        type:2,
        iconfontName:"iconfont icon-shangcheng"
    },
    {
        to:"/account/movie",
        path:"/account/movie",
        context:"演出",
        component:Movie,
        isShow:true,
        type:2,
        iconfontName:"iconfont icon-ziyuan"
    },
    {
        to:"/account/changeclothes",
        path:"/account/changeclothes",
        context:"个性换肤",
        component:ChangeClothes,
        isShow:true,
        type:2,
        iconfontName:"iconfont icon-yifu"
    },
    /**
     * ******************************我的消息***********
     */
    {
        to:"/account/information/",
        path:"/account/information/",
        context:"私信",
        exact:true,
        component:PersonalLetter,
        isShow:false,
        type:4,
    },
    {
        to:"/account/information/discuss",
        path:"/account/information/discuss",
        context:"评论",
        component:Discuss,
        isShow:false,
        type:4,
    },
    {
        to:"/account/information/mine",
        path:"/account/information/mine",
        context:"@我",
        component:Mine,
        isShow:false,
        type:4,
    },
    {
        to:"/account/information/inform",
        path:"/account/information/inform",
        context:"通知",
        component:Inform,
        isShow:false,
        type:4,
    },

    // 登录
    {
        to:"/account/login",
        path:"/account/login",
        context:"登录",
        component:Login,
        type:3,
    },
    {
        to:"/account/phonelogin",
        path:"/account/phonelogin",
        context:"手机登录",
        component:PhoneLogin,
        type:3,
    },
    {
        to:"/account/verification",
        path:"/account/verification/:a",
        context:"手机号验证",
        component:Verification,
        type:3,
    },
    {
        to:"/account/password",
        path:"/account/password",
        context:"密码验证",
        component:PassWord,
        type:3,
    },
    {
        to:"/account/Register",
        path:"/account/Register",
        context:"注册信息",
        component:Register,
        type:3,
    },
    {
        to:"/account/ChangePassword",
        path:"/account/ChangePassword",
        context:"修改密码",
        component:ChangePassword,
        type:3,
    },
    //登录后的动态关注粉丝编辑资料
    {
        to:"/account/attention",
        path:"/account/attention",
        context:"关注",
        component:Attention,
        isShow:true,
        type:3,
    },
    {
        to:"/account/state",
        path:"/account/state",
        context:"动态",
        component:State,
        isShow:true,
        type:3,
    },
    {
        to:"/account/fans",
        path:"/account/fans",
        context:"粉丝",
        component:Fans,
        isShow:true,
        type:3,
    },
    {
        to:"/account/data",
        path:"/account/data",
        context:"编辑资料",
        component:Data,
        type:3,
    },
    /**
 * *************************点击头像的路由***************************
 */
{
    to:"/account/headphoto",
    path:"/account/headphoto",
    context:"个人信息",
    component:HeadPhoto,
    type:3,
    isShow:true
},
   /**
 * *************************点击头像的音乐、动态、我的路由***************************
 */
{
    to:"/account/headphoto/",
    path:"/account/headphoto/",
    context:"音乐",
    component:PhotoMusic,
    exact:true,
    type:5,
    isShow:true
},
{
    to:"/account/headphoto/photostate",
    path:"/account/headphoto/photostate",
    context:"动态",
    component:PhotoState,
    type:5,
    isShow:true
},
{
    to:"/account/headphoto/photomy",
    path:"/account/headphoto/photomy",
    context:"关于我",
    component:PhotoMy,
    type:5,
    isShow:true
},
]

export default  routers
