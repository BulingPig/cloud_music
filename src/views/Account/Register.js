import React from 'react';
import axios from 'axios';
export default class Register extends React.Component{
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
                <p className="login-back iconfont icon-fanhui" onClick={()=>{this.props.history.push("/account/Verification")}}></p>
                <span>注册信息</span>
                <span></span>
                </div>
                <div>
                <input type="text" ref="phone" placeholder="手机号码" onChange={()=>{this.changephone()}}/>
                </div>
                <div>
                <input type="text" ref="password" placeholder="密码" onChange={()=>{this.changepassword()}}/>
                </div>
                <div>
                <input type="text" ref="nickname" placeholder="昵称" onChange={()=>{this.changenickname()}}/>
                </div>
                <div>
                <input type="text" ref="captcha" placeholder="验证码" onChange={()=>{this.changecaptch()}}/>
                <input type="button" value="获取验证码" onClick={()=>{this.getcaptch()}}/>
                </div>
                <input type="button" value="注册" onClick={()=>{this.register()}}/>
            </div>
        )
    }
    changecaptch(){

    }
    changephone(){

    }
    changepassword(){

    }
    changenickname(){

    }
    getcaptch(){
        let phone = this.refs.phone.value;
        axios.get("/captcha/sent?phone="+phone)
        .then(data=>{
            
        })
    }
    register(){
        let captcha = this.refs.captcha.value;
        let phone = this.refs.phone.value;
        let password = this.refs.password.value;
        let nickname = this.refs.nickname.value;
        
        axios.get("/register/cellphone?phone="+phone+"&password="+password+"&captcha="+captcha+"&nickname="+nickname)
        .then(data=>{
            // localStorage.phone = phone;
            this.props.history.push("/")
        })
        
    }
}