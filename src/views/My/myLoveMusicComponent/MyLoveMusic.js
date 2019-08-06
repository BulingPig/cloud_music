import React, { Component } from 'react'
import '../../../assets/iconfont/iconfont.css'
export default class myLoveMusic extends Component {
    constructor(){
        super();
        this.state ={
            isShow:true
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
    render() {
        return (
            <div>
                <div id="myLoveMusic">
                    <p className="left" onClick={this.changIsShow.bind(this)}>
                        <span className="iconfont icon-you" ref={"before"} style={{float:"left"}}></span>
                        <span className="iconfont icon-z" ref={"after"} style={{display:"none",float:"left"}} ></span>
                        <span className="songList">
                            我创建的歌单
                            <span>{"("+1+")"}</span>
                        </span>
                    </p>
                    <p className="right">
                        <span className="iconfont icon-buoumaotubiao11"></span>
                        <span className="iconfont icon-gengduo"></span>
                    </p>
                </div>
                <p id="songList" ref={"songList"} style={{display:"none"}}>
                    <span className="heart"><b className="iconfont icon-xin"></b></span>
                    <span id="love">
                        <b className="love">我喜欢的音乐</b>
                        <b id="songNum"> <i className="iconfont icon-wodeshoucang"></i>共{121}首，已下载{11}首</b> 
                    </span>
                </p>

            </div>
        )
    }
}
