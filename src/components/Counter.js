import React from 'react';
import { useState, useEffect } from 'react';
import '../counter.css';
import Test from './Test';

function Counter() {
    let count = 0;

    useEffect(() => {
        // window.alert("I am clicked");
    });

    const [currentState, updateState] = useState(count);
    const handleClick = () => {
        updateState(currentState + 1);
    };

    const [toggle, updateToggle] = useState(false);
    const showTest = () => {
        updateToggle(!toggle);
    }

    return (
        <>
            <div className="counter-parent">
                <div className="main-div">
                    <h3>Counter</h3>
                    <button onClick={handleClick}>{currentState}</button>
                    <button onClick={showTest}>Toggle</button>
                    {toggle && <Test />} {/* for conditional render */}
                </div>
            </div>
            
            
        </>
    )
}

export default Counter;