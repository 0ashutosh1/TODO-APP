import React, { useState } from 'react';

const TodoItem = ({ todo, index, onToggle, onDelete, onEdit, onUpdatePriority }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim() !== todo.text) {
      onEdit(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return 'fas fa-exclamation-circle';
      case 'medium': return 'fas fa-circle';
      case 'low': return 'far fa-circle';
      default: return 'fas fa-circle';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="todo-item-main">
        <button
          className="todo-checkbox"
          onClick={() => onToggle(todo.id)}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          <i className={todo.completed ? 'fas fa-check-circle' : 'far fa-circle'}></i>
        </button>

        <div className="todo-content">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={handleEdit}
              className="todo-edit-input"
              autoFocus
            />
          ) : (
            <div className="todo-text-container">
              <span className="todo-text">{todo.text}</span>
              <div className="todo-meta">
                <span className={`priority-badge priority-${todo.priority}`}>
                  <i className={getPriorityIcon(todo.priority)}></i>
                  {todo.priority}
                </span>
                <span className="todo-date">
                  <i className="far fa-clock"></i>
                  {formatDate(todo.createdAt)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="todo-actions">
        <select
          value={todo.priority}
          onChange={(e) => onUpdatePriority(todo.id, e.target.value)}
          className="priority-update"
          title="Change priority"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          className="btn-icon btn-edit"
          onClick={handleEdit}
          title={isEditing ? 'Save changes' : 'Edit todo'}
        >
          <i className={isEditing ? 'fas fa-save' : 'fas fa-edit'}></i>
        </button>

        <button
          className="btn-icon btn-delete"
          onClick={() => onDelete(todo.id)}
          title="Delete todo"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;