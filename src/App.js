import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



const tasks = [
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false 
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state= {
      tasks
    }
  }
  toggleTask = todoId => {
    console.log(todoId);

    this.setState({
      tasks: this.state.tasks.map(todo => {
        if (todoId ===todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    })
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
        toggleTask={this.toggleTask}
        clearCompleted={this.clearCompleted}
        tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
