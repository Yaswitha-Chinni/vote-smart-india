import React, { useState } from 'react';
import { flashcards } from '../data/electionData';

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);
  
  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((currentIndex + 1) % flashcards.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flashcards-container animate-slide-up">
      <h2 className="gradient-text-saffron" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Knowledge Flashcards</h2>
      
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">
            <p>{flashcards[currentIndex].front}</p>
            <span className="hint">Click to flip</span>
          </div>
          <div className="card-back">
            <p>{flashcards[currentIndex].back}</p>
            <span className="hint">Click to flip back</span>
          </div>
        </div>
      </div>

      <div className="controls">
        <button className="btn-secondary" onClick={prevCard}>Previous</button>
        <span style={{ fontWeight: 'bold' }}>{currentIndex + 1} / {flashcards.length}</span>
        <button className="btn-primary" onClick={nextCard}>Next</button>
      </div>

      <style jsx="true">{`
        .flashcards-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 1rem;
        }
        .card {
          width: 100%;
          max-width: 500px;
          height: 300px;
          perspective: 1000px;
          cursor: pointer;
        }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .card.flipped .card-inner {
          transform: rotateY(180deg);
        }
        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          border-radius: 24px;
          text-align: center;
          border: 1px solid var(--border);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .card-front {
          background: rgba(255, 153, 51, 0.1);
          color: var(--white);
          font-size: 1.5rem;
          font-weight: 600;
        }
        .card-back {
          background: rgba(18, 136, 7, 0.1);
          color: var(--white);
          transform: rotateY(180deg);
          font-size: 1.25rem;
        }
        .hint {
          margin-top: 1.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .controls {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Flashcards;
