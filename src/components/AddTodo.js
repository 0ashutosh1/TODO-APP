import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text, priority);
      setText('');
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <div className="add-todo-container">
        <div className="input-group">
          <i className="fas fa-plus input-icon"></i>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new todo..."
            className="add-todo-input"
            maxLength="200"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="priority-select"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary add-todo-btn">
          <i className="fas fa-plus"></i>
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;