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
import Login from "../../views/Account/Login"
import PhoneLogin from "../../views/Account/PhoneLogin"
import Verification from "../../views/Account/Verification"
import PassWord from "../../views/Account/PassWord"
import Register from "../../views/Account/Register"
const routers=[
    //账户内的消息、商城、演出、个性皮肤 
    {
        to:"/account/information",
        path:"/account/information",
        context:"消息",
        component:Information,
        isShow:true,
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
        to:"/account/information/personalletter",
        path:"/account/information/personalletter",
        context:"私信",
        component:PersonalLetter,
        isShow:true,
        type:4,
    },
    {
        to:"/account/information/discuss",
        path:"/account/information/discuss",
        context:"评论",
        component:Discuss,
        isShow:true,
        type:4,
    },
    {
        to:"/account/information/mine",
        path:"/account/information/mine",
        context:"@我",
        component:Mine,
        isShow:true,
        type:4,
    },
    {
        to:"/account/information/inform",
        path:"/account/information/inform",
        context:"通知",
        component:Inform,
        isShow:true,
        type:4,
    },

    // 登录
    {
        to:"/account/login",
        path:"/account/login",
        context:"登录",
        component:Login,
        isShow:true,
        type:3,
    },
    {
        to:"/account/phonelogin",
        path:"/account/phonelogin",
        context:"手机登录",
        component:PhoneLogin,
        isShow:true,
        type:3,
    },
    {
        to:"/account/verification",
        path:"/account/verification",
        context:"手机号验证",
        component:Verification,
        isShow:true,
        type:3,
    },
    {
        to:"/account/password",
        path:"/account/password",
        context:"密码验证",
        component:PassWord,
        isShow:true,
        type:3,
    },
    {
        to:"/account/Register",
        path:"/account/Register",
        context:"注册信息",
        component:Register,
        isShow:true,
        type:3,
    },
]

export default  routers
