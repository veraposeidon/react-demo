"use client";

import styles from "./page.module.css";
import Dealer from "@/app/component/Dealer";
import PlayerHand from "@/app/component/PlayHand";
import Controls from "@/app/component/Controls";
import Pot from "@/app/component/Pot";
import {useState} from "react";

export default function Home() {
    const [dealerCards, setDealerCards] = useState([]);
    const [playerCards, setPlayerCards] = useState([]);
    const [potAmount, setPotAmount] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);


    const handleCheck = () => { /* ... */ };
    const handleFold = () => { /* ... */ };
    const handleRaise = () => { /* ... */ };

    // fetch cards when start game
    // https://deckofcardsapi.com/api/deck/new/draw/?count=6
    const fetchCards = async () => {
        try {
            const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=10'); // 替换成你的API端点
            const data = await response.json();
            const cards = data.cards;
            const dealer = cards.slice(0, 5);
            setDealerCards(dealer);
            const player = cards.slice(5, 7);
            setPlayerCards(player);
            // 这里假设API返回的数据结构是 { dealer: [], player: [] }
            setGameStarted(true);
        } catch (error) {
            console.error('Error fetching card data:', error);
        }
    };

    const handleStartGame = () => {
        fetchCards();
    };


  return (
      <main className={styles.main}>
          <div id="gameboard">
              {/*庄家牌*/}
              <Dealer cards={dealerCards}/>
              {/*玩家手牌区域*/}
              <PlayerHand cards={playerCards} show={true} index={0} money={100}/>
              <PlayerHand cards={playerCards} show={true} index={1} money={100}/>
              <PlayerHand cards={playerCards} show={true} index={2} money={100}/>
              <PlayerHand cards={playerCards} show={true} index={3} money={100}/>
              <PlayerHand cards={playerCards} show={true} index={4} money={100}/>
              {/*操作栏*/}
              <Controls onCheck={handleCheck} onFold={handleFold} onRaise={handleRaise}/>
              {/*奖池*/}
              <Pot amount={potAmount}/>
              {/* More game elements here */}
              <button id="btn-start" onClick={handleStartGame}>
                  Start Game
              </button>
          </div>
      </main>
  );
}
