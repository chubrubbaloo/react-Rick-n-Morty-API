import React from "react";
import logo from '../../Media/logo.png';

export const Logo = () => {
    return (
        <div>
            <img onClick={() => window.location.reload()} id='logo' src={logo} alt="Rick and Morty logo"/>
        </div>
    )
}