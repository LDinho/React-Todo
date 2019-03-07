import React from 'react';

import Todo from './Todo';

const TodoList = ({tasks}) => {
  console.log('INSIDE TodoList:', tasks);

  return (
    <div>
      {tasks.map((task) => {
        console.log('FROM MAP:', task.task);
        const {id} = task;

        return <Todo key={id} task={task.task} />

      })}
    </div>
  )
}

export default TodoList;
