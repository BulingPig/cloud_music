import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, NavLink, Link } from 'react-router-dom'

import "../../../assets/swiper/css/swiper.min.css"
import Swiper from 'swiper'


import Hello from './hello'
import Look from './look'
import MV from './mv'

export default class Navigation extends React.Component {
    constructor(){
        super()
        this.state={
            value:"那女孩对我 xx说"
        };
    }

    render() {
        return (
            <div className="navBar">
                <div className="">
                    <input className="navoinp" type="text" defaultValue={this.state.value} />
                </div>
                <span className="iconfont icon-renyuansousuo iconone"></span>
                <span className="iconfont icon-video icontwo"></span>
                <span className="iconfont icon-jiezou iconthree"></span>

                {<div className="swiper-container">
                    <div className="swiper-wrapper" >
                            <div className="swiper-slide" >
                                <Link to={'/Video/mv'} >  MV</Link>
                            </div>
                            <div className="swiper-slide" > 
                                <Link to={'/Video/hello'} >  推荐 </Link>
                            </div>
                            <div className="swiper-slide" >
                                <Link to={'/Video/look'} > 直播</Link>
                            </div>
                            <div className="swiper-slide" > <Link to={'/Video/mv'} > 遇见</Link></div>
                            <div className="swiper-slide" > <Link to={'/Video/look'} > 现场</Link></div>
                            <div className="swiper-slide" > <Link to={'/Video/mv'} > 翻唱</Link></div>
                      
                          
                        </div>
                    {/* <div className='swiper-pagination'></div> */}
                </div> }

            </div> 
        )
    }


    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container', {
            slideToClickedSlide: true,
            centeredSlides: true,
            slidesPerView: 3,
          
        })
    }
}



