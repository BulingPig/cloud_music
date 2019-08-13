import React, { Component } from 'react'
import "../../assets/iconfont/iconfont.css"
import "../../assets/iconfont-account1/iconfont.css"
import "../../assets/sass/account.scss"
import router from "../../router"
import axios from "axios"

import {
    NavLink,
} from "react-router-dom"

export default class Account extends Component {
    constructor(props){
        super(props);
        this.state={
            attentionNum:[],
            fansList:[],
            stateList:[],
            detail:{}
        }
    }
    render() {
        return (
            <div>
                {/* 头部 */}
                <div className="account-header" style={{position:"fixed",zIndex:"100"}}>
                <span className="iconfont icon-saoyisao"></span>
                <span>账号</span>
                <span className="iconfont icon-jiezou"></span>
                </div>
                {/* 登录之后 */}
                <div ref="afterlogin" className="myInfromation">
                    <div>
                        <img onClick={()=>{this.props.history.push("/account/HeadPhoto")}} className="userPhoto" src={localStorage.pic} alt=""/>
                        <span className="myName">{this.state.detail.nickname}</span>
                        <div className="myLv">Lv.0</div>
                        <div className="signin" ref="signin" onClick={()=>this.signin()}>签到</div>
                    </div>
                   <div className="huashuoNav">
                       <div onClick={()=>{this.props.history.push("/account/State")}}>
                           <p>{this.state.stateList.length}</p>
                           <p>动态</p>
                       </div>
                       <div onClick={()=>{this.props.history.push("/account/Attention")}}>
                           <p>{this.state.attentionNum.length}</p>
                           <p>关注</p>
                       </div>
                       <div onClick={()=>{this.props.history.push("/account/Fans")}}>
                           <p>{this.state.fansList.length}</p>
                           <p>粉丝</p>
                       </div>
                       <div onClick={()=>{this.props.history.push("/account/Data")}}>
                           <p className="iconfont icon-huo"></p>
                           <p>编辑资料</p>
                       </div>
                   </div>
                </div>
                {/* 登录附近 */}
                <div className="account-button" ref="beforelogin">
                    <p ref="something">登录网易云音乐</p>
                    <p>手机电脑多端同步，尽享海量高品质音乐</p>
                    <input type="button" value="立即登录" onClick={()=>{this.props.history.push({pathname:"/account/login"})}}/>
                </div>
                {/* VIP */}
                <div ref="vip" className="account-vip">
                        <p className="vip">开通黑胶VIP</p>
                        <p className="newfive">新客仅5元</p>
                        <span className="forfree">免费领福利</span>
                        <div className="icon-huo-div">
                            <span className="iconfont icon-huo"></span>
                        </div>
                        
                </div>
                {/* 消息、商城、演出、个性换肤 */}
                <div className="account-nav">
                    {
                        router.routers.map((v,i)=>{
                            return(
                                v.type === 2?
                                <div style={{float:"left"}} key={i}>
                                    <p className={v.iconfontName}></p>
                                    <NavLink to={v.to}>{v.context}</NavLink>
                                </div>:null
                                
                            ) 
                        })
                    }
                   
                </div>
                {/*  列表 */}
                <div className="account-list">
                    {/* 我的铃声 */}
                    <div className="account-list-dingdan">
                        <div className="iconfont icon-icon--"></div>
                        <div className="account-list-right">
                            <p className="account-list-right-left">口袋铃声</p>
                            <p className="iconfont icon-you account-list-right-right"></p>
                        </div>
                    </div>
                    {/* 我的铃声 */}
                    <div className="account-list-dingdan">
                        <div className="iconfont icon-dingdan"></div>
                        <div className="account-list-right">
                            <p className="account-list-right-left">我的订单</p>
                            <p className="iconfont icon-you account-list-right-right"></p>
                        </div>
                    </div>
                    {/* 我的设置 */}
                    <div className="account-list-dingdan">
                        <div className="iconfont icon-shezhi"></div>
                        <div className="account-list-right">
                            <p className="account-list-right-left">设置</p>
                            <p className="iconfont icon-you account-list-right-right"></p>
                        </div>
                    </div>
                    {/* 我的夜间模式 */}
                    <div className="account-list-dingdan">
                        <div className="iconfont icon-yejianmoshi"></div>
                        <div className="account-list-right">
                            <p className="account-list-right-left">夜间模式</p>
                            <p className="iconfont icon-you account-list-right-right"></p>
                        </div>
                    </div>
                    {/* 我的定时关闭 */}
                    <div className="account-list-dingdan">
                        <div className="iconfont icon-timer"></div>
                        <div className="account-list-right">
                            <p className="account-list-right-left">定时关闭</p>
                            <p className="iconfont icon-you account-list-right-right"></p>
                        </div>
                    </div>
                    {/* 我的音乐闹钟 */}
                    <div className="account-list-dingdan">
                        <div className="iconfont icon-icon-test"></div>
                        <div className="account-list-right">
                            <p className="account-list-right-left">音乐闹钟</p>
                            <p className="iconfont icon-you account-list-right-right"></p>
                        </div>
                    </div>
                    {/* 我的在线听歌免费流量*/}
                    <div className="account-list-dingdan">
                        <div className="iconfont icon-icon"></div>
                        <div className="account-list-right">
                            <p className="account-list-right-left">在线听歌免费流量</p>
                            <p className="iconfont icon-you account-list-right-right"></p>
                        </div>
                    </div>
                     {/* 我的优惠券*/}
                     <div className="account-list-dingdan">
                        <div className="iconfont icon-youhuiquan"></div>
                        <div className="account-list-right">
                            <p className="account-list-right-left">优惠券</p>
                            <p className="iconfont icon-you account-list-right-right"></p>
                        </div>
                    </div>
                    {/* 我的我要直播*/}
                    <div className="account-list-dingdan">
                        <div className="iconfont icon-maikefeng"></div>
                        <div className="account-list-right">
                            <p className="account-list-right-left">我要直播</p>
                            <p className="iconfont icon-you account-list-right-right"></p>
                        </div>
                    </div>
                    {/* 我的分享网易云音乐*/}
                    <div className="account-list-dingdan">
                        <div className="iconfont icon-fenxiang"></div>
                        <div className="account-list-right">
                            <p className="account-list-right-left">分享网易云音乐</p>
                            <p className="iconfont icon-you account-list-right-right"></p>
                        </div>
                    </div>
                    {/* 我的关于*/}
                    <div className="account-list-dingdan">
                        <div className="iconfont icon-about"></div>
                        <div className="account-list-right">
                            <p className="account-list-right-left">关于</p>
                            <p className="iconfont icon-you account-list-right-right"></p>
                        </div>
                    </div> 
                </div>
                {/* 退出登录 */}
                <div>
                    <div className="account-list-dingdan" ref="exit">
                        <div>
                            <input className="account-list-exit"
                             onClick={()=>{this.onClickExit()}} type="button" value="退出登录"/>
                        </div>     
                    </div> 
                </div>
            </div>
        )
    }
    signin(){
        this.refs.signin.style.background="#fff";
        this.refs.signin.style.color="#000";
    }
    onClickExit(){
        axios.get("/logout")
        .then(data=>{
            // console.log(data);
            localStorage.clear();
            this.props.history.push("/account/login");
        })
    }
    componentDidMount(){
        document.title = this.props.meta.title;
        if(localStorage.id){
            this.refs.beforelogin.style.display="none";
            this.refs.afterlogin.style.display="block";
            this.refs.exit.style.display="block";
            this.refs.vip.style.marginTop="80px"
        }else{
            this.refs.beforelogin.style.display="block";
            this.refs.something.style.paddingTop="70px";
            this.refs.afterlogin.style.display="none";
            this.refs.exit.style.display="none";
        }
        axios.get("/user/follows?uid="+localStorage.id)
        .then(data=>{
            this.setState({
                attentionNum:data.follow
            })
        })
        axios.get("/user/followeds?uid="+localStorage.id)
        .then(data=>{
            this.setState({
                fansList:data.followeds
            })
        })
        axios.get("/user/event?uid="+localStorage.id)
        .then(data=>{
            // console.log(data.events.length)
            this.setState({
                stateList:data.events
            })
        })
        axios.get("/user/detail?uid="+localStorage.id)
        .then(data=>{
            // console.log("用户详情",data.profile)
            this.setState({
                detail:data.profile
            })
        })
    }
}
