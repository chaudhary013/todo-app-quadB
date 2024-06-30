// src/App.js
import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);

  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <TaskInput />
        <div className="btn-area">
          <button
            className={`secondaryBtn ${!isCompleteScreen && 'active'}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen && 'active'}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>
        <TaskList isCompleteScreen={isCompleteScreen} />
      </div>
    </div>
  );
}

export default App;
