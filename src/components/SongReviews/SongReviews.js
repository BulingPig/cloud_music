import React from "react";
import axios from "axios";
import timeFilter from "./../../common/filter/TimeFilter";
class SongReviews extends React.Component {
    constructor() {
        super()
        this.state = {
            hotComments: [],
            comments: []
        }
    }
    render() {
        // console.log(this.props,9090)
        return (
            <div>
                <span onClick={() => this.props.history.go(-1)} ><i className={"iconfont icon-fanhui"}>评论</i></span>
                <div>
                    <h3>热门评论</h3>
                    <hr />
                    {
                        this.state.hotComments.map((v, i) => {
                            return (
                                <div className={"commentUsInfo"} key={v.commentId}>
                                    <div className={"commentsUsImg"}>
                                        <img style={{ width: "50px" }} src={v.user.avatarUrl} alt="" />
                                        <div className={'commentsUsName'}>
                                            <span>{v.user.nickname}</span>
                                            <span>{timeFilter(1565271953851)}</span>
                                        </div>
                                    </div>
                                    <p>{v.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h3>最新评论 </h3>
                    <hr />
                    {
                        this.state.comments.map((v, i) => {
                            return (
                                <div className={"commentUsInfo"} key={v.commentId}>
                                <div className={"commentsUsImg"}>
                                    <img style={{ width: "50px" }} src={v.user.avatarUrl} alt="" />
                                    <div className={'commentsUsName'}>
                                        <span>{v.user.nickname}</span>
                                        <span>{v.time}</span>
                                    </div>
                                </div>
                                <p>{v.content}</p>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    async  componentDidMount() {
        // console.log(this.props)
        const data = await axios.get('comment/music?id=' + this.props.match.params.id + '&limit=5')
        console.log(data, 3334)
        this.setState({
            hotComments: data.hotComments,
            comments: data.comments
        })
    }
}
export default SongReviews;

