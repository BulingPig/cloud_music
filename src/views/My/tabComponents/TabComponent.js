import React, { Component } from 'react'
import '../../../assets/swiper/css/swiper.min.css'
import swiper from 'swiper'

export default class TabComponent extends Component {
    render() {
        return (
            <div className="my_tab">
                <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                        
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var mySwiper = new swiper('.swiper-container', {
            freeMode:true,
         })
    }
}



