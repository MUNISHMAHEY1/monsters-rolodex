import React from 'react';
import './CardListStyles.css';
import Card from '../Card/Card';

function cardList({items}) {
    return (    
        <div className="card-list">
            { items.map(monster=> <Card key={monster.id} monster={monster}></Card>)}
        </div>
    )
}
export default cardList;