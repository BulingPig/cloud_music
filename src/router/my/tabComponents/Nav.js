import React, { Component } from 'react'
import router from '../../index'
import { NavLink } from "react-router-dom";
import '../../../assets/my_iconfont2/iconfont.css'
export default class Nav extends Component {
    render() {
        return (
            <div className='swiper-wrapper'>
                {
                    router.routers.map((v,i)=>{
                        return(
                            v.type === "tab"?
                            <p className="swiper-slide" key={i}>
                                <NavLink to={v.to} className="wrap" exact={v.exact}>
                                   <span className={v.iconfontName}></span>
                                </NavLink>
                                <NavLink to={v.to} className="text" exact={v.exact} >{v.context}</NavLink>
                            </p>
                            :null
                        )
                    })
                }
            </div>
        )
    }
}
