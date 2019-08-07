import React from 'react';
import axios from 'axios';
export default class PassWord extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:""
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            value:props.value
        })
    }
    render(){
        return(
            <div>
                {/* 头部 */}
                <div className="account-header">
                <p className="login-back iconfont icon-fanhui" onClick={()=>{this.props.history.push("/account/PhoneLogin")}}></p>
                <span>手机号登录</span>
                <span></span>
                </div>
                {/* 请输入密码 */}
                <div className="phone-number">
                    <input type="text" value={this.state.value} 
                    ref="password"
                    placeholder="输入密码"
                    onChange={(e)=>{
                        this.setState({
                            value:e.target.value
                        })
                    }}/>
                </div>
                {/* 按钮 */}
                <input className="phone-login-next" ref="nextBackgroud" 
                onClick={()=>{this.onclickTo()}} type="button" value="立即登录" style={{color:"#fff"}}/>
                <p className="rePassword">重设密码<span className="iconfont icon-you"></span></p>
                <div className="popBox" ref="reminder">
                        手机号或密码错误
                  </div>
            </div>
        )
    }
    onclickTo(){
       axios.get("login/cellphone?phone="+localStorage.phone+"&password="+this.refs.password.value)
       .then(data=>{
           console.log(data)
           localStorage.pic = data.profile.avatarUrl;
           localStorage.id = data.account.id;
        this.props.history.push("/")
       })
    }
}