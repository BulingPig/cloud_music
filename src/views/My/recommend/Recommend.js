import React, { Component } from 'react'
import axios from 'axios'
import {
    withRouter
} from 'react-router-dom'

class Recommend extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            recommendList: []
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
                        this.state.loading ? <div className="wrapLoop">loading...</div> : (
                            this.state.recommendList.map((v, i) => {
                                return (
                                    <div key={i} className="wrapLoop" onClick={() => { this.props.history.push("/my/SongListDetail/" + this.state.recommendList[i].id) }}>
                                        <p className="pic"><img className="imges" src={v.picUrl} alt="" /></p>
                                        <p className="text">{v.name}</p>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        )
    }
    async componentDidMount() {
        const data = await axios.get("/personalized?limit=12")
        this.setState({
            loading:false,
            recommendList: data.result.splice(6, 12)
        })
    }
}
export default withRouter(Recommend);