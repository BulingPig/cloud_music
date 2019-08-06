import React, { Component } from 'react'

export default class Account extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
