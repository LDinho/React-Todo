import React, {useRef} from 'react';

const TodoForm = ({onFormSubmit, onClearBtnClick}) => {
  const inputEl = useRef(null); // React Hook

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const task = inputEl.current.value;

      if (!task) {
        return;
      }

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
      <button onClick={onClearBtnClick}>Clear Completed</button>
    </form>
  );

}

export default TodoForm;

