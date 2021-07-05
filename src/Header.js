import React from 'react';
import { GiHotMeal } from 'react-icons/gi';
import './Header.css';

function Header() {
    return(
        <header>
            <h1>Hungry Secrets</h1>
            <GiHotMeal className="header-icon"/>
        </header>
    )
}

export default Header;