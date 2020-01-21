import React from 'react';
import '../../styles/card-list.css';
import Card from "../card/card";

const CardList = props => {

    return (
        <div>

            <div className="card-list">    {

                props.monsters !== [] ?
                props.monsters.map(monster => (

                <Card key={monster.id} monster={monster}/>
                )) :(<div>Loading...</div>)}</div>
        </div>
    );

};

export default CardList;