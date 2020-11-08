import React from 'react';

import TodoListPhaseFour from './Todo-list-course/todo-list-phase2';
import TodoListData from './Todo-list-course/todo-list-data';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoListData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })

            return {
                todos: updatedTodos
            }

        })
    }

    render() {
        /* Todo-list Crash Course */
        const { todos } = this.state
        const TodoCard = todos.map((todo) => {
            return (
                <TodoListPhaseFour
                    key={todo.id}
                    todosItem={todo}
                    handleChange={this.handleChange}
                />
            )
        })

        return (
            <div className="main">
                <div className="todo-list-container container m-auto">
                    <h3>Todo-list</h3>
                    {TodoCard}
                </div>
            </div>
        )
    }
}

export default TodoApp