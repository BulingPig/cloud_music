import React, { Component } from 'react'
import router from '../../../router'

import {
    NavLink
  } from "react-router-dom"

 export default class middleComponents extends Component {
    render() {
        
        return (
         <div>
                {
                    router.routers.map((v,i)=>{
                        return(
                            v.type === "my_middleRouter"?
                            <p key={i}><NavLink to={v.to}>{v.context}</NavLink></p>
                            :null
                        )
                    })
                }
         </div>
        )
    }
}
 