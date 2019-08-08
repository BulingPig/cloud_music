import React from "react";
// import {NavLink} from "react-router-dom"
import axios from "axios"
class SongList extends React.Component {
    constructor() {
        super()
        this.state = {
            playlists: []
        }
    }
    render() {
        return (
            <div id={"SongListSquare"}>
                <div className={"top_tab"}>
                    <h3>歌单广场</h3>
                    <ul>
                        <li style={{ color: "red" }}>推荐</li>
                        <li>官方</li>
                        <li>精品</li>
                        <li>华语</li>
                        <li>说唱</li>
                    </ul>
                </div>
                <div className={'song_list_show'}>
                    {
                        this.state.playlists.map((v, i) => {
                            return (
                                <div key={v.id}>
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
    async  componentDidMount() {
        const data = await axios.get("/top/playlist/highquality?before=1503639064232&limit=6")
        console.log(data)
        this.setState({
            playlists: data.playlists
        })
    }
}
export default SongList;