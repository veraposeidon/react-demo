// Dealer.js
import React from 'react';

const Dealer = ({ cards }) => {
    return (
        <div id="dealer">
            {cards.map(card => (
                <img key={card.code} src={card.image} alt={`${card.value} of ${card.suit}`} />
            ))}
        </div>
    );
};

export default Dealer;
