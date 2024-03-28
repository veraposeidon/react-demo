// PlayerHand.js
import React from 'react';
import {ICard} from "@/app/interface/ICard";

interface PlayerHandProps {
    cards: ICard[];
    show: boolean;
    index: number;
    money: number;
}

const PlayerHand = ({ cards, show, index, money }: PlayerHandProps) => {
    return (
        <div id={`player${index}`} className={'player'}>
            <h2>Player {index + 1}</h2>
            <div className={"playercards"} id={`p${index}cards`}>
            {cards.map(card => (
                <img key={card.code} src={card.image} alt={`${card.value} of ${card.suit}`} />
            ))}
            </div>
            <span>Money: {money}</span>

        </div>
    );
};

export default PlayerHand;
