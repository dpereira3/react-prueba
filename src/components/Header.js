import React from 'react';
import { Link } from 'react-router-dom';
import '../counter.css';

function Header() {
    return (
        <div className="main-header">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/counter">
                <li>Counter</li>
                </Link>
                <Link to="/calc">
                <li>Calc</li>
                </Link>
                <Link to="/pokemon">
                <li>Pokemon</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header;