import React from 'react';

class TodoForm extends React.Component {

  render() {
    return (
      <form>
        <input
          name="name"
          onChange={this.inputChangeHandler}
          placeholder="add your task here..."
        />
        <button type="submit">Add Task</button>
        <button type="submit">Clear Completed</button>
      </form>
    );
  }

}

export default TodoForm;

/*

Your input field should take in user input,
and allow a user to press Enter or click on
the Submit Button to add a task to the list.

Once a task is submitted, the list should
re-render and show the added task.

 */
