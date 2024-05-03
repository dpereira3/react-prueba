import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const Pokemon = () => {
    const [num, setNum] = useState(1);
    const [name, setName] = useState();
    const [movesCant, setMoves] = useState();
    const [movesList, setMovesList] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMoves(res.data.moves.length);
            setMovesList(res.data.moves);
            console.log(res.data.moves);
        }
        getData();
    });

    return (
        <>
            <h1>Select Pokemon</h1>
            <h2>You choose {num} value</h2>
            <h3>My name is <span>{name}</span></h3>
            <h3> I have <span>{movesCant}</span></h3>
            <p>
                {movesList.map((element) => {
                    return element.move.name+"  _  ";
                })}
            </p><br />
            <select name="" id=""
            defaultValue={num}
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