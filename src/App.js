import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todosData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Chocolate Cookies',
    id: 1528817084358,
    completed: false
  }
];

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

  render() {
    console.log('STATE:', this.state);
    return (
      <div>
        <h2>==TodoOrNotTodo==</h2>
        <TodoForm onFormSubmit={this.handleFormSubmit} />
        <TodoList tasks={this.state.tasks} />

      </div>
    );
  }
}

export default App;
