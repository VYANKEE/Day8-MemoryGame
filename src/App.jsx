import React, { useState, useEffect } from 'react';
import { Ghost, Heart, Star, Moon, Sun, Cloud, Zap, Anchor } from 'lucide-react';
import './styles/globals.css';
import './styles/game.css';

import Card from './components/Card';
import ScoreBoard from './components/ScoreBoard';

// Icons ka array (8 icons = 16 cards total)
const cardIcons = [
  { src: 'ghost', icon: <Ghost size={40} color="#a29bfe" /> },
  { src: 'heart', icon: <Heart size={40} color="#ff7675" /> },
  { src: 'star', icon: <Star size={40} color="#ffeaa7" /> },
  { src: 'moon', icon: <Moon size={40} color="#74b9ff" /> },
  { src: 'sun', icon: <Sun size={40} color="#fab1a0" /> },
  { src: 'cloud', icon: <Cloud size={40} color="#81ecec" /> },
  { src: 'zap', icon: <Zap size={40} color="#fdcb6e" /> },
  { src: 'anchor', icon: <Anchor size={40} color="#55efc4" /> }
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  
  // Selection States
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false); // Jab processing ho rahi ho to click roko

  // --- 1. Shuffle Logic ---
  const shuffleCards = () => {
    // Array ko duplicate karo (8*2 = 16 cards)
    const shuffledCards = [...cardIcons, ...cardIcons]
      .sort(() => Math.random() - 0.5) // Random sort
      .map((card) => ({ ...card, id: Math.random(), matched: false })); // ID add karo
      
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // --- 2. Handle Selection ---
  const handleChoice = (card) => {
    // Agar choiceOne null hai to ye choiceOne hai, nahi to ye choiceTwo hai
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // --- 3. Compare Logic (The Brain) ---
  useEffect(() => {
    
    if (choiceOne && choiceTwo) {
      setDisabled(true); // User ko teesra click karne se roko

      if (choiceOne.src === choiceTwo.src) {
        // MATCH FOUND
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }; // Mark as matched
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        // NO MATCH -> Flip back after delay
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]); // Jab bhi choices change ho, ye chalao

  // --- 4. Reset Turn ---
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false); // Click allow karo
  };

  // Game Start on Load
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="container">
      <ScoreBoard turns={turns} onRestart={shuffleCards} />
      
      <div className="card-grid">
        {cards.map(card => (
          <Card 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            // Card tabhi flip hoga agar:
            // 1. Wo currently selected hai (One ya Two)
            // 2. Ya wo pehle se matched ho chuka hai
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      
      {/* Footer Info */}
      <p style={{ marginTop: '30px', color: '#666', fontSize: '0.9rem' }}>
        Day 8 • Memory Game • Find all pairs!
      </p>
    </div>
  );
}

export default App;