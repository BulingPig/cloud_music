import React, { Component } from 'react'

import Navigation from './components/Navigation'
import List from './components/List'
import '../../assets/iconfont/iconfont.css'
import '../../assets/sass/video.scss'

export default class Video extends Component {
    render() {
        return (
            <div id="video">
                <Navigation></Navigation>
                <List></List>
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
