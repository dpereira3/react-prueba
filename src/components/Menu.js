import React from "react";

function Menu() {
    return (
        <nav className="navbar">
            <ul>
                <li><a className="app-link" href="/">Home</a></li>
                <li><a className="app-link" href="/horarios">Horarios</a></li>
                <li><a className="app-link" href="/contacto">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default Menu;