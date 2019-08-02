import React, { Component } from 'react'

export default class Vidue extends Component {
    render() {
        return (
            <div>
                视频
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
