import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom"
import { from } from "_array-flatten@2.1.2@array-flatten";
class RecommendedSongList extends React.Component {
    constructor() {
        super()
        this.state = {
            recommendedSongList:[]
        }
    }
    render() {
        return (
            <div className={'song_list'}>
                <h3>推荐歌单</h3>
                <ul>
                    {
                        this.state.recommendedSongList.map((v, i) => {
                            return <li key={i} onClick={()=>this.props.history.push('/my/SongListDetail/'+v.id)}><img src={v.picUrl} alt="" /><span> {v.name}</span></li>
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
          //推荐歌单
          axios.get("personalized?limit=6")
          .then((data) =>
              this.setState({
                recommendedSongList: data.result
              })
          )
    }
}
export default withRouter(RecommendedSongList) 
