import React from 'react';
import header from'./style/header.module.css';

const Header=()=>{
    return(
        <header className={header.header}>
        <div className={header.header_logo}>
          <img className={header.header_logo__img} src="https://i.pinimg.com/564x/d3/fa/fb/d3fafb300d2e764b18b3595a0fbc9569.jpg" alt="" />
          <p className={header.header_logo__title}> Social-Network.by</p>
        </div>
      </header>
      
    )
}

export default Header;