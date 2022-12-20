import React from 'react';
import {
    FaDocker,
    FaTh, FaUserAlt, FaUser, FaSearch, FaSignOutAlt,
} from 'react-icons/fa';
import { SlDocs } from 'react-icons/sl'
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css'
// import { useState } from 'react';

export const Sidebar = (props) => {


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
            { props.isOpen && <div  className={classes.sidebar}>
                <div>
                    <NavLink to='/home' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><FaUserAlt /></div>
                        <div  className={classes.link_text}>Home</div>
                    </NavLink>
                    <NavLink to='/issueddocs' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><FaDocker /></div>
                        <div  className={classes.link_text}>IssuedDocs</div>
                    </NavLink>

                    <NavLink to='/drive' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><SlDocs /></div>
                        <div  className={classes.link_text}>Drive</div>
                    </NavLink>
                    <NavLink to='/dashboard' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><FaTh /></div>
                        <div  className={classes.link_text}>Dashboard</div>
                    </NavLink>
                    <NavLink to='/profile' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><FaUser /></div>
                        <div  className={classes.link_text}>My Profile</div>
                    </NavLink>
                    <NavLink to='/search' className={classes.link} activeclassname={classes.active}>
                        <div className={classes.icon}><FaSearch /></div>
                        <div  className={classes.link_text}>Search</div>
                    </NavLink>

                    <NavLink to='/' className={classes.link} onClick={props.onLogOut} activeclassname={classes.active}>
                        <div className={classes.icon}><FaSignOutAlt /></div>
                        <div  className={classes.link_text}>Logout</div>
                    </NavLink>
                </div>
            </div>}
            <main>
                {props.children}</main>
        </div>
    )
}
