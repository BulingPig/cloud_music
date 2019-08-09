import React from 'react'
import axios from 'axios'
class Live extends React.Component {
    constructor() {
        super()
        this.state = {
            lrc: [],
        }
    }
    render() {
        return (
            <div>         
                <audio src={"https://music.163.com/song/media/outer/url?id="+ this.props.match.params.songid+".mp3 " } controls="controls"
                    autoPlay="autoplay"
                >
                </audio>
                <div>                
                    {
                        this.state.lrc.map((v, i) => {
                            return (
                                <div key={i}>
                                   <p> {"["+v}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    async  componentDidMount() {
        const  data  = await axios.get("/lyric?id=" + this.props.match.params.songid)
        this.setState({
            lrc: data.lrc.lyric.split("[")
        })
    }
}
export default Live;
