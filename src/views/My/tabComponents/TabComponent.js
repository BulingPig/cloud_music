import React, { Component } from 'react'
import '../../../assets/swiper/css/swiper.min.css'
import swiper from 'swiper'
import Nav from '../../../router/my/tabComponents/Nav'

export default class TabComponent extends Component {
    render() {
        return (
            <div id="my_tab">
                <div className='swiper-container'>
                    <Nav></Nav>
                </div>
            </div>
        )
    }
    componentDidMount(){
         new swiper('.swiper-container', {
            slidesPerView: 'auto',
            freeMode : true,
            freeModeMomentum : true,
         })
    }
}



