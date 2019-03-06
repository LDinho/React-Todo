import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
  console.log('INSIDE TodoList', props);
  const {tasksArrayProps} = props;

  return (
    <div>
      {tasksArrayProps.map((obj) => {
        console.log('FROM MAP:::', obj.task);
        const task = obj.task;

        return <Todo key={obj.id} task={task} />

      })}
    </div>
  )
}

export default TodoList;
