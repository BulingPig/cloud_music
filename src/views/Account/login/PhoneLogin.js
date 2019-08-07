import React from 'react';
import "../../../assets/sass/account.scss"
import "../../../assets/iconfont-account1/iconfont.css"
import axios from 'axios';
export default class PhoneLogin extends React.Component{
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
                <p className="login-back iconfont icon-fanhui" onClick={()=>{this.props.history.push("/account/login")}}></p>
                <span>手机号登录</span>
                <span></span>
                </div>
                <p className="phone-login-words">未注册手机号登录后将自动创建账号</p>
                <div className="phone-number">
                    <span>+86</span>
                    <input type="text" value={this.state.value} 
                    ref="phoneNumber"
                    placeholder="请输入手机号"
                    onInput={()=>{
                        this.changeInput()
                    }}
                    onChange={(e)=>{
                        this.setState({
                            value:e.target.value
                        })
                    }}/>
                </div>
                <input className="phone-login-next"
                 ref="nextBackgroud" onClick={()=>{this.onclickTo()}}
                  type="button" value="下一步"/>
                  <div className="popBox" ref="reminder">
                        请输入正确的手机号码  
                  </div>
            </div>
        )
        
    }
    componentDidMount(){
        if(this.refs.phoneNumber.value === ""){
            this.refs.nextBackgroud.style.opacity="0.3"
        }

    }
    onclickTo(){
        //  var zhengze = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
         
        var phoneNumber = this.refs.phoneNumber.value;
        /**
         * *************************检测手机号是否注册
         */
        axios.get("/cellphone/existence/check?phone="+phoneNumber)
        .then( data =>{
            localStorage.phone = phoneNumber;
            if(data.exist!==-1){//如果注册，就跳转到登录
                this.props.history.push("/account/PassWord")
            }else{//如果没有注册就跳转到注册
                this.props.history.push("/account/Verification")
                localStorage.phone = phoneNumber
            }
        })
       
    }
    changeInput(){
        if(this.refs.phoneNumber.value === ""){
            this.refs.nextBackgroud.style.opacity="0.3";
        }
        else{
            this.refs.nextBackgroud.style.opacity="1"
        }
    }
}