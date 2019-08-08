import React from "react";
import axios from "axios";
import {
    Link,
} from "react-router-dom";
class Recommend extends React.Component {
    constructor() {
        super()
        this.state = {
            tenMuisc: [],
        }
    }
    render() {
        return (
            <div>
                推荐  
                {
                    this.state.tenMuisc.map((v, i) => {
                        return  <p key={i}> <Link  to={'/bofang/'+v.id} >{v.ar[0].name}---{v.name}</Link></p>
                    })
                }
            </div>
        )
    }
    async  componentDidMount() {
        const  data  = await axios.get("playlist/detail?id=28769028")
        this.setState({
            tenMuisc:data.playlist.tracks
        })
    }
}

export default Recommend;