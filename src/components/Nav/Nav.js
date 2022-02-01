import React from "react";
import "./nav.css";

const Nav = () => {
    return (
        <nav className="header__menu _menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="#" className="menu__link">Home</a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">Product</a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">Pricing</a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;