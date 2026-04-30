import React, { useState } from 'react';
import { quizQuestions } from '../data/electionData';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerOptionClick = (option) => {
    if (selectedOption) return;
    
    setSelectedOption(option);
    const correct = option === quizQuestions[currentQuestion].answer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div className="quiz-container animate-slide-up">
      {showScore ? (
        <div className="score-section">
          <h2 className="gradient-text-saffron">Quiz Completed!</h2>
          <div className="score-circle">
            <span className="score-num">{score}</span>
            <span className="score-total">/ {quizQuestions.length}</span>
          </div>
          <p>You have a {Math.round((score / quizQuestions.length) * 100)}% understanding of the election process.</p>
          <button className="btn-primary" onClick={restartQuiz}>Try Again</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
            </div>
            <div className="question-text">{quizQuestions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button 
                key={option}
                className={`answer-btn ${selectedOption === option ? (isCorrect ? 'correct' : 'wrong') : ''}`}
                onClick={() => handleAnswerOptionClick(option)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <div className="feedback animate-fade-in" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p style={{ color: isCorrect ? 'var(--green)' : 'var(--saffron)', fontWeight: 'bold', marginBottom: '1rem' }}>
                {isCorrect ? '✨ Correct!' : `❌ Incorrect! The right answer is ${quizQuestions[currentQuestion].answer}`}
              </p>
              <button className="btn-primary" onClick={handleNextQuestion}>
                {currentQuestion + 1 === quizQuestions.length ? 'Show Results' : 'Next Question'}
              </button>
            </div>
          )}
        </>
      )}

      <style jsx="true">{`
        .quiz-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 1rem;
        }
        .question-section {
          margin-bottom: 2rem;
        }
        .question-count {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }
        .question-text {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .answer-section {
          display: grid;
          gap: 1rem;
        }
        .answer-btn {
          background: var(--glass);
          border: 1px solid var(--border);
          color: var(--text-main);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }
        .answer-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(5px);
        }
        .answer-btn.correct {
          background: rgba(18, 136, 7, 0.3);
          border-color: var(--green);
        }
        .answer-btn.wrong {
          background: rgba(255, 153, 51, 0.3);
          border-color: var(--saffron);
        }
        .score-section {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .score-circle {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 5px solid var(--saffron);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
        }
        .score-num {
          font-size: 3rem;
          font-weight: 800;
          color: var(--saffron);
        }
        .score-total {
          font-size: 1.5rem;
          color: var(--text-muted);
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Quiz;
