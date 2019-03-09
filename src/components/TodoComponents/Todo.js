import React from 'react';

const Todo = ({task, onTaskClick}) => {

  return (
    <div className="item-wrapper" onClick={onTaskClick}>
      <p>
        {task.completed ?
          <strike>{task.task}</strike> // need to use CSS for the strike through
          :
          task.task
        }
      </p>
    </div>
  )
}

export default Todo;
