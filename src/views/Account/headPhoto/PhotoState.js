import React from 'react';
import axios from "axios"
export default class PhotoState extends React.Component{
    constructor(){
        super();
        this.state={
            stateList:[]
        }
    }
    render(){
        return(
            <div className="photo-margintop">
                 {
                    this.state.stateList.map((v,i)=>{
                        return(
                            <div className="stateList" key={i}>
                                <img className="statePhoto" src={localStorage.pic} alt=""/>
                                <p className="stateNickname">{v.user.nickname}</p>
                                <p className="stateSong">分享单曲：</p>
                                <p className="stateTime">26分钟前</p>
                                <p className="stateContext">{JSON.parse(v.json).msg}</p>
                                <img className="statePicture" src={v.pics[0].squareUrl} alt=""/>
                                <div className="stateGe">
                                    {JSON.parse(v.json).song.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        axios.get("/user/event?uid="+localStorage.id)
        .then(data=>{
            // console.log(data.events.pic[)
            this.setState({
                stateList:data.events
            })
        })
    }
}