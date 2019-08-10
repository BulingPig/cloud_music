import React from "react";
import axios from "axios";
class MusicPlayingInterface extends React.Component {
    constructor() {
        super()
        this.state = {
            lrc: [],
            isShowLrc: false,
        }
    }
    render() {
        console.log(this.props,232323)
        return (
            <div id={"musicPlayingInterface"} >
                <div className={"top_title"}>
                    <span onClick={()=> this.props.history.go(-1) } ><i className={"iconfont icon-fanhui"}></i></span>
                    <div className={"artist-info"}>
                        <h3>{'Coming Home'}</h3>
                        <p>(A.N.O. Remix)</p>
                    </div>
                </div>
                <div className="musicPlaying_lyrics noneBar" >
                    {
                        this.state.isShowLrc ? (
                            <div className={'lyrics_panel'} onClick={this.lrcIsShow.bind(this)} >
                                <div className={'kkkk'}>
                                    {
                                        this.state.lrc.map((v, i) => {
                                            return (
                                                <p key={i}> {"[" + v}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) : (
                                <>
                                    <div className={"img_warp"} onClick={this.lrcIsShow.bind(this)} >
                                        <img src={"http://p1.music.126.net/ECL2Sqv303tIuO59XYxp_A==/109951164215114670.jpg"} alt="" />
                                    </div>
                                    <ul>
                                        <li> <i className={'iconfont icon-xin'} /> </li>
                                        <li> <i className={'iconfont icon-icon--'} /> </li>
                                        <li> <i className={'iconfont icon-xin'} /> </li>
                                        <li onClick={()=>this.props.history.push('/SongReviews/'+this.props.match.params.songid)}> <i className={'iconfont icon-icon--1'} /> </li>
                                        <li> <i className={'iconfont icon-gengduo'} /> </li>
                                    </ul>
                                </>
                            )
                    }
                </div>
                <div className={"audio_player_warp"}>
                    <audio className={"audio_player"} src={"https://music.163.com/song/media/outer/url?id=" + this.props.match.params.songid + ".mp3 "} controls="controls"
                    // autoPlay="autoplay"
                    >
                    </audio>
                </div>
            </div>
        )
    }
    lrcIsShow() {
        this.state.isShowLrc = !this.state.isShowLrc;
        this.setState({
            isShowLrc: this.state.isShowLrc
        })
    }
    async  componentDidMount() {
        const data = await axios.get("/lyric?id=" + this.props.match.params.songid)
        this.setState({
            lrc: data.lrc.lyric.split("[")
        })
    }
}
export default MusicPlayingInterface;
