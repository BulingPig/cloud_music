import React, { Component } from 'react'

import Navigation from './components/Navigation'
import List from './components/List'
import '../../assets/iconfont/iconfont.css'
import '../../assets/sass/video.scss'

export default class Vidue extends Component {
    render() {
        return (
            <div className="vidWrap">
                <Navigation/>
                <List/>
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
