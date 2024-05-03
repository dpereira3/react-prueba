import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Home () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about");
    }

    return (
        <div className="main">
            <h1>Home</h1>
            <button onClick={handleClick}>Click me - About</button>
            <Button variant="contained">Hello world</Button>
        </div>
    )
}

export default Home;