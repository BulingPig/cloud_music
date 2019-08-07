import React from 'react';
import axios from "axios"
export default class Fans extends React.Component{
    constructor(){
        super();
        this.state={
            fansList:[]
        }
    }
    render(){
        return(
            <div>
                {/* 头部 */}
                <div className="account-header">
                <span className="iconfont icon-fanhui"  onClick={()=>{this.props.history.push("/account")}}></span>
                <span>粉丝</span>
                <span className="iconfont icon-jiezou"></span>
                </div>

                {/* 粉丝列表 */}
                {
                   this.state.fansList.map((v,i)=>{
                       return(
                           <div key={i} className="attentionList">
                                <img className="attentionImg" src={v.avatarUrl} alt=""/>
                                <span className="fansName">{v.nickname}</span>
                            </div>
                       )
                   }) 
                }
                
                

                <div ref="nofans">
                    还没有粉丝
                </div>
            </div>
        )
    }
    componentDidMount(){
        
        axios.get("/user/followeds?uid="+localStorage.id)
        .then(data=>{
            this.setState({
                fansList:data.followeds
            })
            console.log(data)
            if(data.followeds.length ===0){
                this.refs.nofans.style.display = "block";
            }else{
                this.refs.nofans.style.display = "none";
            }
        })
    }
}