import React from 'react';
import axios from "axios"
export default class State extends React.Component{
    constructor(){
        super();
        this.state={
            stateList:[]
        }
    }
    render(){
        return(
            
            <div>
                {/* 头部 */}
                <div className="account-header">
                <span className="iconfont icon-fanhui"  onClick={()=>{this.props.history.push("/account")}}></span>
                <span>动态</span>
                <span className="iconfont icon-jiezou"></span>
                </div>
                {/* 没有评论 */}
                <div ref="haveno">暂无相关动态</div>
                {/* 有评论的时候 */}
                {
                    this.state.stateList.map((v,i)=>{
                        return(
                            <div className="stateList" key={i}>
                                <img className="statePhoto" src={localStorage.pic} alt=""/>
                                <p className="stateNickname">{v.user.nickname}</p>
                                <p className="stateSong">分享单曲：</p>
                                <p className="stateTime">26分钟前</p>
                                <p className="stateContext">{JSON.parse(v.json).msg}</p>
                                <img className="statePicture" src={v.pics[0].squareUrl} alt=""/>
                                <div className="stateGe">
                                    {JSON.parse(v.json).song.name}
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
    componentDidMount(){
        // var arr = this.state.stateList;
        axios.get("/user/event?uid="+localStorage.id)
        .then(data=>{
            console.log(22,data.events)
            
            if(data.events.length===0){
                this.refs.haveno.style.display="block"
            }else{
                this.refs.haveno.style.display="none"
            }

            this.setState({
                stateList:data.events
            })
        })
    }
}