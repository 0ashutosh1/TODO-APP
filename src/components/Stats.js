import React from 'react';

const Stats = ({ total, completed, active }) => {
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="stats">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-icon total">
            <i className="fas fa-list"></i>
          </div>
          <div className="stat-content">
            <span className="stat-number">{total}</span>
            <span className="stat-label">Total Tasks</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon active">
            <i className="fas fa-circle-notch"></i>
          </div>
          <div className="stat-content">
            <span className="stat-number">{active}</span>
            <span className="stat-label">Active</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon completed">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="stat-content">
            <span className="stat-number">{completed}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon progress">
            <i className="fas fa-chart-pie"></i>
          </div>
          <div className="stat-content">
            <span className="stat-number">{completionRate}%</span>
            <span className="stat-label">Progress</span>
          </div>
        </div>
      </div>

      {total > 0 && (
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Stats;