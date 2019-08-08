import React, { Component } from 'react'
// 头搜索
import TopSearch from "./TopSearch/topSearch"
//轮播
import Carousel from "./swiper/Carousel"
//导航
import Daohang from "./Navigation/Navigation"
//推荐歌单
import RecommendedSongList from "./RecommendedSongList/RecommendedSongList"
// 新碟
import NewDish from "./NewDish/NewDish"
export default class Find extends Component {
    render() {
        return (
            <div id={"find"}>
                {/* 头部搜索 */}
                <TopSearch {...this.props} />
                {/* 轮播图 */}
                <Carousel />
                {/* 推荐卡/ 导航 */}
                <Daohang {...this.props}/>             
                {/* 推荐歌单 */}
                <RecommendedSongList/>
                {/* 新碟 */}
                <NewDish/>
            </div>
        )
    }
    componentDidMount() {
        document.title = this.props.meta.title;
    }
}
