import React from 'react';

import Todo from './Todo';

const TodoList = ({tasks, onTaskClickHandler}) => { // Destructuring the
  // props passed in TodoList

  console.log('INSIDE TodoList:', tasks);
  return (
    <div>
      {tasks.map((task) => {
        console.log('FROM MAP:', task.task);
        const {id} = task;

        return <Todo key={id}
                     task={task}
                     onTaskClick={() => {
                       onTaskClickHandler(id);
                     }}
        />

      })}
    </div>
  )
}

export default TodoList;
