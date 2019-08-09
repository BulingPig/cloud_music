
import './assets/sass/index.scss';
import React, { Component } from 'react'
import router from './router'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import GuradRoute from './router/GuradRoute'
class App extends Component {
  componentWillMount(){
  }
  render() {
    return (
      <div className="App">
        <Router>
         
          {
            router.routers.map((v,i)=>{
              return(
                 <Route key={i} path={v.path} exact={v.exact} render={()=><GuradRoute {...v}></GuradRoute>}></Route>
              )
            })
          }
        </Router>
      </div>
    )
  }
}

export default App;
