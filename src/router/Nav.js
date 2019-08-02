import React, { Component } from 'react'
import { 
    NavLink,
    Link
 } from "react-router-dom";
import router from './index'
import "../assets/iconfont/iconfont.css"
export default class Nav extends Component {
    render() {
        return (
            <div className="navWrap">
                {
                    router.routers.map((v,i)=>{
                        return(
                            
                                
                                <NavLink key={i} className="nav" exact={v.exact}  to={v.to} style={{color:"#939391"}} activeStyle={{color:"#e5443a"}}>  
                                    <div >
                                        <NavLink to={v.to} exact={v.exact} className={v.iconfontName} style={{color:"#939391",fontSize:"20px"}}  activeStyle={{color:"#fff",borderColor:"#e5443a",background:"#e5443a",fontSize:"16px"}}></NavLink>                          
                                        {v.context}
                                    </div>
                                </NavLink>
                           
                           
                        )
                    })
                }
            </div>
        )
    }
}
