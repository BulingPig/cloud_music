import React, { Component } from 'react'

export default class UserNumber extends Component {
    render() {
        return (
            <div>
                账号
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
