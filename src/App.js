import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';
import Stats from './components/Stats';
import './styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('react-todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Error parsing saved todos:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('react-todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (text) => {
    if (text.trim() === '') return;
    
    const newTodo = {
      id: Date.now() + Math.random(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      priority: 'medium'
    };
    
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // Edit todo text
  const editTodo = (id, newText) => {
    if (newText.trim() === '') return;
    
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, text: newText.trim() }
          : todo
      )
    );
  };

  // Update todo priority
  const updatePriority = (id, priority) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, priority }
          : todo
      )
    );
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  // Toggle all todos
  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(prevTodos =>
      prevTodos.map(todo => ({
        ...todo,
        completed: !allCompleted
      }))
    );
  };

  // Filter todos based on current filter
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'high':
        return todos.filter(todo => todo.priority === 'high');
      case 'medium':
        return todos.filter(todo => todo.priority === 'medium');
      case 'low':
        return todos.filter(todo => todo.priority === 'low');
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">
            <i className="fas fa-check-circle"></i>
            Todo Master
          </h1>
          <p className="app-subtitle">Stay organized and get things done</p>
        </header>

        <main className="app-main">
          <AddTodo onAdd={addTodo} />
          
          <Stats 
            total={todos.length}
            completed={completedCount}
            active={activeCount}
          />
          
          <FilterTodos 
            currentFilter={filter}
            onFilterChange={setFilter}
          />
          
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onUpdatePriority={updatePriority}
          />

          {todos.length > 0 && (
            <div className="app-actions">
              <button 
                className="btn btn-secondary"
                onClick={toggleAll}
              >
                <i className="fas fa-check-double"></i>
                {todos.every(todo => todo.completed) ? 'Mark All Active' : 'Mark All Complete'}
              </button>
              
              {completedCount > 0 && (
                <button 
                  className="btn btn-danger"
                  onClick={clearCompleted}
                >
                  <i className="fas fa-trash"></i>
                  Clear Completed ({completedCount})
                </button>
              )}
            </div>
          )}
        </main>

        <footer className="app-footer">
          <p>Built with React by Kumar Ashutosh</p>
          <p>Data is saved locally in your browser</p>
        </footer>
      </div>
    </div>
  );
};

export default App;