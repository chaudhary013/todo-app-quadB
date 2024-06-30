// src/components/TaskInput.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../redux/actions';
import './TaskInput.css';

const TaskInput = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const currentEdit = useSelector(state => state.currentEdit);
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    if (currentEdit !== null) {
      setTitle(tasks[currentEdit].title);
      setDescription(tasks[currentEdit].description);
    }
  }, [currentEdit, tasks]);

  const handleAddTask = () => {
    if (title && description) {
      const task = { title, description };
      if (currentEdit !== null) {
        dispatch(updateTask(task, currentEdit));
      } else {
        dispatch(addTask(task));
      }
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="task-input">
      <div className="task-input-item">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's the task title?"
        />
      </div>
      <div className="task-input-item">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What's the task description?"
        />
      </div>
      <div className="task-input-item">
        <button
          type="button"
          onClick={handleAddTask}
          className="primaryBtn"
        >
          {currentEdit !== null ? 'Update' : 'Add'}
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
