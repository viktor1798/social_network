import React from 'react';
import header from'./style/header.module.css';
import { NavLink } from 'react-router-dom';


const Header=(props)=>{
    return(
        <header className={header.header}>
        <div className={header.header_logo}>
          {/* <img className={header.header_logo__img} src="https://i.pinimg.com/564x/d3/fa/fb/d3fafb300d2e764b18b3595a0fbc9569.jpg" alt="" /> */}
          <p className={header.header_logo__title}> Social-Network.by</p>
        </div>
        <div className={header.header_auth}>
          {props.isAuth?<div>{props.login}|<button>{props.logout} Poka text</button></div>:<NavLink to="/login">Login</NavLink>}
          </div>
      </header>
      
    )
}

export default Header; 