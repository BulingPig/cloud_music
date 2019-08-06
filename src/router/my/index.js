import LocalMusic from '../../views/My/middleComponents/LocalMusic'
import LatelyPlay from '../../views/My/middleComponents/LatelyPlay'
import MyRadioStation from '../../views/My/middleComponents/MyRadioStation'
import MyCollection from '../../views/My/middleComponents/MyCollection'

const my_routers = [
    {
        to:"/my/localmusic",
        type:"my_middleRouter",
        exact:true,
        path:"/my/localmusic",
        context:"本地音乐",
        iconfontName:"iconfont icon-yinle",
        component:LocalMusic,
        meta:{
            title:"我的..."
        }
    },
    {
        to:"/my/latelyPlay",
        type:"my_middleRouter",
        exact:false,
        path:"/my/latelyPlay",
        context:"最近播放",
        iconfontName:"iconfont icon-bofang",
        component:LatelyPlay,
        meta:{
            title:"我的..."
        }
    },
    {
        to:"/my/myRadioStation",
        type:"my_middleRouter",
        exact:false,
        path:"/my/myRadioStation",
        context:"我的电台",
        iconfontName:"iconfont icon-xianxing_diantai",
        component:MyRadioStation,
        meta:{
            title:"我的..."
        }
    },
    {
        to:"/my/myCollection",
        type:"my_middleRouter",
        exact:false,
        path:"/my/myCollection",
        context:"我的收藏",
        iconfontName:"iconfont icon-ren",
        component:MyCollection,
        meta:{
            title:"我的..."
        }
    },
]

export default my_routers;