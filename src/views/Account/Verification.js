import React from 'react';
import axios from 'axios';
export default class Verification extends React.Component{
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
                <span>手机号验证</span>
                <span></span>
                </div>
                {/* 请输入验证码 */}
                <p>验证码已发送至</p>
                <p>+86&nbsp;{localStorage.phone}</p>
                <input type="text" ref="number" 
                onChange={()=>{this.changeNumber()}}
                />



                <div className="popBox" ref="reminder">
                        您输入的密码错误
                  </div>
            </div>
        )
    }
    changeNumber(){
        let phone = localStorage.phone;
         if(this.refs.number.value.length === 4){
                    console.log(11111111111111)
                    axios.get("/captcha/verify?phone="+phone+"&captcha="+this.refs.number.value)
                    .then(data=>{
                        this.props.history.push("/account/Register")
                    })
                }
    }
   
    onclickTo(){
       
        // if(this.refs.phoneNumber.value ===localStorage.passWord){
        //      this.props.history.push("/")
        // }else{
        //     this.refs.reminder.style.display = "block";
        //      this.refs.phoneNumber.value = "";
        //      setTimeout(()=>{
        //         this.refs.reminder.style.display = "none";
        //      },1500)
        // }
       
    }
    componentDidMount(){
        // console.log(localStorage.phone)
        let phone = localStorage.phone;
        axios.get("/captcha/sent?phone="+phone)
        .then(data=>{

        })
    }
  
}