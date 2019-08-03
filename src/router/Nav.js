import React, { Component } from 'react'
import { 
    NavLink,
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
                            v.isShow?null:
                            <div key={i}>
                                <NavLink to={v.to} exact={v.exact} className={v.iconfontName} style={{
                                    borderColor:"#ecebe9",
                                    background:"#ecebe9",
                                    fontSize:"20px"
                                    }}  activeStyle={{
                                        color:"#fff",
                                        borderRadius:"50%",
                                        borderColor:"#e5443a",
                                        background:"#e5443a",
                                        fontSize:"16px"
                                        }}>
                                </NavLink>                          
                                <NavLink  className="nav" exact={v.exact}  to={v.to} style={{color:"#939391"}} activeStyle={{color:"#e5443a"}}>                                     
                                    {v.context}
                                </NavLink>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}
