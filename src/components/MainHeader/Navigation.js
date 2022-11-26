import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

export const Navigation = (props) => {
  return (
    <header style={{ backgroundColor: props.isLoggedIn ? "white" : "#0a4362" }} className={classes.header}>
            <ul>
                {!props.isLoggedIn  && (<li ><Link style={{color:'white'}}>SignIn</Link></li>)}
                {/* {props.isLoggedIn  && (<li onClick={props.onSignOut}><Link style={{color:'#0a4362'}}>SignOut </Link></li>)} */}
            </ul>
        
    </header>
  )
}

