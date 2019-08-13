import React from 'react'
import axios from 'axios'
import {
    BrowserRouter as router,
    Link,
} from "react-router-dom";
class Recommend extends React.Component {
    constructor() {
        super()
        this.state = {
            shitiaoyinyue: [],
        }
    }
    render() {
        return (
            <div>
                推荐
                {
                    this.state.shitiaoyinyue.map((v, i) => 
                        <p key={i}> <Link  to={'/bofang/'+v.id} >{v.ar[0].name}---{v.name}</Link></p>
                    )
                }
            </div>
        )
    }
    async  componentDidMount() {
        const  data  = await axios.get("playlist/detail?id=28769028")
        this.setState({
            shitiaoyinyue:data.playlist.tracks
        })
    }
}

export default Recommend;