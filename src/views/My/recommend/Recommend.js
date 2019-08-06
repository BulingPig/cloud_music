import React, { Component } from 'react'
import axios from 'axios'

export default class Recommend extends Component {
    constructor(){
        super();
        this.state = {
            recommendList:[]
        }
    }
    render() {
        console.log(this.state.recommendList)
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
                                <div key={i} className="wrapLoop" >
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
        const {data} = await axios.get("/wangyi/personalized?limit=6")
        //console.log(data.result)
        this.setState({
            recommendList:data.result
        })
    }
}
