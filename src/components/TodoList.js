import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onEdit, onUpdatePriority }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <i className="fas fa-clipboard-list"></i>
        </div>
        <h3>No todos yet</h3>
        <p>Add your first todo to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <div className="todo-list-header">
        <h2>
          <i className="fas fa-list"></i>
          Your Tasks ({todos.length})
        </h2>
      </div>
      <div className="todo-items">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
            onUpdatePriority={onUpdatePriority}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;