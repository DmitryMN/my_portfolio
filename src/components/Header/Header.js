import React from "react";
import Nav from "../Nav/Nav";
import Header_Logo from "./Header_logo/Header_Logo";
import "./header.css";

const Header = () => {
    return(
        <div className="header">
            <div className="header__container _container">
                <Header_Logo/>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;