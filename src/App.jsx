import React, { useState } from 'react';
import Timeline from './components/Timeline';
import StepContent from './components/StepContent';
import Quiz from './components/Quiz';
import Flashcards from './components/Flashcards';
import ChatAssistant from './components/ChatAssistant';
import { electionSteps } from './data/electionData';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('steps');
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < electionSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const reset = () => {
    setCurrentStep(1);
  };

  return (
    <div className="container">
      <header style={{ marginBottom: '3rem', textAlign: 'center', position: 'relative' }}>
        <div className="flag-accents" style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '2px' }}>
          <div style={{ width: '40px', height: '4px', background: 'var(--saffron)' }}></div>
          <div style={{ width: '40px', height: '4px', background: 'var(--white)' }}></div>
          <div style={{ width: '40px', height: '4px', background: 'var(--green)' }}></div>
        </div>
        
        <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', fontWeight: 900 }}>
          <span className="gradient-text-saffron">Vote</span> 
          <span style={{ color: 'var(--white)', margin: '0 0.5rem' }}>Smart</span>
          <span className="gradient-text-green">India</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', fontWeight: 500 }}>
          Master the Indian Election Process Interactively
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <div className="tabs">
            <div className={`tab ${activeTab === 'steps' ? 'active' : ''}`} onClick={() => setActiveTab('steps')}>Election Steps</div>
            <div className={`tab ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => setActiveTab('quiz')}>Interactive Quiz</div>
            <div className={`tab ${activeTab === 'cards' ? 'active' : ''}`} onClick={() => setActiveTab('cards')}>Flashcards</div>
            <div className={`tab ${activeTab === 'chat' ? 'active' : ''}`} onClick={() => setActiveTab('chat')}>Ask Assistant</div>
          </div>
        </div>
      </header>

      <main className="glass-card animate-slide-up">
        {activeTab === 'steps' && (
          <>
            <Timeline currentStep={currentStep} steps={electionSteps} />
            <StepContent step={electionSteps.find(s => s.id === currentStep)} />
            
            <div className="controls" style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button 
                className="btn-secondary" 
                onClick={prevStep}
                disabled={currentStep === 1}
                style={{ opacity: currentStep === 1 ? 0.3 : 1 }}
              >
                ← Previous Phase
              </button>

              <div style={{ textAlign: 'center' }}>
                <div className="chakra-spin" style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>☸️</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  PHASE {currentStep} / {electionSteps.length}
                </div>
              </div>

              {currentStep < electionSteps.length ? (
                <button className="btn-primary" onClick={nextStep}>
                  Next Phase →
                </button>
              ) : (
                <button className="btn-primary" onClick={reset}>
                  Restart Journey ↺
                </button>
              )}
            </div>
          </>
        )}

        {activeTab === 'quiz' && <Quiz />}
        {activeTab === 'cards' && <Flashcards />}
        {activeTab === 'chat' && <ChatAssistant />}
      </main>

      <footer style={{ marginTop: '4rem', textAlign: 'center', paddingBottom: '3rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          Empowering Citizens through Information 🇮🇳 
          <span style={{ color: 'var(--border)' }}>|</span> 
          Made for Hack2Skill
        </p>
      </footer>
    </div>
  );
}

export default App;
