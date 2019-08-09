import React, { Component } from 'react'
import TopComponent from './TopComponent'
import TabComponent from './tabComponents/TabComponent'
import MyLoveMusic from './myLoveMusicComponent/MyLoveMusic'
import Nav from '../../router/my/middlerouters/Nav'
import Recommend from './recommend/Recommend'
import { withRouter } from "react-router-dom";
class My extends Component {
    render() {
        //console.log(this.props)
        return (
          
                <div id="my">  
                    <TopComponent></TopComponent>
                    <TabComponent></TabComponent>
                    <Nav></Nav>
                    <MyLoveMusic {...this.props}></MyLoveMusic>
                    <Recommend></Recommend>
                </div>
           
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
export default withRouter(My) 