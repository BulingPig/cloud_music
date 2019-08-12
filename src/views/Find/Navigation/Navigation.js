import React from "react";
import { Link } from "react-router-dom";
class Daohang extends React.Component {
    render() {
        return (
            <div className={'tab_card'} >
                <Link className={"tab_btn"} to={'/my/SongListDetail/tj'} > <i className={'iconfont icon-icon'} /> <p>每日推荐</p> </Link>
                <Link className={"tab_btn"} to={'/Find/SongList'} > <i className={'iconfont icon-dingdan'} /> <p> 歌单</p></Link>
                <Link className={"tab_btn"} to={'/Find/Recommend'} > <i className={'iconfont icon-jiezou'} /> <p> 排行榜</p></Link>
                <Link className={"tab_btn"} to={'/Find/Recommend'} > <i className={'iconfont icon-tubiaozhizuomoban'} /> <p> 电台</p></Link>
                <Link className={"tab_btn"} to={'/Find/Live'} > <i className={'iconfont icon-tubiaozhizuomoban'} /> <p> 直播</p></Link>
            </div>
        )
    }
}
export default Daohang
