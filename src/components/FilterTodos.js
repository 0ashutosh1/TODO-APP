import React from 'react';

const FilterTodos = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'All Tasks', icon: 'fas fa-list' },
    { key: 'active', label: 'Active', icon: 'fas fa-circle-notch' },
    { key: 'completed', label: 'Completed', icon: 'fas fa-check-circle' },
    { key: 'high', label: 'High Priority', icon: 'fas fa-exclamation-circle' },
    { key: 'medium', label: 'Medium Priority', icon: 'fas fa-circle' },
    { key: 'low', label: 'Low Priority', icon: 'far fa-circle' },
  ];

  return (
    <div className="filter-todos">
      <h3 className="filter-title">
        <i className="fas fa-filter"></i>
        Filter Tasks
      </h3>
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.key)}
          >
            <i className={filter.icon}></i>
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTodos;