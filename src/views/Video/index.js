import React, { Component } from 'react'
import { BrowserRouter ,Switch,Route,Redirect,NavLink,Link} from 'react-router-dom'
import "../../assets/iconfont/iconfont.css"
import "../../assets/iconfont-account1/iconfont.css"
import "../../assets/sass/account.scss"
import router from "../../router"
import axios from "axios"

import Hello from './views/hello'
import Look from './views/look'
import MV from './views/mv'

import Navigation from './views/Navigation'
import List from './views/mv'
// import ShaoApp from './components/shaoapp'

import '../../assets/iconfont/iconfont.css'
import '../../assets/sass/video.scss'
export default class Video extends Component {
    render() {
        return (
            <div id="video">
                <Navigation></Navigation> 
              
                <div className="">
                    <Switch>
                        <Route path='/Video/hello' component={Hello}></Route>
                        <Route path='/Video/look' component={Look}></Route>
                        <Route path='/Video/mv' component={MV}></Route>

                        <Redirect to='/Video/mv'></Redirect>
                    </Switch>
                </div>

            </div>
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
