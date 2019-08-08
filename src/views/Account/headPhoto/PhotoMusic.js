import React from 'react';
import axios from "axios"
export default class PhotoMusic extends React.Component{
    render(){
        return(
            <div>
                <p>歌单（1）</p>
            </div>
        )
    }
    component(){
        axios.get("/user/playlist?uid="+localStorage.id)
        .then(data=>{
            console.log(data)
        })
    }
}