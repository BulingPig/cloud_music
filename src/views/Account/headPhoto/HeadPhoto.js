import React from 'react';
import axios from "axios";
import router from "../../../router";

import {
    NavLink,
} from "react-router-dom"
export default class HeadPhoto extends React.Component{
    constructor(){
        super();
        this.state={
            detail:[]
        }
    }
    render(){
        return(
            <div>
                {/* 头部 */}
                <div className="account-header"style={{opacity:0.9}}>
                <p className="login-back iconfont icon-fanhui"
                style={{backgroud:"#fff"}}
                 onClick={()=>{this.props.history.push("/account")}}></p>
                <span>{this.state.detail.nickname}</span>
                <span></span>
                </div>
                {/* 背景处 */}

                <div className="photoBackgroud">
                    <img className="photoBackgroud-photo" src={this.state.detail.avatarUrl} alt=""/>
                    <img className="photoBackgroug-background" src={this.state.detail.backgroundUrl} alt=""/>
                    <span className="photoBackgroud-name">{this.state.detail.nickname}</span>
                    <span className="photoBackgroud-follows" onClick={()=>{this.props.history.push("/account/Attention")}}>关注&nbsp;{this.state.detail.follows}</span>
                    <span className="photoBackgroud-followeds" onClick={()=>{this.props.history.push("/account/Fans")}}>粉丝&nbsp;{this.state.detail.followeds}</span>
                    <p className="iconfont icon-xieyingping photoBackgroud-bianji" onClick={()=>{this.props.history.push("/account/Data")}}>编辑</p>
                    <span className="photoBackgroud-vip">Lv.0</span>
                    <span className="photoBackgroud-place">北京</span>
                </div>
                <div className="photoBackgroud-box">
                <div className="photoNav">
                    {
                        router.routers.map((v,i)=>{
                            return(
                                  v.type === 5?
                                        <div key={i} style={{float:"left"}}>
                                            <p><NavLink to={v.to}>{v.context}</NavLink></p>
                                        </div>:null
                            ) 
                        })
                    }
                </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        axios.get("/user/detail?uid="+localStorage.id)
        .then(data=>{
            console.log("用户详情",data)
            this.setState({
                detail:data.profile
            })
        })
    }
}