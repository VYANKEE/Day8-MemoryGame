import React from 'react';
import { RotateCcw } from 'lucide-react';

const ScoreBoard = ({ turns, onRestart }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <h2 style={{ fontSize: '1.5rem' }}>Memory Match</h2>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ fontSize: '1.2rem', color: '#aaa' }}>Turns: <strong style={{color:'white'}}>{turns}</strong></span>
        
        <button 
          onClick={onRestart}
          style={{ 
            background: 'var(--accent)', color: 'white', border: 'none', 
            padding: '8px 16px', borderRadius: '20px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold'
          }}
        >
          <RotateCcw size={16} /> Restart
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;