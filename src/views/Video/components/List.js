import React, { Component } from 'react'
import axios from 'axios'


export default class List extends Component {
    constructor() {
        super()
        this.state = {
           data: [],
           arrUrl:[],
           arri:[]
        };
    }
    
    // handlePlay=()=>{
    //     var video1 = document.getElementById("videoPlay");

    //     // video1.οnclick = function () {
    //         if (video1.paused) {
    //             video1.play();
    //         } else {
    //             video1.pause();
    //         }
    //     // }
    // }

    render() {
        
        const arrUrl = this.state.arrUrl 
        console.log(123,arrUrl[0]);
        return (
            <div className="listWrap" id="list">
                {
                    arrUrl.map((item, index) => {
                        return (
                            <div key={index} >
                                <div className="wrapimgvido" >
                                    <video className="video" id="videoPlay" poster={item.img}   controls  >
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
            </div>
           
        )
    }
   
    
    async componentDidMount() {
        var arr = this.state.arrUrl;
        const {data} = await    axios.get("/top/mv?limit=10")
        // console.log(data,12345)
            this.setState({
                data:data
            })
            for (var i = 0; i < data.length; i++) {
                arr.push({
                    name: data[i].artistName,
                    songName: data[i].name,
                    id:data[i].id,
                    img: data[i].cover,
                })
            }
            for(var j=0; j<data.length; j++){
                await axios.get("/mv/url?id=" + data[j].id)
                    .then(({ data }) => {
                        Object.assign(arr[j], { url: data.url })
                    })
            }
            this.setState({
                arrUrl: arr
            })
     }
     
}
