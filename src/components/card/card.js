import React from 'react';
import '../../styles/card.css';


const Card = props => {

        return (

                <section className="card-container">

                    <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set2&size=250x250`}/>
                    <h3>{props.monster.name}</h3>
                    <p>{props.monster.email}</p>
                </section>


        );

};

export default Card;