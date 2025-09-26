// Complete React Todo App Bundle
const { useState, useEffect } = React;

// AddTodo Component
function AddTodo({ onAddTodo }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo({
        id: Date.now(),
        text: text.trim(),
        priority,
        completed: false,
        createdAt: new Date().toISOString()
      });
      setText('');
      setPriority('medium');
    }
  };

  return React.createElement('div', { className: 'add-todo' },
    React.createElement('form', { onSubmit: handleSubmit, className: 'add-todo-container' },
      React.createElement('div', { className: 'input-group' },
        React.createElement('i', { className: 'fas fa-plus input-icon' }),
        React.createElement('input', {
          type: 'text',
          value: text,
          onChange: (e) => setText(e.target.value),
          placeholder: 'Add a new todo...',
          className: 'add-todo-input',
          autoFocus: true
        }),
        React.createElement('select', {
          value: priority,
          onChange: (e) => setPriority(e.target.value),
          className: 'priority-select'
        },
          React.createElement('option', { value: 'low' }, 'Low Priority'),
          React.createElement('option', { value: 'medium' }, 'Medium Priority'),
          React.createElement('option', { value: 'high' }, 'High Priority')
        )
      ),
      React.createElement('button', {
        type: 'submit',
        className: 'btn btn-primary add-todo-btn'
      },
        React.createElement('i', { className: 'fas fa-plus' }),
        'Add Todo'
      )
    )
  );
}

// TodoItem Component
function TodoItem({ todo, onToggle, onDelete, onEdit, onUpdatePriority }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim());
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return React.createElement('div', {
    className: `todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}`
  },
    React.createElement('div', { className: 'todo-item-main' },
      React.createElement('button', {
        onClick: () => onToggle(todo.id),
        className: 'todo-checkbox',
        'aria-label': todo.completed ? 'Mark as incomplete' : 'Mark as complete'
      },
        React.createElement('i', {
          className: todo.completed ? 'fas fa-check-circle' : 'far fa-circle'
        })
      ),
      React.createElement('div', { className: 'todo-content' },
        React.createElement('div', { className: 'todo-text-container' },
          isEditing 
            ? React.createElement('input', {
                type: 'text',
                value: editText,
                onChange: (e) => setEditText(e.target.value),
                onKeyDown: handleKeyPress,
                onBlur: handleEdit,
                className: 'todo-edit-input',
                autoFocus: true
              })
            : React.createElement('span', { className: 'todo-text' }, todo.text)
        ),
        React.createElement('div', { className: 'todo-meta' },
          React.createElement('span', {
            className: `priority-badge priority-${todo.priority}`
          },
            React.createElement('i', {
              className: todo.priority === 'high' ? 'fas fa-exclamation-triangle' :
                         todo.priority === 'medium' ? 'fas fa-exclamation-circle' :
                         'fas fa-check-circle'
            }),
            todo.priority
          ),
          React.createElement('span', { className: 'todo-date' },
            React.createElement('i', { className: 'far fa-calendar' }),
            formatDate(todo.createdAt)
          )
        )
      )
    ),
    React.createElement('div', { className: 'todo-actions' },
      React.createElement('button', {
        onClick: handleEdit,
        className: 'btn-icon btn-edit',
        'aria-label': 'Edit todo'
      },
        React.createElement('i', { className: isEditing ? 'fas fa-check' : 'fas fa-edit' })
      ),
      React.createElement('button', {
        onClick: () => onDelete(todo.id),
        className: 'btn-icon btn-delete',
        'aria-label': 'Delete todo'
      },
        React.createElement('i', { className: 'fas fa-trash' })
      )
    )
  );
}

// TodoList Component
function TodoList({ todos, onToggle, onDelete, onEdit, onUpdatePriority }) {
  if (todos.length === 0) {
    return React.createElement('div', { className: 'empty-state' },
      React.createElement('div', { className: 'empty-icon' },
        React.createElement('i', { className: 'fas fa-tasks' })
      ),
      React.createElement('h3', null, 'No todos yet'),
      React.createElement('p', null, 'Add your first todo above to get started!')
    );
  }

  return React.createElement('div', { className: 'todo-list' },
    React.createElement('div', { className: 'todo-list-header' },
      React.createElement('h2', null,
        React.createElement('i', { className: 'fas fa-list-ul' }),
        'Your Tasks'
      )
    ),
    React.createElement('div', { className: 'todo-items' },
      todos.map(todo =>
        React.createElement(TodoItem, {
          key: todo.id,
          todo,
          onToggle,
          onDelete,
          onEdit,
          onUpdatePriority
        })
      )
    )
  );
}

// FilterTodos Component
function FilterTodos({ filter, onFilterChange, priorityFilter, onPriorityFilterChange }) {
  return React.createElement('div', { className: 'filter-todos' },
    React.createElement('h3', { className: 'filter-title' },
      React.createElement('i', { className: 'fas fa-filter' }),
      'Filter & Sort'
    ),
    React.createElement('div', { className: 'filter-buttons' },
      React.createElement('button', {
        onClick: () => onFilterChange('all'),
        className: `filter-btn ${filter === 'all' ? 'active' : ''}`
      },
        React.createElement('i', { className: 'fas fa-list' }),
        'All'
      ),
      React.createElement('button', {
        onClick: () => onFilterChange('active'),
        className: `filter-btn ${filter === 'active' ? 'active' : ''}`
      },
        React.createElement('i', { className: 'fas fa-clock' }),
        'Active'
      ),
      React.createElement('button', {
        onClick: () => onFilterChange('completed'),
        className: `filter-btn ${filter === 'completed' ? 'active' : ''}`
      },
        React.createElement('i', { className: 'fas fa-check' }),
        'Completed'
      ),
      React.createElement('button', {
        onClick: () => onPriorityFilterChange('high'),
        className: `filter-btn ${priorityFilter === 'high' ? 'active' : ''}`
      },
        React.createElement('i', { className: 'fas fa-exclamation-triangle' }),
        'High Priority'
      ),
      React.createElement('button', {
        onClick: () => onPriorityFilterChange('medium'),
        className: `filter-btn ${priorityFilter === 'medium' ? 'active' : ''}`
      },
        React.createElement('i', { className: 'fas fa-exclamation-circle' }),
        'Medium Priority'
      ),
      React.createElement('button', {
        onClick: () => onPriorityFilterChange('low'),
        className: `filter-btn ${priorityFilter === 'low' ? 'active' : ''}`
      },
        React.createElement('i', { className: 'fas fa-check-circle' }),
        'Low Priority'
      )
    )
  );
}

// Stats Component
function Stats({ todos }) {
  const totalTodos = todos.length;
  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const progressPercentage = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

  return React.createElement('div', { className: 'stats' },
    React.createElement('div', { className: 'stats-container' },
      React.createElement('div', { className: 'stat-item' },
        React.createElement('div', { className: 'stat-icon total' },
          React.createElement('i', { className: 'fas fa-tasks' })
        ),
        React.createElement('div', { className: 'stat-content' },
          React.createElement('span', { className: 'stat-number' }, totalTodos),
          React.createElement('span', { className: 'stat-label' }, 'Total Tasks')
        )
      ),
      React.createElement('div', { className: 'stat-item' },
        React.createElement('div', { className: 'stat-icon active' },
          React.createElement('i', { className: 'fas fa-clock' })
        ),
        React.createElement('div', { className: 'stat-content' },
          React.createElement('span', { className: 'stat-number' }, activeTodos),
          React.createElement('span', { className: 'stat-label' }, 'Active')
        )
      ),
      React.createElement('div', { className: 'stat-item' },
        React.createElement('div', { className: 'stat-icon completed' },
          React.createElement('i', { className: 'fas fa-check-circle' })
        ),
        React.createElement('div', { className: 'stat-content' },
          React.createElement('span', { className: 'stat-number' }, completedTodos),
          React.createElement('span', { className: 'stat-label' }, 'Completed')
        )
      )
    ),
    React.createElement('div', { className: 'progress-bar' },
      React.createElement('div', {
        className: 'progress-fill',
        style: { width: `${progressPercentage}%` }
      })
    )
  );
}

// Main App Component
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const updateTodoPriority = (id, newPriority) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, priority: newPriority } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  // Filter todos based on status and priority
  const filteredTodos = todos.filter(todo => {
    const statusMatch = filter === 'all' || 
                       (filter === 'active' && !todo.completed) ||
                       (filter === 'completed' && todo.completed);
    
    const priorityMatch = !priorityFilter || todo.priority === priorityFilter;
    
    return statusMatch && priorityMatch;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setPriorityFilter(''); // Clear priority filter when changing status filter
  };

  const handlePriorityFilterChange = (newPriority) => {
    if (priorityFilter === newPriority) {
      setPriorityFilter(''); // Toggle off if same priority selected
    } else {
      setPriorityFilter(newPriority);
      setFilter('all'); // Show all statuses when filtering by priority
    }
  };

  return React.createElement('div', { className: 'app' },
    React.createElement('div', { className: 'app-container' },
      React.createElement('header', { className: 'app-header' },
        React.createElement('h1', { className: 'app-title' },
          React.createElement('i', { className: 'fas fa-check-double' }),
          'TodoMaster'
        ),
        React.createElement('p', { className: 'app-subtitle' },
          'Advanced Task Management Made Simple'
        )
      ),
      React.createElement('main', { className: 'app-main' },
        React.createElement(AddTodo, { onAddTodo: addTodo }),
        React.createElement(Stats, { todos }),
        React.createElement(FilterTodos, {
          filter,
          onFilterChange: handleFilterChange,
          priorityFilter,
          onPriorityFilterChange: handlePriorityFilterChange
        }),
        React.createElement(TodoList, {
          todos: filteredTodos,
          onToggle: toggleTodo,
          onDelete: deleteTodo,
          onEdit: editTodo,
          onUpdatePriority: updateTodoPriority
        }),
        todos.filter(todo => todo.completed).length > 0 &&
        React.createElement('div', { className: 'app-actions' },
          React.createElement('button', {
            onClick: clearCompleted,
            className: 'btn btn-secondary'
          },
            React.createElement('i', { className: 'fas fa-trash' }),
            'Clear Completed'
          )
        )
      ),
      React.createElement('footer', { className: 'app-footer' },
        React.createElement('p', null, 
          React.createElement('i', { className: 'fas fa-heart', style: { color: '#f56565' } }),
          ' Built with React by Kumar Ashutosh'
        ),
        React.createElement('p', null, 'Demonstrating modern React development skills'),
        React.createElement('p', { style: { fontSize: '0.8rem', opacity: 0.7, marginTop: '0.5rem' } }, 
          'Last updated: September 27, 2025'
        )
      )
    )
  );
}

// Render the App
ReactDOM.render(React.createElement(App), document.getElementById('root'));