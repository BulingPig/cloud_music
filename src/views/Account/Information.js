import React from 'react';
import router from "../../router/index"
import {
    NavLink,
} from "react-router-dom"
export default class Information extends React.Component{
    render(){
        return(
            <div>
                 {/* 头部 */}
                <div className="account-header">
                <p className="login-back iconfont icon-fanhui" onClick={()=>{this.props.history.push("/account")}}></p>
                <span>我的消息</span>
                <span style={{color:"#d73d33"}}>4</span>
                </div>
                <div className="myInformation">
                    {
                        router.routers.map((v,i)=>{
                            return(
                                v.type === 4?
                                <div key={i} style={{float:"left"}} className="everyone">
                                    <NavLink to={v.to}>{v.context}</NavLink>
                                </div>:null
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        
    }
}