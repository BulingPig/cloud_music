import React from "react";
import axios from "axios";
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
                            return <li key={i}><img src={v.picUrl} alt="" /> {v.name}</li>
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
export default RecommendedSongList
