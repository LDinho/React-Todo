import React from 'react';

const Todo = (props) => {
  const {task} = props;

  return (
    <div>
      <p>{task}</p>
    </div>
  )
}

export default Todo;
