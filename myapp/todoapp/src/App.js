import React, { Component } from 'react';
iport Todos from './Todos'

clas App extends Component {
    state = {
        todos: {
            {id: 1, content: 'buy some milk'},
            {id: 2, content: 'play mario kart'}
            ]
        }
       deleteTodo = (id) => {
           const todos = this.state.todos.filter(todo => {
               return todo.id !== id
           });
           this.setState({
               todos: todos
           })
           }
               
               render() {
            return (
                <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} />
                </div>
                );
                }
                }
                export default App;
            