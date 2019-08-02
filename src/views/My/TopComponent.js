import React, { Component } from 'react'
import '../../assets/iconfont/iconfont.css'
export default class TopComponent extends Component {
    render() {
        return (
            <div className="my_top">
                <span className="iconfont icon-cloud"></span>
                <span>我的音乐</span>
                <span className="iconfont icon-jiezou"></span>
            </div>
        )
    }
}
