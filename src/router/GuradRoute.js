import React, { Component } from 'react'
import Nav from './Nav'
import {
    withRouter
} from "react-router-dom"

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

export default withRouter(GuradRoute)
