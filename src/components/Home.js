import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about");
    }

    return (
        <div className="main">
            <h1>Home</h1>
            <button onClick={handleClick}>Click me - About</button>
        </div>
    )
}

export default Home;