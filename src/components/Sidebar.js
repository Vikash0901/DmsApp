import React, { useState } from 'react';
import {
    FaDocker,
    FaTh, FaUserAlt, FaUser, FaSearch, FaBars, FaSignOutAlt,
} from 'react-icons/fa';
import { SlDocs } from 'react-icons/sl'
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css'
// import { useState } from 'react';

export const Sidebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // const menuItem = [
    //     {
    //         path: '/home',
    //         name: 'Home',
    //         onClick: ' ',
    //         icon: <FaUserAlt />
    //     },
    //     {
    //         path: '/',
    //         name: 'Dashboard',
    //         onClick: ' ',
    //         icon: <FaTh />
    //     },

    //     {
    //         path: '/issueddocs',
    //         name: 'Issued Docs',
    //         onClick: ' ',
    //         icon: <FaDocker />
    //     },
    //     {
    //         path: '/profile',
    //         name: 'My Profile',
    //         onClick: ' ',
    //         icon: <FaUser />
    //     },
    //     {
    //         path: '/search',
    //         name: 'Search',
    //         onClick: ' ',
    //         icon: <FaSearch />
    //     },
    //     {
    //         path: '/',
    //         name: 'Logout',
    //         onClick: '{props.onLogOut}',
    //         icon: <FaSignOutAlt />
    //     },
    // ];

    return (
        <div className="dash_container" >
            <div style={{ width: isOpen ? "300px" : "50px" }} className={classes.sidebar}>

                <div className={classes.top_section}>
                    <h1 style={{ display: isOpen ? "block" : "none" }} className={classes.logo}>Logo</h1>
                    <div style={{ marginLeft: isOpen ? "100px" : "0px" }} className={classes.bars}>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {/* {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className={classes.link} onClick={item.onClick} activeclassname={classes.active}>
                            <div className={classes.icon}>{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className={classes.link_text}>{item.name}</div>
                        </NavLink>
                    )
                    )
                } */}
                <div>
                    <NavLink to='/home' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><FaUserAlt /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={classes.link_text}>Home</div>
                    </NavLink>
                    <NavLink to='/issueddocs' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><FaDocker /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={classes.link_text}>IssuedDocs</div>
                    </NavLink>

                    <NavLink to='/drive' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><SlDocs /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={classes.link_text}>Drive</div>
                    </NavLink>
                    <NavLink to='/dashboard' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><FaTh /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={classes.link_text}>Dashboard</div>
                    </NavLink>


                    <NavLink to='/profile' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><FaUser /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={classes.link_text}>My Profile</div>
                    </NavLink>
                    <NavLink to='/search' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><FaSearch /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={classes.link_text}>Search</div>
                    </NavLink>

                    <NavLink to='/' className={classes.link} onClick={props.onLogOut} activeclassname={classes.active}>
                        <div className={classes.icon}><FaSignOutAlt /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className={classes.link_text}>Logout</div>
                    </NavLink>
                </div>
            </div>
            <main>
                {props.children}</main>
        </div>
    )
}
