import React, {useRef} from 'react';

import './Todo.css';


const TodoForm = ({onFormSubmit, onClearBtnClick}) => {
  // React Hooks:
  // https://reactjs.org/docs/hooks-reference.html#useref
  //https://reactjs.org/docs/refs-and-the-dom.html
  const inputEl = useRef(null);

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

      <label className="label" htmlFor="">
        Add a task:
        <input
          className="input"
          name="todo"
          ref={inputEl}
          placeholder="What to do...?"
        />
      </label>

      <div className="button-wrapper">
        <button className="btn add-btn" type="submit">Add Task</button>
        <button className="btn clear-btn" onClick={onClearBtnClick}>Clear Completed</button>
      </div>
    </form>
  );

}

export default TodoForm;

