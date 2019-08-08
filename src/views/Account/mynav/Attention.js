import React from 'react';
import axios from "axios"
export default class Attention extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            attention:[]
        }
        
    }
    render(){
        return(
            <div>
                {/* 头部 */}
                <div className="account-header">
                    <span className="iconfont icon-fanhui" onClick={()=>{this.props.history.push("/account")}}></span>
                    <span>关注</span>
                    <span className="iconfont icon-jiezou"></span>
                </div>
                {
                    this.state.attention.map((v,i)=>{
                        return(
                            <div className="attentionList" key={i}>
                                <img className="attentionImg" src={v.avatarUrl} alt=""/>
                                <span className="attentionName">{v.nickname}</span>
                                <span className="signature">{v.signature}</span>
                            </div>
                        )
                    })
                }
               
            </div>
        )
    }
    componentDidMount(){
        axios.get("/user/follows?uid="+localStorage.id)
        .then(data=>{
            this.setState({
                attention:data.follow
            })
        })
    }
}