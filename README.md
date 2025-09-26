# TodoMaster - Advanced React Todo Application

A modern, feature-rich Todo application built with React, showcasing advanced component architecture, state management, and responsive design.

## 🚀 Features

- **Complete Todo Management**: Add, edit, delete, and mark todos as complete
- **Priority System**: Organize tasks by High, Medium, and Low priority
- **Smart Filtering**: Filter todos by status (All, Active, Completed) and priority
- **Real-time Statistics**: Track your progress with visual stats and progress bars
- **Local Storage**: Persist todos across browser sessions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🛠️ Technologies Used

- **React 18.2.0**: Modern React with Hooks (useState, useEffect)
- **Webpack 5**: Advanced bundling and development server
- **Babel**: JSX and ES6+ transpilation
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Font Awesome**: Beautiful icons throughout the application
- **Local Storage API**: Client-side data persistence

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todomaster-react.git
   cd todomaster-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Usage

### Adding Todos
- Enter your task in the input field
- Select a priority level (High, Medium, Low)
- Press Enter or click the "Add Todo" button

### Managing Todos
- **Complete**: Click the checkmark icon to mark as complete
- **Edit**: Click the edit icon to modify the todo text
- **Delete**: Click the trash icon to remove the todo
- **Priority**: Update priority using the dropdown in edit mode

### Filtering & Stats
- Use filter buttons to view All, Active, or Completed todos
- Filter by priority levels (High, Medium, Low)
- View real-time statistics showing total, active, completed todos and progress

### Data Persistence
- All todos are automatically saved to browser's local storage
- Data persists across browser sessions and page refreshes

## 🏗️ Project Structure

```
TODO APP/
├── src/
│   ├── components/
│   │   ├── AddTodo.js
│   │   ├── TodoList.js
│   │   ├── TodoItem.js
│   │   ├── FilterTodos.js
│   │   └── Stats.js
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.js
│   ├── index.js
│   └── index.html
├── webpack.config.js
├── babel.config.js
├── package.json
└── README.md
```

## 🎨 Design Features

- **Color Scheme**: Modern gradient backgrounds with accessible color contrasts
- **Typography**: Clean Inter font family for optimal readability
- **Icons**: Font Awesome icons for intuitive navigation
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first design that scales beautifully

## 🔧 Configuration

### Webpack Configuration
- Development server with hot reloading
- CSS and file loaders for assets
- Babel transpilation for JSX and modern JavaScript
- HTML plugin for dynamic HTML generation

### Babel Configuration
- React JSX support
- ES6+ features transpilation
- Browser compatibility targeting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kumar Ashutosh**
- Email: code.ashutosh08@gmail.com
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn Profile]

## 🎉 Acknowledgments

- React team for the amazing framework
- Font Awesome for beautiful icons
- Modern CSS techniques and best practices community
- Open source community for inspiration and tools

---

⭐ Star this repository if you found it helpful!