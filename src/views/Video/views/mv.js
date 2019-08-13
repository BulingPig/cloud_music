import React, { Component } from 'react'
import axios from 'axios'


export default class Mv extends Component {
    constructor() {
        super()
        this.num=10
        this.ind=0
        this.state = {
            loading: true,
            data: [],
            arrUrl: [],
            arri: []
        };
    }

    handlePlay = (value, e) => {
        if (e.target.paused) {
            e.target.play();
        } else {
            e.target.pause();
        }


        var videos = document.getElementsByTagName('video');
        for (var i = videos.length - 1; i >= 0; i--) {
            (function () {
                var p = i;
                videos[p].addEventListener('play', function () {
                    pauseAll(p);
                })
            })()
        }
        function pauseAll(index) {
            for (var j = videos.length - 1; j >= 0; j--) {
                if (j != index) videos[j].pause();
            }
        };
    }

    render() {
        const arrUrl = this.state.arrUrl
        return (
            <div className="listWrap" id="list">
                {
                    this.state.loading ? <div className={'wrapimgvido'}>loading...</div> : (
                        <React.Fragment>
                            {
                                arrUrl.map((item, index) => {
                                    return (
                                        <div key={index} >
                                            <div className="wrapimgvido" >
                                                <video className="video" id="videoPlay" poster={item.img}
                                                    preload="auto" onClick={this.handlePlay.bind(this, item.id)} >
                                                    <source src={item.url} type="video/mp4">
                                                    </source>
                                                </video>
                                            </div>
                                            <h3>{item.name}:{item.songName}</h3>
                                            <div className="shadow"></div>
                                        </div>
                                    )
                                })
                            }
                            <div className={"more_video"} onClick={this.morevideo.bind(this)}>点击加载更多</div>
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
    async  morevideo(){
        this.ind+=1
        this.getvideo(this.ind)
    }

    async componentDidMount() {
        this.getvideo(0)
    }
    async  getvideo(ind){
        var arr = this.state.arrUrl;
        const { data } = await
            axios.get("/top/mv?offset="+ind+"&limit=10")
        this.setState({
            data: data
        })
        for (var i = 0; i < data.length; i++) {
            arr.push({
                name: data[i].artistName,
                songName: data[i].name,
                id: data[i].id,
                img: data[i].cover,
            })
        }
        for (var j = 0; j < data.length; j++) {
            await axios.get("/mv/url?id=" + data[j].id)
                .then(({ data }) => {
                    Object.assign(arr[j], { url: data.url })
                })
        }
        this.setState({
            loading: false,
            arrUrl: arr
        })
    }
}
