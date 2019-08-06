import React from 'react'
import "../../../assets/sass/video.scss" 

export default class Navigation extends React.Component {
    constructor(){
        super()
        this.state={
            value:"那女孩对我说"
        };
    }
    render() {
        return (
            <div className="navBar">
                <div className="navoinp">
                    <input className="navoinp" type="text" defaultValue={this.state.value} />
                </div>
                <span className="iconfont icon-renyuansousuo iconone"></span>
                <span className="iconfont icon-video icontwo"></span>
                <span className="iconfont icon-jiezou iconthree"></span>
            </div> 
        )
    }
}
