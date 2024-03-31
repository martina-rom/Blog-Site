import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm"> Website </span>
                <span className="headerTitleLg"> Blog </span>
            </div>
            <img 
            className="headerImg" 
            src="https://media-api.xogrp.com/images/33c2fe99-b80d-4e05-843f-3d5998084bc7~rs_310.210"  
            alt=""/> 
        </div>
    )
}
