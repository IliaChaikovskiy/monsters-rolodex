import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

// arrow function single argument, if no explicit return then assumed to be right after arrow
export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);