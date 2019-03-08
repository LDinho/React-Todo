import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

// const sampleTodosData = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Chocolate Cookies',
//     id: 1528817084358,
//     completed: false
//   }
// ];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],

    }
  }

  handleFormSubmit = (newTodo) => {
    console.log('TASKNAME:', newTodo);
    this.setState( (prevState) => {
      return {
        tasks: [...prevState.tasks, newTodo]
      }
      // if not using prevState, then just pass
      // in this.setState { tasks: [...this.state.tasks, newTodo] }
      // this.setState takes either a function or an object
    });
  }

  handleTaskClick = (id) => {
    console.log('IDDDD::',id)
    const {tasks} = this.state;

    const clickedTaskIndex = tasks.findIndex((task) => id === task.id)
    const clickedTask = tasks[clickedTaskIndex];
    console.log('clickedTask', clickedTask);

    const updatedTask = {
      ...clickedTask,
      completed: !clickedTask.completed,
    };

    this.setState( (prevState) => {
      const updatedTasks = [...prevState.tasks];

      updatedTasks[clickedTaskIndex] = updatedTask;
      return {
        tasks: updatedTasks
      }

    }, () => {console.log('NEWCHANGE::',this.state)} ); //Adding callback here to see
    // changes in state as it happens
    console.log('clickedTaskIndex', clickedTaskIndex);
  }

  handleClearCompleted = () => {

    const incompleteTasks = this.state.tasks.filter((task) => {
      return task.completed === false;
    })

    this.setState({
      tasks: incompleteTasks,
    })
  }

  render() {
    console.log('STATE:', this.state);
    return (
      <div>
        <h2>==TodoOrNotTodo==</h2>
        <TodoForm onFormSubmit={this.handleFormSubmit}
                  onClearBtnClick={this.handleClearCompleted}
        />
        <TodoList tasks={this.state.tasks}
                  onTaskClickHandler={this.handleTaskClick}
        />

      </div>
    );
  }
}

export default App;
