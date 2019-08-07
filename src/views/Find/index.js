import React, { Component } from 'react'
import {
    Link,
} from "react-router-dom";
import TopSearch from "./tou_zuijan/topSearch"
import axios from "axios"
export default class Find extends Component {
    constructor(props) {
        super(props)
        this.state = {
            swiperUrl: [],
            songList: [],
            newPan: [],
        }
    }
    render() {
        return (
            <div id={"find"}>
                <TopSearch {...this.props} />
                <div className="wrapper" ref='warpper'>
                    <ul className="content">
                        <li><img src={'http://p1.music.126.net/jdV0e_7MHALNTQVDfgWiMA==/109951164259218807.jpg'} /></li>
                        {/* {
                            this.state.swiperUrl.map((v, i) => {
                                return <li key={i}> <img src={v.picUrl} />  </li>
                            })
                        } */}
                    </ul>
                </div>
                <div className={'tab_card'} >
                    <Link to={'/Find/Recommend'} > <i className={'iconfont icon-icon'} /> 每日推荐</Link>
                    <Link to={'/Find/Recommend'} > <i className={'iconfont icon-dingdan'} /> 歌单</Link>
                    <Link to={'/Find/Recommend'} > <i className={'iconfont icon-jiezou'} /> 排行榜</Link>
                    <Link to={'/Find/Recommend'} > <i className={'iconfont icon-tubiaozhizuomoban'} /> 电台</Link>
                    <Link to={'/Find/Live'} > <i className={'iconfont icon-tubiaozhizuomoban'} /> 直播</Link>
                </div>
                {/* 推荐歌单 */}
                <div className={'song_list'}>
                    <h3>推荐歌单</h3>
                    <ul>
                        {
                            this.state.songList.map((v, i) => {
                                return <li key={i}><img src={v.picUrl} /> {v.name}</li>
                            })
                        }
                    </ul>
                </div>
                {/* 新碟 */}
                <div className={'new_pan'}>
                    <h3>新碟</h3>
                    <ul>
                        {
                            this.state.newPan ? (
                                this.state.newPan.map((v, i) => {
                                    return <li key={i}><img src={v.picUrl} /><h5> {v.name}</h5><p>{v.artist.name}</p></li>
                                })
                            ) : null
                        }
                    </ul>
                </div>
            </div>
        )
    }
    async  componentDidMount() {
        document.title = this.props.meta.title;
        // 轮播
        const data = await axios.get("banner?type=2")
        this.setState({
            swiperUrl: data.banners
        })
        //推荐歌单
        axios.get("personalized?limit=6")
            .then((data) =>
                this.setState({
                    songList: data.result
                })
            )
        // 新碟
        axios.get("top/album?offset=0&limit=3")
            .then((data) =>
                this.setState({
                    newPan: data.albums
                })
            )
    }
}
