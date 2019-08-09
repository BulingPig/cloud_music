import React, { Component } from 'react'
import Nav from './Nav'
import {
    withRouter
} from "react-router-dom"

class GuradRoute extends Component {
    render() {
        return (
            <div>
                <this.props.component {...this.props}/>
                {
                    this.props.isShow?<Nav></Nav>:null
                }
            </div>
        )
    }
}

export default withRouter(GuradRoute)
