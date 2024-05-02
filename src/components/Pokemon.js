import React from 'react';
import { useState } from 'react';

const Pokemon = () => {
    const [num, setNum] = useState('');

    return (
        <>
            <h1>Select Pokemon</h1>
            <h2>You choose {num} value</h2>
            <select name="" id=""
            value={num}
            onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
};

export default Pokemon;