import React from "react";
import loading from "../../assets/isLoading.svg";
import pstyle from "./style/preloader.module.css"


const Preloader = ()=>{
return(
    <div className={pstyle.preloader_block}>
        <img src={loading} alt="Preloader" />
    </div>
)
}

export default Preloader;