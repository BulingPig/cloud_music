import React, { Component } from 'react'
import TopComponent from './TopComponent'
import TabComponent from './TabComponent'
export default class My extends Component {
    render() {
        return (
          
                <div id="my">
                    <TopComponent></TopComponent>
                    <TabComponent></TabComponent>
                </div>
           
        )
    }
    componentDidMount(){
        document.title = this.props.meta.title;
    }
}
