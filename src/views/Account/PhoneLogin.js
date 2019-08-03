import React from 'react';
import "../../assets/sass/account.scss"
export default class PhoneLogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:""
        }
    }
    render(){
        return(
            <div>
                {/* 头部 */}
                <div className="account-header">
                <p className="login-back" onClick={()=>{this.props.history.push("/account/login")}}>X</p>
                <span>手机号登录</span>
                <span></span>
                </div>
                <p>未注册手机号登录后将自动创建账号</p>
                <div>
                    <span>+86</span>
                    <input type="text" value={this.state.value}/>
                </div>
                <input type="button" value="下一步"/>
            </div>
        )
        
    }
}