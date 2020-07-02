import React from 'react'
import './CardStyles.css';

function Card(props) {
    return (
        <div className="card-container">
            <img className="image" alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
            <h2>{props.monster.name}</h2>
            <p> {props.monster.email} </p>
        </div>
    )
}

export default Card
