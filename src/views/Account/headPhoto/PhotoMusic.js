import React from 'react';
import axios from "axios"
import {
    Link
} from "react-router-dom"
export default class PhotoMusic extends React.Component{
    constructor(){
        super();
        this.state={
            uid:""
        }
    }
    render(){
        return(
            <div className="photo-margintop">
                <p>
                    <Link to={"/my/SongListDetail/"+this.state.uid}>歌单（1）</Link>
                    
                </p>

            </div>
        )
    }
    componentDidMount(){
        axios.get("/user/playlist?uid="+localStorage.id)
        .then(data=>{
            console.log(data.playlist[0].id)
            this.setState({
                uid:data.playlist[0].id
            })
        })
    }
}