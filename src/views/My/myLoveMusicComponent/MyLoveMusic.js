import React, { Component } from 'react'
import '../../../assets/iconfont/iconfont.css'
import axios from 'axios'

export default class myLoveMusic extends Component {
    constructor(props){
        super(props);
        this.state ={
            isShow:true,
            songList:[]
        }
    }
    show(isShow) {
        isShow = this.state.isShow;
        if(isShow){
            this.refs.songList.style.display = "block"
        }else{
            this.refs.songList.style.display = "none"
        }
    }
    direction(isShow){
        isShow = this.state.isShow;
        if(isShow){
            this.refs.before.style.display = "none"
            this.refs.after.style.display = "block"
        }else(
            this.changDisplay()
        )
    }
    changDisplay(){
        this.refs.before.style.display = "block"
        this.refs.after.style.display = "none"
    }
    changIsShow(){
        this.show();
        
        this.setState({
            isShow:!this.state.isShow
        })
        this.direction();
    }
    addSongListNone(){
        this.refs.addSongList.style.display = "none";
        this.refs.songListName.value = "";
    }
    addSongListShow(){
        this.refs.addSongList.style.display = "block";
        this.refs.songListName.value = "";
    }
    
    changeColor(){
        if(this.refs.songListName.value === ""){
            this.refs.did.style.color = "#e5e5e5"
        }else{
            this.refs.did.style.color = "#000"
        }
    }
    render() {
        return (
            <div>
                <div id="myLoveMusic">
                    <p className="left" onClick={this.changIsShow.bind(this)}>
                        <span className="iconfont icon-you" ref={"before"} style={{float:"left"}}></span>
                        <span className="iconfont icon-xiangxia" ref={"after"} style={{display:"none",float:"left"}} ></span>
                        <span className="songList">
                            我创建的歌单
                            <span>{"("+this.state.songList.length+")"}</span>
                        </span>
                    </p>
                    <p className="right">
                        <span className="iconfont icon-gengduo" onClick={this.addSongListShow.bind(this)}></span>
                    </p>
                </div>
                <div id="mySongList" ref={"songList"} style={{display:"none"}}>
                {
                    this.state.songList.map((v,i)=>{
                        return(
                                <div key={i}  className="listWrap" onClick={()=>{this.props.history.push("/my/SongListDetail/"+v.songListId)}}>
                                    <div className="heart"><b className="iconfont icon-xin"></b></div>
                                    <div id="love">
                                        <div className="love">{v.name}</div>
                                        <div id="songNum"> 
                                            <b className="iconfont icon-wodeshoucang"></b>
                                            <b>共{v.allNum}首</b>
                                        </div> 
                                    </div>
                                </div>
                            
                        )
                    })
                }
                </div>
                <div id="addSongList" ref={"addSongList"} style={{display:"none"}}>
                    <div className="mask" onClick={this.addSongListNone.bind(this)}></div>
                    <div className="main">
                        <div className="top">
                                <span className="cancel" onClick={this.addSongListNone.bind(this)}>取消</span>
                                <b>创建歌单</b>
                                <span className="did" ref={"did"} onClick={this.addPlayList.bind(this)}>完成</span>
                        </div>
                        <input type="text" placeholder="输入歌单标题" ref={"songListName"} onChange={this.changeColor.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
    async addPlayList(){
        const data = await axios.get("/playlist/create?name="+this.refs.songListName.value)
        this.getPlayList();
        this.refs.addSongList.style.display = "none";
    }
    async getPlayList(){
        const data = await axios.get("/user/playlist?uid="+localStorage.id)
        console.log(data)
        var arr = [];
        for(var i=0; i<data.playlist.length; i++){
            arr.push({
                name:data.playlist[i].name,
                allNum:data.playlist[i].trackCount,
                songListId:data.playlist[i].id,
            })
        }
        this.setState({
            songList:arr
        })
        arr = [];
    }
    componentDidMount(){
        if(localStorage.id){
            this.getPlayList()
        }
   }

}
