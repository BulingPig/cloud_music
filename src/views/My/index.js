import React, { Component } from 'react'
import TopComponent from './TopComponent'
import TabComponent from './tabComponents/TabComponent'
import MyLoveMusic from './myLoveMusicComponent/MyLoveMusic'
import Nav from '../../router/my/Nav'
import Recommend from './recommend/Recommend'
export default class My extends Component {
    render() {
        //console.log(this.props)
        return (
          
                <div id="my">  
                    <TopComponent></TopComponent>
                    <TabComponent></TabComponent>
                    <Nav></Nav>
                    <MyLoveMusic></MyLoveMusic>
                    <Recommend></Recommend>
                </div>
           
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
