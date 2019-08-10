import React from "react";
import '../../../assets/swiper/css/swiper.min.css'
import Swiper from 'swiper'
import axios from "axios";
class Carousel extends React.Component {
    constructor() {
        super()
        this.state = {
            swiperUrl: []
        }
    }
    render() {
        return (
            <div className="wrapper">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.swiperUrl.map((v, i) => {
                                return <div key={i} className="swiper-slide"><img src={v.pic} alt="" /></div>
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
    async  componentDidMount() {
        // 轮播
        const data = await axios.get("banner?type=2")
        this.setState({
            swiperUrl: data.banners
        })
        new Swiper('.swiper-container', {
            freeMode: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            loop: true,
            speed: 300,
            pagination: {
                el: '.swiper-pagination',
            },
            preventInteractionOnTransition: true,
        })
    }
}
export default Carousel
