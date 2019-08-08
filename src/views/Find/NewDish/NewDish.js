import React from "react";
import axios from "axios";
class NewDish extends React.Component {
    constructor() {
        super()
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
                                return <li key={i}><img src={v.picUrl} alt="" /><h5> {v.name}</h5><p>{v.artist.name}</p></li>
                            })
                        ) : null
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        // 新碟
        axios.get("top/album?offset=0&limit=3")
            .then((data) =>
                this.setState({
                    newDish: data.albums
                })
            )
    }
}
export default NewDish
