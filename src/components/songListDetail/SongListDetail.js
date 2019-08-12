import React, { Component } from 'react'
import axios from 'axios'
import '../../assets/my_iconfont2/iconfont.css'
import { relative } from 'path';


export default class SongListDetail extends Component {
    constructor(){
        super();
        this.state = {
            songDetailArr:[],
            songListDetailMsg:{}
        }
    }
    
    render() {
        //console.log(5555555,this.props)
        //console.log(111111,this.state.songDetailArr)
        console.log(222222,this.state.songListDetailMsg)
        return (
            <div id="songListDetail">
                <div className="wrap" id="songListPic">
                  
                </div>
                <div className="middle">
                <div className="top">
                        <span className="left" onClick={()=>{this.props.history.go(-1)}}>返回</span>
                        <span>歌单</span>
                        <span className="iconfont icon-gengduo"></span>
                </div>
                <div className="songListTitle">
                    <input type="text" placeholder="搜索歌单内的歌曲" ref={"searchSong"} />
                    <div className="songListPic">
                        <div className="songListBg">
                            <img src={this.state.songListDetailMsg.songListPic} alt=""/>
                            <span className="iconfont icon-z"> {this.state.songListDetailMsg.playCount}</span>
                        </div>
                        <div className="songListName">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.songListDetailMsg.songListName}</div>
                        <span className="authorHeadPicUrl"><img src={this.state.songListDetailMsg.authorHeadPicUrl} alt=""/></span>
                        <span className="authorName">{this.state.songListDetailMsg.authorName}</span>              
                    </div>
                </div>
                </div>
                <div id="playAll">
                    <div className="wrap">
                        <span className="iconfont icon-bofang"></span>
                        <span className="allNum">
                            播放全部
                            <span >(共{this.state.songListDetailMsg.allNum}首)</span>
                        </span>
                    </div>
                </div>
                <div className="songList">
                   {
                       this.state.songDetailArr.map((v,i)=>{
                           return(
                               <div className="loopSongList" key={i} onClick={()=>{this.props.history.push({
                                   pathname:"/bofang",
                                   state:{
                                    songName:v.songName,
                                    songId:v.songId,
                                    songAuthorName:v.songAuthorName,
                                    songPic:v.songPic
                                   }
                               })}} >
                                   <span className="order">{i+1}</span>
                                   <span className="songMsg">
                                       <b className="songName">{v.songName}</b>
                                       <b className="songAuthorName">{v.songAuthorName}</b>
                                   </span>
                                   <span className="iconfont icon-zhongxinshipin"></span>
                                   <span className="iconfont icon-gengduo"></span>
                               </div>
                           )
                       })
                   }
                </div>
            </div>
        )
    }
    Bgpig(){
        var pic = document.getElementById("songListPic");
        pic.style.backgroundImage = "url("+this.state.songListDetailMsg.songListPic+")"
        pic.style.backgroundSize = "cover"
        pic.style.position = "relative"
        pic.style.filter = "blur(15px)";
    }
    async componentDidMount(){
        var songDetailArr = [];
        var songListDetailMsg = this.state.songListDetailMsg;

        const data = await axios.get("/playlist/detail?id="+this.props.match.params.id)
        //console.log(8888888888,data)
        for(var i=0; i<data.playlist.tracks.length; i++){
            songDetailArr.push({
                songName:data.playlist.tracks[i].name,
                songId:data.playlist.tracks[i].id,
                songAuthorName:data.playlist.tracks[i].ar[0].name,
                songPic:data.playlist.tracks[i].al.picUrl
            })
        }
        songListDetailMsg.songListName = data.playlist.name;
        songListDetailMsg.songListPic = data.playlist.coverImgUrl;
        songListDetailMsg.songListDescription = data.playlist.description;
        songListDetailMsg.playCount = data.playlist.playCount;
        songListDetailMsg.allNum = data.playlist.trackCount;
        songListDetailMsg.authorName = data.playlist.creator.nickname;
        songListDetailMsg.authorHeadPicUrl = data.playlist.creator.avatarUrl;
        songListDetailMsg.authorBgPicUrl = data.playlist.creator.backgroundUrl;
        songListDetailMsg.authorId = data.playlist.creator.userId;
        
        this.setState({
            songDetailArr:songDetailArr,
            songListDetailMsg:songListDetailMsg
        })
        this.Bgpig();
        var odh = document.getElementById("playAll");
        window.onscroll = function(){
            if(document.documentElement.scrollTop > 1){
                odh.style.position = "sticky";
                odh.style.top = 45 + "px";
            }
        }
    }
}
