import React, { Component } from 'react'
import "../../assets/iconfont/iconfont.css"
import "../../assets/sass/account.scss"
import router from "../../router/index"
import {
    NavLink,
} from "react-router-dom"

export default class UserNumber extends Component {
    render() {
        return (
            <div>
                {/* 头部 */}
                <div className="account-header">
                <span className="iconfont icon-saoyisao"></span>
                <span>账号</span>
                <span className="iconfont icon-jiezou"></span>
                </div>
                {/* 登录附近 */}
                <div className="account-button">
                    <p>登录网易云音乐</p>
                    <p>手机电脑多端同步，尽享海量高品质音乐</p>
                    <input type="button" value="立即登录" onClick={()=>{this.props.history.push("/account/login")}}/>

                </div>
                {/* VIP */}
                <div className="account-vip">
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
                                v.isShow?
                                <div style={{float:"left"}}>
                                    <p key={Date.now()} className={v.iconfontName}></p>
                                    <NavLink key={i} to={v.to}>{v.context}</NavLink>
                                </div>:null
                                
                            ) 
                        })
                    }
                   
                </div>
                {/* 列表 */}
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
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
