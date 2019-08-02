import React, { Component } from 'react'
export default class Find extends Component {
    render() {
        return (
            <div>
                发现
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
