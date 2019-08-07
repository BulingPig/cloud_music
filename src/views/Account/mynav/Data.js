import React from 'react';
export default class Data extends React.Component{
    render(){
        return(
            <div>
                {/* 头部 */}
                <div className="account-header">
                <span className="iconfont icon-fanhui"  onClick={()=>{this.props.history.push("/account")}}></span>
                <span>我的资料</span>
                <span className="iconfont icon-jiezou"></span>
                </div>
            </div>
        )
    }
}