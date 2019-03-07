import React from 'react';

const Todo = ({task, onTaskClick}) => {

  return (
    <div onClick={onTaskClick}>
      <p>
        {task.completed ?
          <strike>{task.task}</strike>
          :
          task.task
        }
      </p>
    </div>
  )
}

export default Todo;
