// Styles as a JavaScript object for React components
const styles = `
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --success-color: #48bb78;
  --danger-color: #f56565;
  --warning-color: #ed8936;
  --info-color: #4299e1;
  --bg-primary: #ffffff;
  --bg-secondary: #f7fafc;
  --bg-gray: #edf2f7;
  --text-primary: #2d3748;
  --text-secondary: #718096;
  --text-light: #a0aec0;
  --text-white: #ffffff;
  --border-color: #e2e8f0;
  --border-radius: 12px;
  --border-radius-sm: 6px;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  padding: 2rem 1rem;
}

.app-container {
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  animation: slideUp 0.6s ease-out;
}

.app-header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-white);
  padding: 2rem;
  text-align: center;
}

.app-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.app-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 400;
}

.app-main {
  padding: 2rem;
}

.add-todo {
  margin-bottom: 2rem;
}

.add-todo-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-group {
  position: relative;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.add-todo-input {
  flex: 1;
  padding: 1rem 1rem 1rem 2.5rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  background: var(--bg-primary);
}

.add-todo-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.priority-select {
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--bg-primary);
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--border-radius);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-white);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.stats {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--bg-primary);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
}

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
}

.stat-icon.total { background: var(--info-color); }
.stat-icon.active { background: var(--warning-color); }
.stat-icon.completed { background: var(--success-color); }

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--bg-gray);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--success-color), var(--primary-color));
  border-radius: 4px;
  transition: width 0.5s ease;
}

.filter-todos {
  margin-bottom: 2rem;
}

.filter-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--border-color);
  background: var(--bg-primary);
  border-radius: 20px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn:hover {
  border-color: var(--primary-color);
  background: rgba(102, 126, 234, 0.1);
}

.filter-btn.active {
  background: var(--primary-color);
  color: var(--text-white);
  border-color: var(--primary-color);
}

.todo-list {
  margin-bottom: 2rem;
}

.todo-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: var(--transition);
  animation: slideIn 0.3s ease-out;
}

.todo-item:hover {
  border-color: var(--primary-color);
  box-shadow: var(--shadow-md);
}

.todo-item.completed {
  opacity: 0.7;
  background: var(--bg-secondary);
}

.todo-item.priority-high { border-left: 4px solid var(--danger-color); }
.todo-item.priority-medium { border-left: 4px solid var(--warning-color); }
.todo-item.priority-low { border-left: 4px solid var(--success-color); }

.todo-item-main {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.todo-checkbox {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--text-light);
  transition: var(--transition);
}

.todo-checkbox:hover {
  color: var(--success-color);
  transform: scale(1.1);
}

.todo-content {
  flex: 1;
}

.todo-text {
  font-size: 1rem;
  color: var(--text-primary);
  word-break: break-word;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: var(--text-light);
}

.todo-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.priority-badge {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.priority-badge.priority-high {
  background: rgba(245, 101, 101, 0.2);
  color: var(--danger-color);
}

.priority-badge.priority-medium {
  background: rgba(237, 137, 54, 0.2);
  color: var(--warning-color);
}

.priority-badge.priority-low {
  background: rgba(72, 187, 120, 0.2);
  color: var(--success-color);
}

.todo-date {
  font-size: 0.75rem;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.todo-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-icon {
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

.btn-edit {
  background: var(--info-color);
  color: var(--text-white);
}

.btn-edit:hover {
  background: #3182ce;
  transform: scale(1.1);
}

.btn-delete {
  background: var(--danger-color);
  color: var(--text-white);
}

.btn-delete:hover {
  background: #e53e3e;
  transform: scale(1.1);
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--text-secondary);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .app {
    padding: 1rem 0.5rem;
  }
  
  .app-header {
    padding: 1.5rem 1rem;
  }
  
  .app-title {
    font-size: 2rem;
  }
  
  .app-main {
    padding: 1.5rem 1rem;
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .todo-item {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
}
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);