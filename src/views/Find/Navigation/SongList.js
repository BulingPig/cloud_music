import React from "react";
// import {NavLink} from "react-router-dom"
import axios from "axios"
class SongList extends React.Component {
    constructor() {
        super()
        this.typelist = ["推荐", "官方", "粤语", "华语", "说唱"]
        this.state = {
            playlists: []
        }
    }
    render() {
        return (
            <div id={"SongListSquare"}>
                <div className={"top_tab"}>
                    <div className={"top_title"}>
                        <i className={"iconfont icon-fanhui"} onClick={() => { this.props.history.go(-1) }}></i>
                        <h3>歌单广场</h3>
                    </div>          
                    <ul>
                        {
                            this.typelist.map((v, i) => {
                                return <li key={i} onClick={this.changeSongList.bind(this, v)}>{v}</li>
                            })
                        }
                    </ul>
                </div>
                <div className={'song_list_show'}>
                    {
                        this.state.playlists.map((v, i) => {
                            return (
                                <div key={v.id} onClick={() => this.props.history.push('/my/SongListDetail/' + v.id)}>
                                    <div><img style={{ width: "100px" }} src={v.coverImgUrl} alt="" /></div>
                                    <p>{v.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    async  changeSongList(v) {
        if (v === "推荐") {
            const data = await axios.get("/top/playlist/highquality?before=1503639064232&limit=18")
            this.setState({
                playlists: data.playlists
            })
        } else {
            const data = await axios.get("/top/playlist?before=1503639064232&limit=18&cat=" + v)
            this.setState({
                playlists: data.playlists
            })
        }
    }
    async  componentDidMount() {
        // 推荐 默认
        const data = await axios.get("/top/playlist/highquality?before=1503639064232&limit=18")
        // console.log(data)
        this.setState({
            playlists: data.playlists
        })
    }
}
export default SongList;