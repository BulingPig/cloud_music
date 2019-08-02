import React, { Component } from 'react'
import "../../assets/iconfont/iconfont.css"
import "../../assets/sass/account.scss"
import {
    NavLink,
    Route,
    Link
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
                    <input type="button" value="立即登录"/>
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
                        
                        this.props.children.map((v,i)=>{
                            return(
                                <Route key={i} path={v.path} component={v.component}></Route>
                            )
                        })
                    }
                    {
                        this.props.children.map((v,i)=>{
                            return(
                                <div style={{float:"left"}}>
                                    
                                    <NavLink key={Date.now()} to={v.to}>{v.context}
                                    <p className={v.iconfontName}></p>
                                    </NavLink>
                                    
                                </div>
                                
                            ) 
                        })
                    }
                   
                </div>
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
