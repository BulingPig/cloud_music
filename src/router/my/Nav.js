import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import router from '../index'
export default class Nav extends Component {
    render() {
        return (
            <div id="my_midddleRouter" style={{borderBottom:"7px",borderBottomColor:"#f7f7f7",borderBottomStyle:"solid"}}>
                {
                    router.routers.map((v,i)=>{
                        return(
                            v.type === "my_middleRouter"?
                            <p key={i} className="my_midddleRouter">
                                <NavLink  className={v.iconfontName} to={v.to}></NavLink>
                                <NavLink  className="link"  to={v.to}>
                                    <span style={{ marginLeft:"20px"}}>{v.context}</span>
                                    <span style={{ marginRight:"20px"}}>{">"}</span>
                                </NavLink>
                            </p>
                            :null
                        )
                    })
                }
            </div>
        )
    }
}
