import React from "react";
import axios from 'axios';
class Rank extends React.Component {
    constructor() {
        super()
        this.state = {
            RankList_official: [],
            RankList_more: [],
        }
    }
    render() {
        // console.log(2323)
        return (
            <div id={"FindRank"}>
                <div className={"top_title"}>
                    <i className={"iconfont icon-fanhui"} onClick={()=>{this.props.history.go(-1)}}></i>               
                    <span>排行榜</span>
                </div>
                <div>
                    <h3>官方榜</h3>
                    {
                        this.state.RankList_official ? (
                            this.state.RankList_official.map((v, i) => {
                                return (
                                    <div key={i} className={'RankList_official_single_content'} onClick={() => this.props.history.push('/my/SongListDetail/' + v.id)}>
                                        <img src={v.coverImgUrl} className={"RankList_official_img"} />
                                        <div className={"RankList_official_content"}>
                                            {
                                                v.tracks.map((v, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            <span>{++i}.{v.first}-{v.second}</span>
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        ) : null

                    }
                </div>
                <div className={"more_rank"}>
                    <h3>更多榜单</h3>
                    <div className={"RankList_more"} >
                        {
                            this.state.RankList_more ? (
                                this.state.RankList_more.map((v, i) => {
                                    return (
                                        <div key={i} className={'RankList_more_single_content'} onClick={() => this.props.history.push('/my/SongListDetail/' + v.id)}>
                                            <img src={v.coverImgUrl} className={"RankList_more_img"} />
                                            <p>{v.name}</p>
                                        </div>
                                    )
                                })
                            ) : null

                        }
                    </div>
                </div>
            </div>
        )
    }
    async  componentDidMount() {
        var R_off = []
        var R_more = []
        const data = await axios.get("/toplist/detail")
        console.log(data)
        for (var i = 0; i < data.list.length; i++) {
            if (i < 4) { R_off.push(data.list[i]); console.log(222) }
            else { R_more.push(data.list[i]) }
        }
        console.log(R_more)
        this.setState({
            RankList_official: R_off,
            RankList_more: R_more
        })
    }
}
export default Rank;