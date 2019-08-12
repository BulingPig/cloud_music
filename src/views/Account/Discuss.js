import React from 'react';
import axios from "axios"
export default class Discuss extends React.Component{
    constructor(){
        super();
        this.state={
            discussList:[]
        }
    }
    render(){
        return(
            <div>
                <div ref="no">暂无评论</div>
                <div ref="yes">
                {
                    this.state.discussList.map((v,i)=>{
                        
                        return(
                            <div className="attentionList" key={i}>
                                <img className="attentionImg" src={v.img} alt=""/> 
                                <span className="attentionName">{v.name}</span>
                                 <span >{v.contents}</span>
                                 <p className="signature">{v.song}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            
        )
    }
    componentDidMount(){
        axios.get("/msg/comments?uid="+localStorage.id)
        .then(data=>{
            if(data.comments.length>0){
                this.refs.yes.style.display="bloack";
                this.refs.no.style.display="none";
            }else{
                this.refs.yes.style.display="none";
                this.refs.no.style.display="blcok";
            }
            var arr = this.state.discussList;
            for(var i=0;i<data.comments.length;i++){
                arr.push({
                    song:data.comments[i].beRepliedContent,
                    contents:data.comments[i].content,
                    name:data.comments[i].user.nickname,
                    img:data.comments[i].user.avatarUrl,
                    
                })
            }
            this.setState({
                discussList:arr
            })
        })
        axios.get("/msg/private/history?uid="+localStorage.id)
        .then(data=>{
            // console.log(1112222333333,data)
        })
    }
}