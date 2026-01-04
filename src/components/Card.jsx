import React from 'react';

const Card = ({ card, handleChoice, flipped, disabled }) => {
  
  const handleClick = () => {
    // Agar disabled nahi hai, tabhi click maano
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}>
      <div className="inner">
        {/* Front Face (Icon) */}
        <div className="front">
          {card.icon}
        </div>
        
        {/* Back Face (Cover) */}
        <div className="back" onClick={handleClick}>
          {/* Back design is handled in CSS */}
        </div>
      </div>
    </div>
  );
};

export default Card;