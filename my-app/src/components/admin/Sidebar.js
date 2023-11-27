import React from 'react'
import {BsCart3} from 'react-icons/bs'



function Sidebar() {
    return (
    <aside id = "sidebar">
        <div className = 'sidebar-title'>
            <div className = 'sidebar-brand'>
                <BsCart3 className = 'icon_header'/> SHOP
            </div>
            <span className = 'icon close_icon'>X</span>
        </div>

        <ul className = 'sidebar-list'>
            <li className = 'sidebar-list-item'>
                <a href = ''>
                    <BsCart3 className = 'icon'/> Employee Information
                </a>
                </li>
                <li className = 'sidebar-list-item'>
                <a href = ''>
                    <BsCart3 className = 'icon'/> Products
                </a>
                </li>
                <li className = 'sidebar-list-item'>
                <a href = ''>
                    <BsCart3 className = 'icon'/> Orders
                </a>
                </li>
            </ul>
    </aside>
    )
}

export default Sidebar