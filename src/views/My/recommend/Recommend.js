import React, { Component } from 'react'
import axios from 'axios'
import {
    withRouter
} from 'react-router-dom'

class Recommend extends Component {
    constructor(){
        super();
        this.state = {
            recommendList:[]
        }
    }
    render() {
        
        return (
            <div id="recommend">
                <p>
                    <span id="heart">
                        <i className="iconfont icon-xin"></i>
                    </span>
                    <span>推荐歌单</span>
                </p>
                <div id="songList">
                    {
                        this.state.recommendList.map((v,i)=>{
                            return(
                                <div key={i} className="wrapLoop" onClick={()=>{this.props.history.push("/my/SongListDetail/"+this.state.recommendList[i].id)}}>
                                    <p className="pic"><img className="imges" src={v.picUrl} alt=""/></p>
                                    <p className="text">{v.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    async componentDidMount(){
        const data = await axios.get("/personalized?limit=6")
        this.setState({
            recommendList:data.result
        })
    }
}
export default withRouter(Recommend);