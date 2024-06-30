// src/redux/actions.js
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_COMPLETED_TASK = 'DELETE_COMPLETED_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});

export const completeTask = (index) => ({
  type: COMPLETE_TASK,
  payload: index,
});

export const deleteCompletedTask = (index) => ({
  type: DELETE_COMPLETED_TASK,
  payload: index,
});

export const editTask = (index) => ({
  type: EDIT_TASK,
  payload: index,
});

export const updateTask = (task, index) => ({
  type: UPDATE_TASK,
  payload: { task, index },
});
