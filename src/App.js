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
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: todosData,

    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>==TodoOrNotTodo==</h2>
        <TodoList tasksArrayProps={this.state.tasks} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
