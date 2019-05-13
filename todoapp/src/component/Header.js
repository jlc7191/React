import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom'

const Header = props => {
    return (
        <>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    {/* React bootstrap有特別設計一個Navlink給我們用 */}
                    {/* 可以做到原本css bootstrap的nav滑鼠移入移出與點擊效果 */}
                    {/* 相關設定請參考下面 , 預設首頁要加上exact 不然會永遠是"被點擊狀態" */}
                    {/* 在react bootstrap的Navlink的class跟active效果是拆開來寫喔 */}
                    <NavLink
                        exact={true}
                        className="nav-link"
                        activeClassName="active"
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        activeClassName="active"
                        to="/Student"
                    >
                        Student
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default Header
