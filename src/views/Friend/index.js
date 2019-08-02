import React, { Component } from 'react'

export default class Friend extends Component {
    render() {
        return (
            <div>
                朋友
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
