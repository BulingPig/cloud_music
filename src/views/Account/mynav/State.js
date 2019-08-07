import React from 'react';
import axios from "axios"
export default class State extends React.Component{
    render(){
        return(
            <div>
                {/* 头部 */}
                <div className="account-header">
                <span className="iconfont icon-fanhui"  onClick={()=>{this.props.history.push("/account")}}></span>
                <span>动态</span>
                <span className="iconfont icon-jiezou"></span>
                </div>
                {/* 评论区 */}
                <div ref="haveno">暂无相关动态</div>
            </div>
        )
    }
    componentDidMount(){
        axios.get("/user/event?uid="+localStorage.id)
        .then(data=>{
            // console.log(data)
            if(data.events.length===0){
                this.refs.haveno.style.display="block"
            }else{
                this.refs.haveno.style.display="none"
            }
        })
    }
}