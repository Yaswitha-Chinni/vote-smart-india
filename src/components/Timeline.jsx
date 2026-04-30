import React from 'react';

const Timeline = ({ currentStep, steps }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-track">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className={`timeline-step ${index + 1 === currentStep ? 'active' : ''} ${index + 1 < currentStep ? 'completed' : ''}`}
          >
            <div className="step-number">{step.id}</div>
            <div className="step-label">{step.title}</div>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .timeline-container {
          padding: 1rem 0 2rem 0;
          overflow-x: auto;
          margin-bottom: 2rem;
        }
        .timeline-track {
          display: flex;
          justify-content: space-between;
          position: relative;
          min-width: 900px;
          padding: 0 1rem;
        }
        .timeline-track::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--glass);
          z-index: 1;
        }
        .timeline-step {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          transition: all 0.3s ease;
        }
        .step-number {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-dark);
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: var(--text-muted);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .timeline-step.active .step-number {
          background: var(--saffron);
          border-color: var(--saffron);
          color: white;
          box-shadow: 0 0 25px rgba(255, 153, 51, 0.4);
          transform: scale(1.25);
        }
        .timeline-step.completed .step-number {
          background: var(--green);
          border-color: var(--green);
          color: white;
          box-shadow: 0 0 15px rgba(18, 136, 7, 0.2);
        }
        .step-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          text-align: center;
          max-width: 100px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .timeline-step.active .step-label {
          color: var(--white);
        }
      `}</style>
    </div>
  );
};

export default Timeline;
