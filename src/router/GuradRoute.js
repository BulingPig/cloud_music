import React, { Component } from 'react'
import Nav from './Nav'

class GuradRoute extends Component {
    render() {
        //console.log(1111,this.props)
        return (
            <div>
                <this.props.component {...this.props}/>
                <Nav></Nav>
            </div>
        )
    }
}

export default GuradRoute
