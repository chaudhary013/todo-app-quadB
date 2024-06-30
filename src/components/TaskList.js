// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, completeTask, editTask, deleteCompletedTask } from '../redux/actions';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import './TaskList.css';

const TaskList = ({ isCompleteScreen }) => {
  const tasks = useSelector(state => state.tasks);
  const completedTasks = useSelector(state => state.completedTasks);
  const currentEdit = useSelector(state => state.currentEdit);
  const dispatch = useDispatch();

  return (
    <div className="todo-list">
      {isCompleteScreen ? (
        completedTasks.map((item, index) => (
          <div className="todo-list-item" key={index}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><small>Completed on: {item.completedOn}</small></p>
            </div>
            <AiOutlineDelete
              className="icon"
              onClick={() => dispatch(deleteCompletedTask(index))}
              title="Delete?"
            />
          </div>
        ))
      ) : (
        tasks.map((item, index) => (
          <div className="todo-list-item" key={index}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div>
              <AiOutlineDelete
                className="icon"
                onClick={() => dispatch(deleteTask(index))}
                title="Delete?"
              />
              <BsCheckLg
                className="check-icon"
                onClick={() => dispatch(completeTask(index))}
                title="Complete?"
              />
              <AiOutlineEdit
                className="icon"
                onClick={() => dispatch(editTask(index))}
                title="Edit?"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
