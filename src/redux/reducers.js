// src/redux/reducers.js
import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, DELETE_COMPLETED_TASK, EDIT_TASK, UPDATE_TASK } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  completedTasks: JSON.parse(localStorage.getItem('completedTasks')) || [],
  currentEdit: null,
};

const tasksReducer = (state = initialState, action) => {
  let tasks, completedTasks;
  switch (action.type) {
    case ADD_TASK:
      tasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return { ...state, tasks };
      
    case DELETE_TASK:
      tasks = state.tasks.filter((_, i) => i !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return { ...state, tasks };

       case DELETE_COMPLETED_TASK:
      completedTasks = state.completedTasks.filter((_, i) => i !== action.payload);
      localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
      return { ...state, completedTasks };
      
    case COMPLETE_TASK:
      completedTasks = [...state.completedTasks, state.tasks[action.payload]];
      tasks = state.tasks.filter((_, i) => i !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
      return { ...state, tasks, completedTasks };
      
    case EDIT_TASK:
      return { ...state, currentEdit: action.payload };
      
    case UPDATE_TASK:
      tasks = [...state.tasks];
      tasks[action.payload.index] = action.payload.task;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return { ...state, tasks, currentEdit: null };
      
    default:
      return state;
  }
};

export default tasksReducer;
