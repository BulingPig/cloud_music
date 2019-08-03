import React from 'react';
import "../../assets/sass/account.scss"
export default class Login extends React.Component{
    render(){
        return(
            <div>
                <div className="account-login">
                    <p className="login-back" onClick={()=>{this.props.history.push("/account")}}>X</p>
                    <p className="iconfont icon-yinle login-logo"></p>
                    <input className="login-button" type="button" value="手机号登录" onClick={()=>{this.props.history.push("/account/phonelogin")}}/>
                    <div>
                        <p className="iconfont icon-yinle login-weixin"></p>
                        <p className="iconfont icon-yinle login-qq"></p>
                        <p className="iconfont icon-yinle login-weibo"></p>
                        <p className="iconfont icon-yinle login-wangyi"></p>
                    </div>
                    <p className="login-agreement">
                        <label>
                            <input type="radio"/>
                            同意《服务条款》和《隐私政策》
                        </label>
                        
                    </p>
                </div>
            </div>
        )
    }
}