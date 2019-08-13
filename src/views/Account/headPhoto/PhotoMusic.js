import React from 'react';
import axios from "axios"
import {
    Link
} from "react-router-dom"
export default class PhotoMusic extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            coverImgUrl:"",
            id:'',
            userId:""
        }
    }
    render(){
        return(
            <div className="photo-margintop">
               
                    <p className="loveSong">歌单</p> 
                    <Link to={"/my/SongListDetail/"+this.state.id}>
                        <div className="loveName">{this.state.name}</div>
                        <img className="loveImg" src={this.state.coverImgUrl} alt=""/>
                    </Link>

                    
                

            </div>
        )
    }
     componentDidMount(){
        if(this.props.location.state){
            localStorage.userId = this.props.location.state.userId;
            axios.get("/user/playlist?uid="+localStorage.userId)
            .then(data=>{
                console.log(data)
                this.setState({
                    name:data.playlist[0].name,
                    coverImgUrl:data.playlist[0].coverImgUrl,
                    id:data.playlist[0].id
                })
            })
        }else{
             axios.get("/user/playlist?uid="+localStorage.id)
            .then(data=>{
                console.log(data)
                this.setState({
                    name:data.playlist[0].name,
                    coverImgUrl:data.playlist[0].coverImgUrl,
                    id:data.playlist[0].id
                })
            })
        }
        
        // if(this.state.userId){
           
       
       
    }
}
