//import BoFang from "../../views/Find/bofang/bofang"
import Recommend from "../../views/Find/Navigation/Recommend"
import SongList from "../../views/Find/Navigation/SongList"
import Rank from "../../views/Find/Navigation/Rank"
import RadioStation from "../../views/Find/Navigation/RadioStation"
import Live from "../../views/Find/Navigation/Live"
export default [
    {
        to: "/Find/recommend",
        path: "/Find/recommend",
        noNeed:false,
        // exact: true,
        context: "每日推荐",
        iconfontName: "iconfont icon-tubiaozhizuomoban",
        component: Recommend,
        meta: {
            title: "每日推荐"
        }
    },
    {
        to: "/Find/Recommend",
        path: "/Find/Recommend",
        noNeed:false,
        // exact: true,
        context: "歌单",
        iconfontName: "iconfont icon-tubiaozhizuomoban",
        component: SongList,
        meta: {
            title: "歌单"
        }
    },
    {
        to: "/Find/rank",
        path: "/Find/rank",
        noNeed:false,
        // exact: true,
        context: "排行榜",
        iconfontName: "iconfont icon-tubiaozhizuomoban",
        component: Rank,
        meta: {
            title: "排行榜"
        }
    },
    {
        to: "/Find/radiostation",
        path: "/Find/radiostation",
        noNeed:false,
        // exact: true,
        context: "电台",
        iconfontName: "iconfont icon-tubiaozhizuomoban",
        component: RadioStation,
        meta: {
            title: "电台"
        }
    },
    {
        to: "/Find/Live",
        path: "/Find/Live",
        noNeed:false,
        // exact: true,
        context: "直播",
        iconfontName: "iconfont icon-tubiaozhizuomoban",
        component: Live,
        meta: {
            title: "直播"
        }
    },
    // {
    //     to: "/bofang/:songid",
    //     path: "/bofang/:songid",
    //     noNeed:false,
    //     // exact: true,
    //     context: "播放",
    //     iconfontName: "iconfont icon-tubiaozhizuomoban",
    //    component: boFang,
    //     meta: {
    //         title: "播放"
    //     }
    //},
]