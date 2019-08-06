import React from 'react';
import "../../assets/sass/account.scss"
import "../../assets/iconfont/iconfont.css"
import "../../assets/iconfont-account1/iconfont.css"
import Nav from "../../router/Nav"
import router from "../../router/index"
export default class Login extends React.Component{
    render(){
        return(
            <div>
                <div className="account-login">
                    <p className="login-back iconfont icon-fanhui" onClick={()=>{this.props.history.push("/account")}}></p>
                    <p className="iconfont icon-yinle login-logo"></p>
                    <input className="login-button" type="button" value="手机号登录" onClick={()=>{this.props.history.push("/account/phonelogin")}}/>
                    <div>
                        <p className="iconfont icon-weixin login-weixin"></p>
                        <p className="iconfont icon-qq login-qq"></p>
                        <p className="iconfont icon-weibo login-weibo"></p>
                        <p className="iconfont icon-yi login-wangyi"></p>
                    </div>
                    <p className="login-agreement">
                        <label>
                            同意《服务条款》和《隐私政策》
                        </label>
                        
                    </p>
                </div>
                    
                
            </div>
        )
    }
}