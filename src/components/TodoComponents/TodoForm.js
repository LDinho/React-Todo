import React, {useRef} from 'react';

const TodoForm = ({onFormSubmit}) => {
  const inputEl = useRef(null); // React Hook

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const task = inputEl.current.value;
      const newTodo = {
        task,
        id: Date.now(),
        completed: false,
      };

      onFormSubmit(newTodo);
      inputEl.current.value = '';
    }}>
      <input
        name="name"
        ref={inputEl}
        placeholder="add your task here..."
      />
      <button type="submit">Add Task</button>
      <button>Clear Completed</button>
    </form>
  );

}

export default TodoForm;

