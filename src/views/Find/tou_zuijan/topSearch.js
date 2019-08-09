import React from "react"
class TopSearch extends React.Component {
    render() {
        return (
            <div className={"top_search"}>
                <i className={"iconfont icon-maikefeng-xue"}></i>
                <input type={"text"} defaultValue='大家都在搜 遇到' className={"top_search_int"}/>
                    {/* <i className={"iconfont icon-xin"}></i>
                    <span>大家都在收 遇到</span>
                */}
                <i className={"iconfont icon-jiezou"}  ></i>
            </div>
        )
    }
}
export default TopSearch