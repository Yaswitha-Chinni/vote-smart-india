import React from 'react';

const StepContent = ({ step }) => {
  if (!step) return null;

  return (
    <div className="step-content animate-fade-in">
      <div className="step-header">
        <span className="step-icon">{step.icon}</span>
        <div>
          <h3 className="step-id gradient-text-saffron">Phase {step.id}</h3>
          <h2 className="step-title">{step.title}</h2>
        </div>
      </div>
      
      <div className="content-grid">
        <div className="main-info">
          <p className="step-description">{step.description}</p>
          <div className="detailed-info">
            <h4 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Deep Dive</h4>
            <p>{step.details}</p>
          </div>
        </div>

        <div className="side-info">
          <div className="fact-card">
            <span className="fact-icon">🇮🇳</span>
            <div className="fact-text">
              <strong>Electoral Insight</strong>
              <p>{step.fact}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .step-content {
          margin-top: 1rem;
        }
        .step-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .step-icon {
          font-size: 2.5rem;
          background: var(--glass);
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          border: 1px solid var(--border);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .step-id {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 0.25rem;
          font-weight: 800;
        }
        .step-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--white);
        }
        .content-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2.5rem;
        }
        .step-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--text-main);
          margin-bottom: 1.5rem;
        }
        .detailed-info {
          background: rgba(255, 255, 255, 0.02);
          border-left: 4px solid var(--green);
          padding: 1.5rem;
          border-radius: 0 16px 16px 0;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-muted);
        }
        .fact-card {
          background: linear-gradient(135deg, rgba(255, 153, 51, 0.1) 0%, rgba(18, 136, 7, 0.1) 100%);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .fact-icon {
          font-size: 2rem;
        }
        .fact-text strong {
          display: block;
          color: var(--saffron);
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .fact-text p {
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default StepContent;
