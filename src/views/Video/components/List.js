import React, { Component } from 'react'
import axios from 'axios'

import "../../../assets/sass/video.scss"

export default class List extends Component {
    constructor() {
        super()
        this.state = {
           data: [],
           
        //    pageIndex: 1
        };
    }
    render() {
        const { data } = this.state
        console.log(data);

        return (
            <div >
                {
                    this.state.data.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <h3>{item.artistName}:{item.name}</h3>
                                {/* <video src ={ "http://localhost:4000/mv/url?id=" + item.id} autoPlay='autoPlay'></video> */}
                                <img width={"100px"} src={item.cover} alt="" />
                                <hr />
                            </div>
                        )
                    })
                }
                {/* <input type="button" onClick={() => this.getListMore.call(this, ++this.state.pageIndex)} value={"加载更多"} /> */}
            </div>
           
        )
    }

    
    async componentDidMount() {
        const {data} = await    axios.get("/top/mv?limit=10")
            console.log(data,12345)
            this.setState({
                data:data
            })
            console.log(this.state.data,123)
        
     }
}
