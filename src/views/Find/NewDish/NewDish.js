import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class NewDish extends React.Component {
    constructor() {
        super()
        this.num = 1
        this.state = {
            newDish: []
        }
    }
    render() {
        return (
            <div className={'new_pan'}>
                <h3>新碟</h3>
                <ul>
                    {
                        this.state.newDish ? (
                            this.state.newDish.map((v, i) => {
                                return (
                                    <li key={i}>
                                        <img src={v.blurPicUrl} alt="" />
                                        <h5> {v.name}</h5>
                                        <p>{v.artist.name}</p>
                                    </li>
                                )
                            })
                        ) : null
                    }
                </ul>
                <div onClick={this.loadmore.bind(this)}>
                    点击加载更多
                </div>
            </div>
        )
    }
    async loadmore() {
        this.num += 1
        if (this.num <= 4) {
            const data = await axios.get("/album/newest?offset=0&limit=3")
            var arr = []
            for (var i = 0; i < 3 * this.num; i++) {
                arr.push(data.albums[i])
            }
            this.setState({
                newDish: arr
            })
        }else{
            alert("没有更多了。。。")
        }

    }
    async  componentDidMount() {
        // 新碟
        const data = await axios.get("/album/newest?offset=0&limit=3")
        var arr = []
        for (var i = 0; i < 3; i++) {
            arr.push(data.albums[i])
        }
        this.setState({
            newDish: arr
        })
    }
}
export default withRouter(NewDish) 
