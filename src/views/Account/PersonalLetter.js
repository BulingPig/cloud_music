import React from 'react';
import axios from "axios"
export default class PersonalLetter extends React.Component{
    constructor(){
        super();
        this.state={
            personalList:[]
        }
    }
    render(){
        return(
            <div>
                <div ref="no">暂无私信</div>
                <div ref="yes">
                {
                    this.state.personalList.map((v,i)=>{
                        
                        return(
                            <div className="attentionList" key={i}>
                                <img className="attentionImg" src={v.img} alt=""/> 
                                <span className="attentionName">{v.name}</span>
                                 <span className="signature">{v.msg}</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            
        )
    }
    componentWillMount(){
        var arr = this.state.personalList;
        axios.get("/msg/private")
        .then(data=>{
            // console.log("私信列表",data.msgs)
            if(data.msgs.length>0){
                this.refs.yes.style.display="bloack";
                this.refs.no.style.display="none";
            }else{
                this.refs.yes.style.display="none";
                this.refs.no.style.display="blcok";
            }
            for(var i=0; i<data.msgs.length; i++){
                arr.push({
                    name:data.msgs[i].fromUser.nickname,
                    msg:JSON.parse(data.msgs[i].lastMsg).msg,
                    img:data.msgs[i].fromUser.avatarUrl
                })
            }
            this.setState({
              personalList:arr
            })
        })
    }
}