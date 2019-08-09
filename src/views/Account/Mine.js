import React from 'react';
import axios from "axios"
export default class Mine extends React.Component{
    render(){
        return(
            <div>
                <div>暂无消息</div>

            </div>
            
        )
    }
    componentDidMount(){
        axios.get("/msg/forwards")
        .then(data=>{
            console.log("@wo",data)
        })
    }
}