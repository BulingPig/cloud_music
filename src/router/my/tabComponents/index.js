import Classcial from '../../../views/My/tabComponents/Classcial'
import Driving from '../../../views/My/tabComponents/Driving'
import IceCream from '../../../views/My/tabComponents/IceCream'
import NewsSong from '../../../views/My/tabComponents/NewsSong'
import Parenting from '../../../views/My/tabComponents/Parenting'
import PersonCollection from '../../../views/My/tabComponents/PersonCollection'
import PersonFM from '../../../views/My/tabComponents/PersonFM'
import Run from '../../../views/My/tabComponents/Run'
import StatiSpace from '../../../views/My/tabComponents/StatiSpace'
import SongListDetail from '../../../components/songListDetail/SongListDetail'

const routers = [
    {
        to:"/my/tab/Classcial",
        type:"tab",
        exact:true,
        path:"/my/tab/Classcial",
        context:"古典专区",
        iconfontName:"iconfont icon-icon-",
        component:Classcial,
        meta:{
            title:"轮播"
        }
    },
    {
        to:"/my/tab/Driving",
        type:"tab",
        exact:true,
        path:"/my/tab/Driving",
        context:"驾驶模式",
        iconfontName:"iconfont icon-chepai",
        component:Driving,
        meta:{
            title:"轮播"
        }
    },
    {
        to:"/my/tab/IceCream",
        type:"tab",
        exact:true,
        path:"/my/tab/IceCream",
        context:"小冰电台",
        iconfontName:"iconfont icon-xuegao",
        component:IceCream,
        meta:{
            title:"轮播"
        }
    },
    {
        to:"/my/tab/NewsSong",
        type:"tab",
        exact:true,
        path:"/my/tab/NewsSong",
        context:"最新电音",
        iconfontName:"iconfont icon-dianzi",
        component:NewsSong,
        meta:{
            title:"轮播"
        }
    },
    {
        to:"/my/tab/Parenting",
        type:"tab",
        exact:true,
        path:"/my/tab/Parenting",
        context:"亲子专区",
        iconfontName:"iconfont icon-airudiantubiaohuizhi-zhuanqu_qinzichengchang",
        component:Parenting,
        meta:{
            title:"轮播"
        }
    },
    {
        to:"/my/tab/PersonCollection",
        type:"tab",
        exact:true,
        path:"/my/tab/PersonCollection",
        context:"私人收藏",
        iconfontName:"iconfont icon-huaban",
        component:PersonCollection,
        meta:{
            title:"轮播"
        }
    },
    {
        to:"/my/tab/PersonFM",
        type:"tab",
        exact:true,
        path:"/my/tab/PersonFM",
        context:"私人电台",
        iconfontName:"iconfont icon-shouyinji",
        component:PersonFM,
        meta:{
            title:"轮播"
        }
    },
    {
        to:"/my/tab/Run",
        type:"tab",
        exact:true,
        path:"/my/tab/Run",
        context:"跑步电台",
        iconfontName:"iconfont icon-paobu",
        component:Run,
        meta:{
            title:"轮播"
        }
    },
    {
        to:"/my/tab/StatiSpace",
        type:"tab",
        exact:true,
        path:"/my/tab/StatiSpace",
        context:"stati空间",
        iconfontName:"iconfont icon-zhiboziyuan",
        component:StatiSpace,
        meta:{
            title:"轮播"
        }
    },
    {
        to:"/my/SongListDetail",
        type:"SongListDetail",
        exact:true,
        path:"/my/SongListDetail/:id",
        context:"歌单详情",
        component:SongListDetail,
        meta:{
            title:"歌单详情"
        }
    },
]

export default routers;