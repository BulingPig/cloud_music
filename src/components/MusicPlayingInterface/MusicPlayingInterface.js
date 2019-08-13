import React from "react";
import axios from "axios";
class MusicPlayingInterface extends React.Component {
    constructor() {
        super()
        this.state = {
            lrc: [],
            isShowLrc: false,
            songMsg:{}
        }
    }
    componentWillMount(){
        this.setState({
            songMsg:this.props.location.state
        })
    }
    render() {
        //console.log(this.state.songMsg)
        //console.log(this.props,232323)
        return (
            <div id={"musicPlayingInterface"}>
                <div className={"top_title"}>
                    <span onClick={()=> this.props.history.go(-1) } ><i className={"iconfont icon-fanhui"}></i></span>
                    <div className={"artist-info"}>
                        <h3>{this.state.songMsg.songName}</h3>
                        <p>{this.state.songMsg.songAuthorName}</p>
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
                                        <img src={this.state.songMsg.songPic} alt="" />
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
                    <audio className={"audio_player"} src={"https://music.163.com/song/media/outer/url?id=" + this.state.songMsg.songId + ".mp3 "} controls="controls"
                    // autoPlay="autoplay"
                    >
                    </audio>
                </div>
            </div>
        )
    }
    lrcIsShow() {
        
        this.setState({
            isShowLrc: !this.state.isShowLrc
        })
    }
    async  componentDidMount() {
        const data = await axios.get("/lyric?id=" + this.state.songMsg.songId)
        this.setState({
            lrc: data.lrc.lyric.split("[")
        })
    }
}
export default MusicPlayingInterface;
