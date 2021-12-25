import React, {} from 'react';
import * as GiIcons from 'react-icons/gi';
import './navbar.css'

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';



function Navbar() {
    return (
        <div className='menu'>
            
            <h1 className='logo_name'>
                <GiIcons.GiModernCity />
                <br />
                CITYZENV</h1>
            <ul>
                {SidebarData.map((item, index) => {
                    return (
                        <Link to={item.path} className='link'>
                            <li key={item.title} className={item.cName}>
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        </Link>
                    );
                })}
            </ul>
            <div className='lastnav'>
                <Link to={'/login'} className='account'>
                    <span>Đăng xuất</span>
                </Link> 
            </div>
        </div>
    );
}

export default Navbar
